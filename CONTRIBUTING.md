# Contributing

Thanks for your interest in contributing to Luciano's Library!

If you want to include something make a PR! Or if there is anything that can be improved, create an issue.

## Thanks

DevsChile as always!

## Quick Start

```bash
make local   # Install deps + serve at http://127.0.0.1:4000
make run     # Serve (deps already installed) + open browser
```

## Content Structure

### Front Matter

Every content page needs at minimum:

```yaml
---
layout: custom
title: Page Title
description: Short description
status: red          # green | yellow | orange | red
category: educational # optimization | educational | self-help | mentoring | theory | meta
---
```

Chapter pages also need:

```yaml
book: book-slug      # parent book slug
chapter: 1           # numeric order (supports 0, 1.5, etc.)
```

### File Naming

- Book home: `pages/<book-slug>.md` (e.g., `pages/confluence.md`)
- Chapters: `pages/<book-slug>-chapter-<N>.md` (e.g., `pages/confluence-chapter-1.md`)
- Use hyphens, lowercase, no spaces

### Links

Always use absolute paths without `.md` extension:

```markdown
[Link Text](/pages/page-name)        # correct
[Link Text](./pages/page-name.md)    # incorrect
```

### Navigation

Chapter pages use the automated navigation include. Add this at the top and bottom of chapter content:

```liquid
{% include chapter-nav.html %}
```

Book home pages use manual nav buttons:

```html
<div class="nav-buttons">
  <a href="/pages/book-slug-chapter-1" class="custom-button left"><strong>Chapter 1</strong></a>
</div>
```

### Button Classes

Use `custom-button` with `left`/`right` modifiers inside `nav-buttons` containers. Do not use `ds-button`.

### Images

- Store in `images/` organized by topic (e.g., `images/confluence/`)
- Header images go in `images/headers/`
- Use `class="myImg"` for clickable modal images

### Status Indicators

- **green**: Nearly Done
- **yellow**: Draft
- **orange**: Jottings
- **red**: Barely Started

## Scaffolding

Create new content from templates:

```bash
make new-book slug=my-book title="My Book" category=educational
make new-chapter slug=my-book chapter=1 title="My Book" category=educational desc="Chapter description"
```
