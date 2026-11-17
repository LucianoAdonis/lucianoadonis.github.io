# Contributing

Thanks for your interest in contributing to Luciano's Library!

If you want to include something make a PR! Or if there is anything that can be improved, create an issue.

## Thanks

DevsChile as always!

## Quick Start

```bash
make install   # dependencies
make dev       # http://localhost:4321
make check     # typecheck, voice lint, build and site checks: run before a PR
```

## Adding Things

```bash
make new-book slug=my-book title="My Book" shelf=tools hue=200 glyph=book
make new-chapter book=my-book chapter=1 title="First Chapter"
```

Both write a file under `src/content/pages/` from `templates/`. The front matter, the statuses and the structure rules are in [AGENTS.md](AGENTS.md); the voice is in [VOICE.md](VOICE.md).

Links between pages are absolute (`/pages/page-name`), images go under `src/assets/images/` and are linked with a relative Markdown path, and every page URL that ever existed has to keep working (`scripts/legacy-urls.txt`).
