# AGENTS.md: writing and structuring a page

**The voice is `VOICE.md`.** It was measured from the author's own 2024-25 writing and it wins every disagreement. Three rules an earlier version of this file carried are gone because the author never followed them: headings stay in **Title Case**, exclamation points are fine within the budget, and semicolons are rare but allowed. Run `node scripts/voice-lint.mjs` before you finish.

## The reader

A working technical person who was sent a link: busy, skeptical, gone the moment something reads like a memo or a pitch. Often it is the author, later, looking up what they once worked out. Write to be useful to them.

## Front matter

Every page:

```yaml
---
title: Page Title
description: One short line. The jokes live in the packaging, so this is a good place for one.
status: yellow        # green | yellow | orange | red, see below
started: 2026-11-17   # when the text first existed (an earlier note counts)
revised: 2026-11-17   # optional to bump: the build also reads the last commit
---
```

A book landing adds its place on the shelf:

```yaml
shelf: tools          # tools | people | career | theories | life | odds
spine:
  hue: 200            # 0-360; spine, cover and accent colors are derived and contrast-checked
  glyph: knight       # a name from src/components/Glyph.astro
elsewhere:            # optional: a site that does part of this book's job
  name: Vibe Check
  url: https://interviews.neorgon.com/
  relation: related   # or superseded: shows a "Moved on" box near the top
  note: One line on what the reader will find there.
```

A chapter names its book and its place (numbers are yours: 0, 1.5 and 2.5 are fine):

```yaml
book: thesis-the-core-five
chapter: 2.5
label: References     # optional, shown instead of "Chapter N"
```

Optional anywhere: `plate` and `plateAlt` (the opening image, path relative to the file, plus real alt text), `draft: true` (built but unlisted), `movedTo: <slug>` (the URL now points at another page).

## Status

| Status | Label on the site | Use when |
|---|---|---|
| green | Nearly Done | Complete and readable; polish only |
| yellow | Draft | Most sections exist; gaps and rough edges remain |
| orange | Jottings | Notes and an outline; real text is missing |
| red | Barely Started | A title and a direction |

Rate honestly. A book's status should not be greener than its chapters.

## Structure

- The layout renders the title (the only h1), the cover, the contents, the chapter navigation and the link-out box. Don't repeat any of them in the body, and don't keep a "Chapters Overview" list of links on a landing page.
- Headings start at `##`. `---` rules between sections are part of the style.
- Links are absolute: `/pages/page-name`.
- Images use Markdown syntax with a path relative to the file (`../../assets/images/...`) so they get optimized, and their alt text describes the picture. A file name is not alt text.
- No `<style>` or `<script>` in content.
- An empty heading is worse than none. Delete it, or say in one honest line that the section is still being written.

## Text that isn't the author's yet

New words with no source go inside `<div data-review="new">` (with blank lines inside) or `<span data-review="new">`. They show highlighted in `make dev`. Text moved from an older note gets a `<!-- source: file -->` comment instead. The author removes the marker when they keep the text.
