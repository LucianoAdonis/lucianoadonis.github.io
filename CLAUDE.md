# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based GitHub Pages site serving as a personal knowledge library of "mini-books" on technical and professional topics. Live at https://lucianoadonis.github.io/.

## Build & Serve Commands

```bash
# Install dependencies and serve locally (also regenerates Gemfile)
make local

# Serve locally (assumes dependencies already installed) and open browser
make run

# Create new content from templates
make new-book slug=my-book title="My Book" category=educational
make new-chapter slug=my-book chapter=1 title="My Book" category=educational desc="Chapter desc"

# Manual steps if needed
bundle install --path vendor/bundle
bundle exec jekyll serve
# Site available at http://127.0.0.1:4000
```

There are no test or lint commands configured for this project.

## Architecture

- **Static site generator:** Jekyll 3.10.0 via the `github-pages` gem
- **Theme:** Remote theme `pages-themes/leap-day@v0.2.0`, customized via `assets/css/style.scss`
- **Markdown parser:** kramdown with TOC levels 2..3

### Layouts

Two layouts in `_layouts/`:
- `default.html` — basic layout with standard header/banner
- `custom.html` — extends default with Open Graph/Twitter meta tags, favicon, reading time, and loads all JS scripts. **All content pages use `layout: custom`.**

### Content Structure

Content lives in `pages/` as Markdown files. Mini-books follow a pattern:
- Main page: `pages/<book-slug>.md`
- Chapters: `pages/<book-slug>-chapter-<N>.md`

Every content page requires front matter with at least:
```yaml
layout: custom
title: Page Title
description: Short description
status: green|yellow|orange|red
category: optimization|educational|self-help|mentoring|theory|meta
```

Chapter pages additionally require:
```yaml
book: book-slug    # parent book slug, must match filename prefix
chapter: N         # numeric order (supports 0, 1.5, etc.)
```

Status indicators: `green` Nearly Done, `yellow` Draft, `orange` Jottings, `red` Barely Started.

### Includes

Reusable partials in `_includes/`:
- `chapter-nav.html` — auto-generated prev/next/home navigation with progress bar for chapter pages. Uses `book` and `chapter` front matter to find siblings. Add with `{% include chapter-nav.html %}` at top and bottom of chapter content.
- `reading-time.html` — estimated reading time badge (words / 200 wpm). Automatically included in `custom.html` header.

### JavaScript

JS files loaded by `custom.html` from `assets/js/`:
- `popup-modal.js` — image modal for elements with `class="myImg"`
- `hover-preview.js` — hover image preview for `class="hover-image-trigger"`
- `navigation.js` — dynamic back/home button + scroll-to-top button
- `header-collapse.js` — collapses header on scroll down, reveals on scroll up
- `toc-sidebar.js` — floating table of contents sidebar (activates on pages with 3+ headings)
- `homepage-filter.js` — card grid filtering on homepage only (search + status + category)

### Button Conventions

Use `custom-button` class with `left`/`right` modifiers inside `nav-buttons` containers. Do not use `ds-button` (deprecated and removed).

```html
<div class="nav-buttons">
  <a href="/pages/prev" class="custom-button right"><strong>Previous</strong></a>
  <a href="/pages/next" class="custom-button left"><strong>Next</strong></a>
</div>
```

### Link Format

Always use absolute paths without `.md` extension: `/pages/page-name` (not `./pages/page-name.md`).

### Homepage

The homepage (`index.md`) uses a card grid generated from `site.books` defined in `_config.yml`. When adding a new book, add an entry to the `books` array in `_config.yml`.

### Images

Stored in `images/` organized by topic (e.g., `images/confluence/`, `images/interviews/`). Header images are in `images/headers/`.

### Site Variables

`_config.yml` defines `vars` (example emails) accessible in templates via `{{ site.vars.example_email }}` and `books` (array of mini-book metadata) used by the homepage card grid.
