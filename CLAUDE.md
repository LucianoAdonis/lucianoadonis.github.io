# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal knowledge base and technical documentation site ("Mini Books") hosted on GitHub Pages. Features tutorials and guides on Confluence, Airtable, interviews, management, and various technical topics.

Built with Jekyll using the Leap Day theme with extensive customizations for responsive design and interactive features.

## Development Commands

### Local Development

```bash
# Install dependencies and start local server
make local

# Run local server (assumes dependencies installed)
make run
```

The local server runs at http://127.0.0.1:4000

### Manual Commands

```bash
# Install dependencies
bundle install --path vendor/bundle

# Serve site locally
bundle exec jekyll serve
```

## Site Architecture

### Layout System

Two custom layouts in `_layouts/`:

- **default.html**: Basic template (unused)
- **custom.html**: Primary layout with full feature set including:
  - OpenGraph/Twitter card metadata
  - Logo with hover effect
  - Modal system for image popups
  - Navigation, header collapse, hover previews
  - Dynamic back/home button

Most pages use `layout: custom` in frontmatter.

### Content Organization

All content pages are markdown files in `/pages/` directory, organized by topic:
- Airtable guides (airtable.md, airtable-chapter-*.md)
- Confluence tutorials (confluence.md, confluence-*.md)
- Interview guides (ds-interviews*.md)
- Management content (management-101*.md)
- Theory/thesis pieces (thesis-*.md)
- Meta documentation (markdown.md, mini-books.md)

The home page is `index.md` which provides an organized table of contents with status indicators (🟢 Nearly Done, 🟡 Draft, 🟠 Jottings, 🔴 Barely Started).

### JavaScript Features

Located in `/assets/js/`:

- **navigation.js**: Creates dynamic back/home button that hides on scroll down, shows on scroll up. Shows "Back" if referrer exists, otherwise "Home". Hidden on home page.
- **popup-modal.js**: Handles image modal popups for images with class `myImg`. Click to open, ESC/click outside to close. Also manages hover image previews for elements with `hover-image-trigger` class.
- **header-collapse.js**: Handles header/banner collapse behavior on scroll
- **hover-preview.js**: Shows preview images on hover for specific elements

### Styling System

Primary stylesheet: `/assets/css/style.scss`

Key features:
- Imports `jekyll-theme-leap-day` then overrides
- Responsive design with breakpoints at 1600px, 1401px, 1060px, 720px, 480px
- Custom button styles (`.custom-button`, `.ds-button`)
- Fixed navigation sidebar that transforms/hides on header collapse
- Modal overlay styles for image popups
- Collapsible header system with smooth transitions
- Mobile-optimized spacing and typography

### Configuration

`_config.yml` defines:
- Site metadata (title, description, URL)
- Remote theme: `pages-themes/leap-day@v0.2.0`
- Plugins: jekyll-remote-theme, jekyll-seo-tag
- Kramdown TOC levels (2-3)
- Custom vars (example emails)
- Social links (GitHub, YouTube)

## Content Authoring Patterns

### Page Frontmatter

Standard format:
```yaml
---
layout: custom
title: Page Title
description: Brief description
---
```

### Interactive Elements

Images that open in modal:
```html
<img src="path/to/image.png" class="myImg" alt="Description">
```

Navigation buttons between chapters:
```html
<div class="nav-buttons">
  <a href="previous.html" class="custom-button left">← Previous</a>
  <a href="next.html" class="custom-button right">Next →</a>
</div>
```

Alternative button style (dark theme):
```html
<a href="page.html" class="ds-button">Button Text</a>
```

### Status Indicators

Use emoji status indicators in index.md when linking to pages:
- 🟢 Nearly Done
- 🟡 Draft
- 🟠 Jottings
- 🔴 Barely Started

## Deployment

The site is deployed automatically via GitHub Pages when changes are pushed to the `main` branch. No build step required - GitHub Pages handles Jekyll compilation.

## Important Notes

- The site uses a remote theme which cannot be customized directly
- Custom overrides go in `_layouts/` and `assets/css/style.scss`
- Images are stored in `/images/` organized by topic (airtable/, confluence/, headers/)
- All markdown files use `.md` extension
- Navigation sidebar is auto-generated from page headings (H2-H3 based on kramdown config)
