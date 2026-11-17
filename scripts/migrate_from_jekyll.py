#!/usr/bin/env python3
"""Convert the Jekyll content in pages/ into the Astro content collection.

Reads (never writes): pages/, images/, _config.yml, favicon.ico, CNAME.
Writes (deleted and rewritten on every run, so the script is idempotent):

    src/content/pages/      one markdown file per old URL
    src/assets/images/      images that markdown references (plate and body)
    public/images/          images that must keep their /images/ URL
    public/favicon.ico, public/CNAME
    templates/              the `_`-prefixed templates, unchanged

It changes markup, paths, front matter and heading levels only. Prose is not
touched. Run from anywhere:  python3 scripts/migrate_from_jekyll.py [-v]

ONE-SHOT. It ran on 2026-11-17 and its output was committed, then fixed by hand
(lsp-chapter-3 table delimiter, markdown-chapter-2 code samples) and rewritten by
the book pass. A second run deletes all of that, so it refuses unless --force.
After pages/ is removed it has nothing to read; it stays as the record of how
the Jekyll content was converted.
"""

from __future__ import annotations

import re
import shutil
import sys
from collections import Counter
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
PAGES = ROOT / "pages"
IMAGES = ROOT / "images"
OUT_CONTENT = ROOT / "src" / "content" / "pages"
OUT_ASSETS = ROOT / "src" / "assets" / "images"
OUT_PUBLIC = ROOT / "public"
OUT_TEMPLATES = ROOT / "templates"

VERBOSE = "-v" in sys.argv

# slug -> (shelf, hue, glyph)
SPINES = {
    "confluence": ("tools", 245, "pages"),
    "jira": ("tools", 227, "ticket"),
    "airtable": ("tools", 175, "table"),
    "markdown": ("tools", 70, "hash"),
    "obsidian": ("tools", 280, "gem"),
    "adrs": ("tools", 0, "scroll"),
    "ai-at-work": ("tools", 315, "spark"),
    "communication-tips": ("people", 297, "message"),
    "mentoring": ("people", 122, "sprout"),
    "management-101": ("people", 262, "crown"),
    "okr": ("people", 105, "target"),
    "incident-response": ("people", 17, "siren"),
    "ds-interviews": ("career", 52, "bonfire"),
    "writing": ("career", 210, "pen"),
    "troubleshooting": ("career", 140, "wrench"),
    "thesis-the-core-five": ("theories", 192, "knight"),
    "lsp": ("theories", 35, "brick"),
    "company-politics-game": ("theories", 332, "dice"),
    "shopping": ("life", 87, "cart"),
    "digital-life": ("life", 157, "lock"),
    "mini-books": ("odds", 350, "book"),
}

ELSEWHERE = {
    "shopping": ("BuyHacks", "https://buyhacks.neorgon.com/", "superseded",
                 "The product list moved to BuyHacks, with photos, categories and votes."),
    "troubleshooting": ("Incident Runbook", "https://runbook.neorgon.com/", "superseded",
                        "The method grew into a full runbook with worked examples."),
    "company-politics-game": ("Rush Q Cards", "https://rushq.neorgon.com/", "superseded",
                              "The board game became Rush Q Cards, playable in the browser."),
    "thesis-the-core-five": ("Vibe Check", "https://interviews.neorgon.com/", "related",
                             "An interview scorecard that matches candidates to the Core Five pieces."),
    "ds-interviews": ("Playbook", "https://playbook.neorgon.com/", "related",
                      "Career advice for tech, in English and Spanish."),
    "incident-response": ("Incident Runbook", "https://runbook.neorgon.com/", "related",
                          "Runbooks for the moment something is on fire."),
    "digital-life": ("SafeGuard", "https://safeguard.neorgon.com/", "related",
                     "Step-by-step security guides for accounts and devices."),
    "ai-at-work": ("Agent Lore", "https://agentlore.neorgon.com/", "related",
                   "Guides for setting up and checking AI agents."),
}

# Pages that have no description of their own. Each phrase comes from the
# page's own first heading or first line.
WRITTEN_DESCRIPTIONS = {
    "okr-chapter-ref": "A reference list of articles about OKRs.",
    "tutorials-announcements": "A pattern for structuring an announcement.",
    "drafts/documentation-fix": "An empty draft titled Documentation Fix.",
    "drafts/gmail": "An empty draft titled Gmail.",
    "drafts/mentoring": "Draft notes on mentoring teenagers.",
    "drafts/pitfalls": "Draft note on judging your level from a few weeks of movement.",
}

# Files whose copy-button markup is converted to fenced code.
CODE_CONTAINER_FILES = {"airtable-chapter-3-5", "airtable-chapter-3-9"}

BOOK_LANDINGS_EXTRA = {"company-politics-game"}

stats = Counter()
report = {
    "chapter_titles": [],
    "landing_diffs": [],
    "descriptions": [],
    "links": [],
    "raw_imgs": [],
    "alts": [],
    "style_notes": [],
    "warnings": [],
    "plates": [],
    "no_plate": [],
}
referenced_assets: set[str] = set()   # source paths under images/ that went to src/assets
referenced_public: set[str] = set()   # source paths under images/ that went to public/
asset_names: dict[str, str] = {}      # old rel path -> new rel path (renamed)


# ---------------------------------------------------------------- literal regions

FENCE_RE = re.compile(r"^\s*(`{3,}|~{3,})")


def literal_mask(lines: list[str]) -> list[bool]:
    """True for lines that are fenced code or inside a raw <pre> block."""
    mask: list[bool] = []
    fence = None
    in_pre = False
    for line in lines:
        if fence:
            mask.append(True)
            m = re.match(r"^\s*(`{3,}|~{3,})\s*$", line)
            if m and m.group(1)[0] == fence[0] and len(m.group(1)) >= len(fence):
                fence = None
            continue
        if in_pre:
            mask.append(True)
            if "</pre>" in line:
                in_pre = False
            continue
        m = FENCE_RE.match(line)
        if m and not (m.group(1)[0] == "`" and "`" in line[m.end():]):
            fence = m.group(1)
            mask.append(True)
            continue
        if re.match(r"^\s*<pre\b", line):
            mask.append(True)
            in_pre = "</pre>" not in line
            continue
        mask.append(False)
    if fence or in_pre:
        report["warnings"].append("unclosed fence or <pre> at end of file")
    return mask


# ---------------------------------------------------------------- images

def kebab_name(rel: str) -> str:
    """Rename a file that has spaces or uppercase to lowercase kebab-case."""
    p = Path(rel)
    name = p.name
    if re.search(r"[A-Z\s]", name):
        stem, ext = p.stem, p.suffix
        new = re.sub(r"\s+", "-", stem.strip()).lower() + ext.lower()
        new = re.sub(r"-{2,}", "-", new)
        return str(p.with_name(new))
    return rel


def image_rel(src: str) -> str | None:
    for prefix in ("../images/", "/images/", "images/", "./images/"):
        if src.startswith(prefix):
            return src[len(prefix):]
    return None


def use_asset(rel: str) -> str:
    """Register an image for src/assets and return its (possibly renamed) rel path."""
    src = IMAGES / rel
    if not src.is_file():
        report["warnings"].append(f"missing image: images/{rel}")
    new = kebab_name(rel)
    if new != rel:
        asset_names[rel] = new
    referenced_assets.add(rel)
    return new


def use_public(rel: str) -> str:
    if not (IMAGES / rel).is_file():
        report["warnings"].append(f"missing image: images/{rel}")
    referenced_public.add(rel)
    return rel


def url_quote(rel: str) -> str:
    return rel.replace(" ", "%20")


ATTR_RE = re.compile(r"""([\w:-]+)\s*=\s*("([^"]*)"|'([^']*)')""")


def parse_attrs(s: str) -> dict[str, str]:
    return {m.group(1): (m.group(3) if m.group(3) is not None else m.group(4)) for m in ATTR_RE.finditer(s)}


IMG_ALONE = re.compile(r"^(\s*)<img\b([^>]*?)/?>\s*$")


def words_from_filename(rel: str) -> str:
    stem = Path(rel).stem
    stem = re.sub(r"[\"'’`]", "", stem)
    return re.sub(r"[-_\s]+", " ", stem).strip()


def esc_alt(alt: str) -> str:
    return alt.replace("\\", "\\\\").replace("[", "\\[").replace("]", "\\]").replace("\n", " ").strip()


# ---------------------------------------------------------------- body steps

def convert_code_containers(text: str, slug: str) -> str:
    pat = re.compile(
        r'^[ \t]*<div class="code-container">\s*<button[^>]*>.*?</button>\s*'
        r"<pre><code>(.*?)</code></pre>\s*</div>[ \t]*$",
        re.S | re.M,
    )

    def unescape(code: str) -> str:
        for a, b in (("&lt;", "<"), ("&gt;", ">"), ("&quot;", '"'), ("&#39;", "'"), ("&amp;", "&")):
            code = code.replace(a, b)
        return code

    def repl(m: re.Match) -> str:
        code = unescape(m.group(1)).strip("\n")
        fence = "```"
        while fence in code:
            fence += "`"
        stats["code_blocks"] += 1
        return f"\n{fence}js\n{code}\n{fence}\n"

    out = pat.sub(repl, text)
    left = len(re.findall(r'class="code-container"', out))
    if left:
        report["warnings"].append(f"{slug}: {left} code-container left unconverted")
    return out


def strip_style_script(lines: list[str], slug: str) -> tuple[list[str], str]:
    """Remove <style> and <script> blocks outside code. Returns lines and the css found."""
    mask = literal_mask(lines)
    out: list[str] = []
    css = ""
    i = 0
    while i < len(lines):
        if not mask[i]:
            m = re.match(r"^\s*<(style|script)\b[^>]*>", lines[i])
            if m:
                tag = m.group(1)
                j = i
                block = []
                while j < len(lines) and f"</{tag}>" not in lines[j]:
                    block.append(lines[j])
                    j += 1
                block.append(lines[j] if j < len(lines) else "")
                if tag == "style":
                    css += "\n".join(block)
                stats[f"{tag}_blocks"] += 1
                i = j + 1
                continue
        out.append(lines[i])
        i += 1
    return out, css


def parse_css(css: str) -> tuple[dict[str, str], list[str]]:
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    css = re.sub(r"</?style>", "", css)
    rules: dict[str, str] = {}
    unsupported: list[str] = []
    for sel, body in re.findall(r"([^{}]+)\{([^}]*)\}", css):
        sel = sel.strip()
        decls = [d.strip() for d in body.split(";") if d.strip()]
        text = "; ".join(decls) + ";"
        if re.fullmatch(r"\.[\w-]+", sel):
            rules[sel[1:]] = text
        else:
            unsupported.append(f"{sel} {{ {text} }}")
    return rules, unsupported


def inline_css(lines: list[str], rules: dict[str, str]) -> list[str]:
    mask = literal_mask(lines)
    tag_re = re.compile(r"<(\w+)((?:\s+[\w:-]+=\"[^\"]*\")*)\s*>")

    def fix(m: re.Match) -> str:
        attrs = parse_attrs(m.group(2))
        cls = attrs.get("class", "").split()
        hit = [c for c in cls if c in rules]
        if not hit:
            return m.group(0)
        add = " ".join(rules[c] for c in hit)
        rest = [c for c in cls if c not in rules]
        parts = []
        style_done = False
        for k, v in attrs.items():
            if k == "class":
                if rest:
                    parts.append(f'class="{" ".join(rest)}"')
            elif k == "style":
                parts.append(f'style="{add} {v.strip()}"')
                style_done = True
            else:
                parts.append(f'{k}="{v}"')
        if not style_done:
            parts.append(f'style="{add}"')
        stats["css_inlined"] += 1
        return f"<{m.group(1)} {' '.join(parts)}>"

    return [l if mask[i] else tag_re.sub(fix, l) for i, l in enumerate(lines)]


def remove_boilerplate(lines: list[str]) -> list[str]:
    mask = literal_mask(lines)
    out: list[str] = []
    i = 0
    while i < len(lines):
        l = lines[i]
        if not mask[i]:
            if re.search(r"\{%\s*include\s+chapter-nav\.html[^%]*%\}", l):
                stats["chapter_nav_removed"] += 1
                i += 1
                continue
            if re.match(r'^\s*<div class="nav-buttons\b', l):
                j = i
                while j < len(lines) and "</div>" not in lines[j]:
                    j += 1
                stats["nav_buttons_removed"] += 1
                i = j + 1
                continue
            if re.match(r"^\s*<br\s*/?>\s*$", l):
                stats["br_removed"] += 1
                i += 1
                continue
        out.append(l)
        i += 1
    return out


def extract_plate(lines: list[str], slug: str) -> tuple[list[str], tuple[str, str, str | None] | None]:
    """Find the header image and drop it plus the rules that framed it.

    Returns the new lines and (asset rel path, alt, source_url_or_None)."""
    mask = literal_mask(lines)
    drop: set[int] = set()
    plate = None
    for i, l in enumerate(lines):
        if mask[i]:
            break
        s = l.strip()
        if not s:
            continue
        if s == "---":
            drop.add(i)
            continue
        m = IMG_ALONE.match(l)
        if m:
            if plate is None:
                a = parse_attrs(m.group(2))
                rel = image_rel(a.get("src", ""))
                if rel is None:
                    report["warnings"].append(f"{slug}: plate src not under images/: {a.get('src')}")
                else:
                    plate = (rel, a.get("alt", ""), a)
                    drop.add(i)
            continue
        if s.startswith(">"):
            continue
        break
    if plate is None:
        return [l for i, l in enumerate(lines) if i not in drop], None
    rel, alt, _attrs = plate
    new_rel = use_asset(rel)
    source_url = None
    if re.match(r"https?://", alt.strip()):
        source_url = alt.strip()
        alt = words_from_filename(new_rel)
    elif not alt.strip():
        alt = words_from_filename(new_rel)
    stats["plates"] += 1
    return [l for i, l in enumerate(lines) if i not in drop], (new_rel, alt, source_url)


def html_block_start(lines: list[str], i: int) -> bool:
    """True when line i sits inside a raw HTML block (it continues until a blank line)."""
    j = i
    while j - 1 >= 0 and lines[j - 1].strip():
        j -= 1
    first = lines[j]
    if j == i:
        return False
    return bool(re.match(r"^ {0,3}<(div|details|summary|table|ul|ol|p|section|blockquote|center|figure|aside)\b", first))


def convert_images(lines: list[str], slug: str, depth: str) -> list[str]:
    mask = literal_mask(lines)
    out: list[str] = []
    md_img = re.compile(r'!\[([^\]]*)\]\((\.\./images/[^)\s"]+)(?:\s+"([^"]*)")?\)')
    for i, l in enumerate(lines):
        if mask[i]:
            out.append(l)
            continue
        m = IMG_ALONE.match(l)
        if m:
            a = parse_attrs(m.group(2))
            rel = image_rel(a.get("src", ""))
            alt = a.get("alt", "")
            if rel is None:
                report["warnings"].append(f"{slug}: img src outside images/: {a.get('src')}")
                out.append(l)
                continue
            if not (IMAGES / rel).is_file():
                # the file never existed under images/: keep the reference, it cannot be bundled
                stats["missing_img"] += 1
                report["raw_imgs"].append(f"{slug}: MISSING source images/{rel}, kept as <img src=\"/images/{rel}\">")
                out.append(re.sub(r'src="[^"]*"', f'src="/images/{url_quote(rel)}"', l, count=1))
                continue
            if html_block_start(lines, i):
                pub = use_public(rel)
                new = re.sub(r'src="[^"]*"', f'src="/images/{url_quote(pub)}"', l, count=1)
                out.append(new)
                stats["raw_img"] += 1
                report["raw_imgs"].append(f"{slug}: <img src=\"/images/{pub}\"> inside an HTML block (copied to public/)")
                continue
            new_rel = use_asset(rel)
            title = f' "{a["title"]}"' if a.get("title") else ""
            out.append(f"{m.group(1)}![{esc_alt(alt)}]({depth}{url_quote(new_rel)}{title})")
            report["alts"].append((slug, alt, new_rel))
            stats["img_converted"] += 1
            continue
        if "<img" in l:
            # an img that shares its line with other content stays raw
            def fix(mm: re.Match) -> str:
                a = parse_attrs(mm.group(1))
                rel = image_rel(a.get("src", ""))
                if rel is None:
                    return mm.group(0)
                pub = use_public(rel)
                stats["raw_img"] += 1
                report["raw_imgs"].append(f"{slug}: inline <img src=\"/images/{pub}\"> (copied to public/)")
                return re.sub(r'src="[^"]*"', f'src="/images/{url_quote(pub)}"', mm.group(0), count=1)
            l = re.sub(r"<img\b([^>]*?)/?>", fix, l)

        def md_fix(mm: re.Match) -> str:
            rel = image_rel(mm.group(2))
            new_rel = use_asset(rel)
            title = f' "{mm.group(3)}"' if mm.group(3) else ""
            stats["img_converted"] += 1
            report["alts"].append((slug, mm.group(1), new_rel))
            return f"![{mm.group(1)}]({depth}{url_quote(new_rel)}{title})"

        l = md_img.sub(md_fix, l)
        out.append(l)
    return out


def convert_spans(lines: list[str]) -> list[str]:
    mask = literal_mask(lines)
    peek = re.compile(r'<span\s+class="hover-image-trigger"\s+data-image="([^"]*)"\s*>')

    def peek_fix(m: re.Match) -> str:
        rel = image_rel(m.group(1))
        if rel is None:
            return m.group(0)
        pub = use_public(rel)
        stats["peeks"] += 1
        return f'<span class="peek" data-image="/images/{url_quote(pub)}">'

    out = []
    for i, l in enumerate(lines):
        if not mask[i]:
            n = l.count('class="highlight"')
            if n:
                l = l.replace('<span class="highlight">', '<span class="ui">')
                stats["highlights"] += n
            l = peek.sub(peek_fix, l)
        out.append(l)
    return out


def convert_links(lines: list[str], slug: str) -> list[str]:
    mask = literal_mask(lines)
    md_link = re.compile(r"(?<!!)(\[[^\]]*\])\(([^)\s]+)((?:\s+\"[^\"]*\")?)\)")
    href = re.compile(r'href="([^"]*)"')

    def target(t: str) -> str | None:
        if re.match(r"^(https?:|mailto:|tel:|#|/)", t):
            return "/" if t == "/index" else None
        m = re.match(r"^(?:\./pages/|\./|\.\./pages/|pages/)?([^/#?]+?)(?:\.md)?((?:#.*)?)$", t)
        if m and not re.search(r"\.(png|jpe?g|gif|svg|ico|html|css|js)$", m.group(1)):
            return f"/pages/{m.group(1)}{m.group(2)}"
        return None

    def fix_target(t: str) -> str:
        if t == "/index":
            new = "/"
        else:
            new = target(t)
        if new is None:
            if not re.match(r"^(https?:|mailto:|tel:|#|/)", t):
                report["links"].append(f"{slug}: relative link left as is: {t}")
            return t
        report["links"].append(f"{slug}: {t} -> {new}")
        stats["links_rewritten"] += 1
        return new

    out = []
    for i, l in enumerate(lines):
        if not mask[i]:
            l = md_link.sub(lambda m: f"{m.group(1)}({fix_target(m.group(2))}{m.group(3)})", l)
            l = href.sub(lambda m: f'href="{fix_target(m.group(1))}"', l)
        out.append(l)
    return out


def demote_headings(lines: list[str]) -> list[str]:
    mask = literal_mask(lines)
    out = []
    for i, l in enumerate(lines):
        if not mask[i]:
            m = re.match(r"^( {0,3})(#{1,6})(?=\s|$)(.*)$", l)
            if m and len(m.group(2)) < 6:
                l = f"{m.group(1)}#{m.group(2)}{m.group(3)}"
                stats["headings_demoted"] += 1
        out.append(l)
    return out


def tidy(lines: list[str]) -> list[str]:
    """Collapse blank runs, keep a blank line before every `---`, trim the ends."""
    mask = literal_mask(lines)
    out: list[str] = []
    for i, l in enumerate(lines):
        l = l.rstrip() if not mask[i] and not l.rstrip().endswith("  ") else l
        if not mask[i]:
            if not l.strip() and out and not out[-1].strip():
                continue
            if l.strip() == "---" and out and out[-1].strip() and out[-1].strip() != "---":
                out.append("")
                stats["blank_before_rule"] += 1
        out.append(l)
    while out and not out[0].strip():
        out.pop(0)
    while out and not out[-1].strip():
        out.pop()
    return out


# ---------------------------------------------------------------- driver

def split_front_matter(text: str) -> tuple[dict, str]:
    m = re.match(r"^---\n(.*?)\n---\n?", text, re.S)
    if not m:
        raise ValueError("no front matter")
    return yaml.safe_load(m.group(1)) or {}, text[m.end():]


def dump_yaml(data: dict) -> str:
    return yaml.safe_dump(data, sort_keys=False, allow_unicode=True, width=10000, default_flow_style=False)


def clean_dir(p: Path) -> None:
    if p.exists():
        shutil.rmtree(p)
    p.mkdir(parents=True)


def main() -> int:
    if OUT_CONTENT.exists() and "--force" not in sys.argv:
        print("refusing: src/content/pages exists and holds edits made after the migration. "
              "Pass --force only if you mean to throw them away.", file=sys.stderr)
        return 2
    config = yaml.safe_load((ROOT / "_config.yml").read_text())
    books = {b["slug"]: b for b in config["books"]}
    landing_slugs = set(books) | BOOK_LANDINGS_EXTRA
    missing = landing_slugs - set(SPINES)
    if missing:
        raise SystemExit(f"no spine entry for {sorted(missing)}")

    for d in (OUT_CONTENT, OUT_ASSETS, OUT_PUBLIC / "images", OUT_TEMPLATES):
        clean_dir(d)

    sources = sorted(PAGES.glob("*.md")) + sorted((PAGES / "drafts").glob("*.md"))
    written: list[str] = []
    for src in sources:
        rel_md = src.relative_to(PAGES)          # e.g. drafts/pitfalls.md
        if src.name.startswith("_"):
            shutil.copyfile(src, OUT_TEMPLATES / src.name)
            stats["templates"] += 1
            continue
        slug = str(rel_md.with_suffix(""))        # drafts/pitfalls
        is_draft = rel_md.parts[0] == "drafts"
        depth = "../../../assets/images/" if is_draft else "../../assets/images/"

        fm, body = split_front_matter(src.read_text())

        # ---- body
        if slug in CODE_CONTAINER_FILES:
            body = convert_code_containers(body, slug)
        lines = body.split("\n")
        lines, css = strip_style_script(lines, slug)
        if css and slug not in CODE_CONTAINER_FILES:
            rules, unsupported = parse_css(css)
            lines = inline_css(lines, rules)
            report["style_notes"].append(
                f"{slug}: <style> rules {sorted(rules)} moved inline onto the demo elements; "
                f"not expressible inline: {unsupported or 'none'}"
            )
        lines = remove_boilerplate(lines)
        lines, plate = extract_plate(lines, slug)
        lines = convert_images(lines, slug, depth)
        lines = convert_spans(lines)
        lines = convert_links(lines, slug)
        lines = demote_headings(lines)
        lines = tidy(lines)

        # ---- front matter
        out: dict = {}
        is_landing = slug in landing_slugs
        title = str(fm.get("title", ""))
        status = fm.get("status")
        description = fm.get("description")
        if is_landing:
            cfg = books.get(slug)
            if cfg:
                if title != cfg["title"] or status != cfg["status"] or description != cfg["description"]:
                    report["landing_diffs"].append(
                        f"{slug}: title {title!r} -> {cfg['title']!r}"
                        + ("" if title != cfg["title"] else " (same)")
                        + f"; status {status} -> {cfg['status']}"
                        + ("" if description != cfg["description"] else " (same)")
                        + (f"; description {description!r} -> {cfg['description']!r}" if description != cfg["description"] else "")
                    )
                title, status, description = cfg["title"], cfg["status"], cfg["description"]
        elif "book" in fm:
            new_title = re.sub(r"\s+-\s+Chapter(\s.*)?$", "", title)
            report["chapter_titles"].append((slug, title, new_title))
            title = new_title
        if description is None or str(description).strip() == "":
            description = WRITTEN_DESCRIPTIONS[slug]
            report["descriptions"].append(f"{slug}: {description}")
        out["title"] = title
        out["description"] = str(description)
        out["status"] = status
        if is_landing:
            shelf, hue, glyph = SPINES[slug]
            out["shelf"] = shelf
            out["spine"] = {"hue": hue, "glyph": glyph}
            if slug == "ds-interviews":
                out["theme"] = "ds"
            if slug in ELSEWHERE:
                n, u, r, note = ELSEWHERE[slug]
                out["elsewhere"] = {"name": n, "url": u, "relation": r, "note": note}
        elif "book" in fm:
            out["book"] = fm["book"]
            out["chapter"] = fm["chapter"]
            if fm["chapter"] == 99:
                out["label"] = "References"
            elif fm["chapter"] == -1:
                out["label"] = "What If"
        if plate:
            new_rel, alt, source_url = plate
            out["plate"] = f"{depth}{new_rel}"
            out["plateAlt"] = alt
            report["plates"].append((slug, alt, new_rel))
            if source_url:
                lines = [f"<!-- plate source: {source_url} -->", ""] + lines
        else:
            report["no_plate"].append(slug)
        if is_draft:
            out["draft"] = True

        dest = OUT_CONTENT / rel_md
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text("---\n" + dump_yaml(out) + "---\n\n" + "\n".join(lines) + "\n")
        written.append(slug)
        stats["drafts" if is_draft else "pages"] += 1

    # ---- copy assets
    for rel in sorted(referenced_assets):
        dest = OUT_ASSETS / asset_names.get(rel, rel)
        if dest.exists():
            report["warnings"].append(f"asset name collision: {dest}")
        dest.parent.mkdir(parents=True, exist_ok=True)
        if (IMAGES / rel).is_file():
            shutil.copyfile(IMAGES / rel, dest)
            stats["assets_copied"] += 1
    extra_public = {"lucianos-library-preview.png"}
    for rel in sorted(referenced_public | extra_public):
        dest = OUT_PUBLIC / "images" / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        if (IMAGES / rel).is_file():
            shutil.copyfile(IMAGES / rel, dest)
            stats["public_copied"] += 1
    for name in ("favicon.ico", "CNAME"):
        shutil.copyfile(ROOT / name, OUT_PUBLIC / name)

    # ---- unreferenced images
    all_images = {str(p.relative_to(IMAGES)) for p in IMAGES.rglob("*") if p.is_file() and p.name != ".DS_Store"}
    used = referenced_assets | referenced_public | extra_public
    unref = sorted(all_images - used)
    stats["unreferenced"] = len(unref)
    other_text = ""
    for f in [ROOT / "_config.yml", ROOT / "index.md", ROOT / "404.md"]:
        if f.exists():
            other_text += f.read_text()
    for d in ("_layouts", "_includes", "assets"):
        for f in (ROOT / d).rglob("*"):
            if f.is_file():
                try:
                    other_text += f.read_text()
                except UnicodeDecodeError:
                    pass
    stats["unreferenced_but_used_by_site_chrome"] = sum(1 for u in unref if u in other_text)
    report["unreferenced"] = unref

    # ---- link check against what was written
    ids = set(written)
    for f in sorted(OUT_CONTENT.rglob("*.md")):
        for m in re.finditer(r"\]\((/pages/[^)#\s]+)|href=\"(/pages/[^\"#]+)\"", f.read_text()):
            t = (m.group(1) or m.group(2))[len("/pages/"):]
            if t not in ids:
                report["links"].append(f"{f.relative_to(OUT_CONTENT)}: BROKEN internal link /pages/{t}")

    print_summary(sorted(unref))
    return 0


def alt_is_filename(alt: str, rel: str) -> bool:
    a = alt.strip()
    if re.match(r"https?://", a):
        return True
    if not a:
        return True
    if re.search(r"\.(png|jpe?g|gif|svg|webp)$", a, re.I):
        return True
    if " " not in a and re.search(r"[-_]", a):
        return True
    return a == Path(rel).stem


def print_summary(unref: list[str]) -> None:
    s = stats
    print("COUNTS")
    for k in ("pages", "drafts", "templates", "headings_demoted", "assets_copied", "public_copied", "peeks",
              "code_blocks", "br_removed", "chapter_nav_removed", "nav_buttons_removed", "img_converted",
              "raw_img", "plates", "highlights", "css_inlined", "style_blocks", "script_blocks",
              "links_rewritten", "blank_before_rule", "unreferenced", "unreferenced_but_used_by_site_chrome"):
        print(f"  {k}: {s[k]}")
    if asset_names:
        print("RENAMED ASSETS")
        for a, b in sorted(asset_names.items()):
            print(f"  images/{a} -> src/assets/images/{b}")
    fn_alts = [(sl, alt, rel) for sl, alt, rel in report["alts"] + report["plates"] if alt_is_filename(alt, rel)]
    print(f"ALT TEXT that is a file name or URL: {len(fn_alts)} of {len(report['alts']) + len(report['plates'])}")
    if VERBOSE:
        print("CHAPTER TITLES")
        for slug, a, b in report["chapter_titles"]:
            print(f"  {slug}: {a!r} -> {b!r}")
        for key in ("landing_diffs", "descriptions", "links", "raw_imgs", "style_notes", "warnings", "no_plate"):
            print(key.upper())
            for x in report[key]:
                print("  ", x)
        print("WORST ALTS")
        ranked = sorted(fn_alts, key=lambda t: (not re.match(r"https?://", t[1]), -len(t[1])))
        for sl, alt, rel in ranked[:10]:
            print(f"  {sl}: {alt!r} ({rel})")
        print("UNREFERENCED")
        for u in unref:
            print("  ", u)
    else:
        print("(run with -v for the full report)")
    if report["warnings"]:
        print("WARNINGS")
        for w in report["warnings"]:
            print("  ", w)


if __name__ == "__main__":
    sys.exit(main())
