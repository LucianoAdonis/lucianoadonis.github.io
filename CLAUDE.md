# CLAUDE.md

Luciano's Library: a personal library of mini-books (short, multi-chapter guides on work tools, interviews, hiring, mentoring and a few theories). Astro 7 static site, deployed to GitHub Pages at minibooks.lucianoadonis.com by `.github/workflows/deploy.yml`.

## Read first

| For | Read |
|---|---|
| How the prose must sound | `VOICE.md` (measured from the author's 2024-25 writing; it outranks AGENTS.md and any generic style guide) |
| How a page is structured, front matter, statuses | `AGENTS.md` |
| Who the site is for, design principles, anti-references | `PRODUCT.md` |
| The visual system (tokens, type, spines, covers) | `DESIGN.md` |

## Commands

```bash
make install    # npm ci
make dev        # http://localhost:4321; text marked data-review="new" shows highlighted
make build      # astro build + pagefind index (search only works on a build)
make preview    # serve the build
make check      # what CI runs: astro check, voice lint, build, check-site
make new-book slug=my-book title="My Book" shelf=tools hue=200 glyph=book
make new-chapter book=my-book chapter=1 title="Chapter Title"
```

## Architecture

- One content collection, `src/content/pages/<slug>.md`, served at `/pages/<slug>`. The schema is `src/content.config.ts`. A file is a **book landing** (has `shelf` and `spine`), a **chapter** (has `book` and `chapter`), a **loose page** (neither; listed under Odds and Ends), a **draft** (`draft: true`, built but unlisted and unindexed) or a **pointer** (`movedTo`, keeps an old URL alive).
- `src/lib/library.ts` builds the book model (chapters, word counts, reading time, dates) once per build. `src/lib/color.ts` derives every book color from its `spine.hue` and checks contrast. `src/lib/dates.ts` computes "revised".
- Routes: `src/pages/index.astro` (the shelf), `src/pages/pages/[...slug].astro` (dispatches to `src/layouts/BookPage|ChapterPage|LoosePage|MovedPage.astro`), `src/pages/404.astro`.
- Client JS is progressive only: `src/scripts/enhance.ts` (table scroll, copy buttons, peeks, widen images, TOC highlight) and `src/scripts/search.ts` (Pagefind).
- Checks: `scripts/voice-lint.mjs` (the ```lint block in VOICE.md over all content), `scripts/check-site.mjs` (every URL in `scripts/legacy-urls.txt` resolves, links and anchors, one h1, no raw Markdown in visible text).

## Gotchas

- **URLs are a promise.** Every URL the old Jekyll site served is in `scripts/legacy-urls.txt` and `check-site` fails if one stops resolving. `build.format: 'file'` emits `pages/<slug>.html`, which GitHub Pages serves at `/pages/<slug>`. The glob loader uses a custom `generateId`, because the default slugifies `chapter-2.5` into `chapter-25`.
- **Revised dates come from git.** `revised` is the later of the front matter date and the newest commit touching the file, skipping commits listed in `.git-blame-ignore-revs` (add mechanical sweeps there). CI checks out with `fetch-depth: 0`; a shallow clone silently falls back to the front matter date.
- **No em dashes, ever.** Markdown runs through Sätteri with `smartPunctuation.dashes: false`, so `--` never becomes a dash; the voice lint bans the character.
- **Quoted material is exempt from the voice lint** only between `<!-- voice-lint: off -->` and `<!-- voice-lint: on -->` (see the ChatGPT samples in `writing.md`). The exclamation cap ignores the `!` of image syntax.
- **Review markers.** `<div data-review="new">` (blank lines inside) or `<span data-review="new">` wraps words that exist in no source and wait for the author. `<!-- source: ... -->` comments mark text moved from older material; `2026 batch (8126bde), restored` marks 2026 sections restored on 2026-11-17. Remove a marker once the author approves the text.
- **Book colors must be re-declared where they land.** Custom properties resolve where declared, so any element carrying a book's raw colors needs `data-book-colors` (see global.css) or `--spine-face` and `--accent` resolve to the page defaults.
- **Astro renders `data-foo={false}` as `data-foo="false"`.** Pagefind treats the attribute's presence as "index this", so conditional attributes are spread (`{...(cond ? {'data-pagefind-body': ''} : {})}`).
- **Hover slips must leave layout when hidden** (`display: none`): a transparent but laid-out slip widened every narrow page.
- **The ds-interviews book is always dark** (`theme: ds` on its landing; chapters inherit).
- `scripts/migrate_from_jekyll.py` is the record of the 2026-11-17 conversion. It refuses to run without `--force` and would erase everything since.
- Dependencies are pinned exactly and were at least two weeks old when added (astro 7.4.7 carries the fix for GHSA-r3h5-4585-7x3w).

## Deploy

Push to `main`; the workflow builds, runs every check, and publishes. The repository's Pages source must be **GitHub Actions** (Settings > Pages); with the old "Deploy from a branch" setting, GitHub would try to build this repo with Jekyll.
