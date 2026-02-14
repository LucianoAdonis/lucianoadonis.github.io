# 📚 Luciano's Library

> A personal knowledge base and technical documentation site featuring "Mini Books" - comprehensive tutorials and guides on Confluence, Airtable, interviews, management, and various technical topics.

**Live Site:** [lucianoadonis.github.io](https://lucianoadonis.github.io/)

[![Jekyll](https://img.shields.io/badge/Jekyll-4.x-red.svg)](https://jekyllrb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-222.svg)](https://pages.github.com/)

---

## 🎯 What's This?

Luciano's Library is a collection of practical guides ("Mini Books") covering topics I frequently work with as a CloudOps Engineer. Instead of repeating the same explanations or hunting through scattered notes, I consolidated everything into organized, linkable guides.

**Content Areas:**
- 📖 **Educational**: Confluence, Airtable, ADRs, Writing, Communication
- 💝 **Self-Help**: Interview guides, LEGO Serious Play, Troubleshooting
- ⚡ **Optimization**: Product recommendations, Slack tips, Life hacks
- ⭐ **Mentoring**: Obsidian, Digital life management
- 💡 **Theory**: The Core Five hiring framework
- ⚙️ **Meta**: Markdown, Site documentation

**77+ pages** organized into **10 series** with chapters, plus standalone guides.

---

## ✨ Features

### Modern Design
- **Tailwind CSS v4** for a clean, warm, and personal aesthetic
- **Warm amber/gold accents** that give personality without being generic
- **Responsive layout** - works beautifully on desktop, tablet, and mobile
- **Dark mode ready** - color palette chosen for future dark mode support

### Smart Navigation
- **Left sidebar** with categorized sections and status indicators (🟢🟡🟠🔴)
- **Right-side TOC** auto-generated from page headings with scroll-spy
- **Breadcrumb navigation** for series chapters (Home › Series › Chapter)
- **Auto chapter navigation** - prev/next buttons generated from data
- **Mobile sidebar drawer** with backdrop and smooth animations

### Search & Discovery
- **Client-side fuzzy search** - instant results without a backend
- **Status indicators** show content maturity at a glance
- **Series progress** shows where you are in multi-chapter guides

### Interactive Elements
- **Image modals** - click any image to view full-size
- **Hover previews** on product recommendations
- **Expandable sections** with emoji indicators (➕/➖)
- **Floating back/home button** appears on scroll

### SEO & Analytics
- **Dynamic Open Graph tags** - unique preview for each page
- **Google Analytics** integrated (G-K02129T37X)
- **Semantic HTML** for accessibility and SEO
- **Fast loading** with optimized assets

---

## 🚀 Quick Start

### Prerequisites

- **Ruby 3.1+** (Jekyll requirement)
- **Bundler 2.x**
- **Git**

### Local Development

```bash
# Clone the repository
git clone https://github.com/LucianoAdonis/lucianoadonis.github.io.git
cd lucianoadonis.github.io

# Install dependencies
bundle install --path vendor/bundle

# Start local server
bundle exec jekyll serve

# Or use the Makefile shortcut
make local
```

Visit: **http://127.0.0.1:4000**

The site will auto-reload when you edit files. Press `Ctrl+C` to stop.

---

## 📝 Adding Content

### Creating a New Standalone Page

1. Create a markdown file in `/pages/`:

```markdown
---
layout: custom
title: Your Page Title
description: A clear, SEO-friendly description
image: /images/headers/your-image.png  # Optional
---

Your content here...
```

2. Add it to `_data/navigation.yml`:

```yaml
- title: Your Section
  icon: book
  items:
    - title: Your Page Title
      url: /pages/your-page
      status: draft  # or done, jottings, barely_started
```

### Creating a New Series

1. Create the main page (`/pages/my-series.md`) and chapters (`/pages/my-series-chapter-1.md`)

2. Add to `_data/series.yml`:

```yaml
- id: my-series
  title: My Awesome Series
  main: /pages/my-series
  status: draft
  chapters:
    - slug: my-series-chapter-1
      title: "Chapter 1: Getting Started"
    - slug: my-series-chapter-2
      title: "Chapter 2: Advanced Topics"
      optional: true  # Optional chapters marked in UI
```

3. Add to `_data/navigation.yml` (same as standalone page, with `series: true`)

4. In your main page, add the auto-generated chapter listing:

```liquid
{% include series-index.html %}
```

**That's it!** Chapter navigation and breadcrumbs are generated automatically.

### Adding Images

Place images in `/images/` organized by topic:
- `/images/headers/` - Page hero images
- `/images/{topic}/` - Content images (airtable, confluence, etc.)

Make images clickable (open in modal):
```html
<img src="/images/your-image.png" class="myImg" alt="Description">
```

---

## 🏗️ Architecture

### Directory Structure

```
lucianoadonis.github.io/
├── _layouts/
│   └── custom.html          # Main layout (uses includes)
├── _includes/               # Reusable layout components
│   ├── head.html            # Meta tags, analytics, Tailwind CDN
│   ├── header.html          # Sticky top bar
│   ├── sidebar.html         # Left navigation
│   ├── toc.html             # Right table of contents
│   ├── footer.html          # Site footer
│   ├── chapter-nav.html     # Auto prev/next for series
│   ├── series-index.html    # Auto chapter listing
│   └── ...
├── _data/
│   ├── navigation.yml       # Site structure & sections
│   └── series.yml           # Series chapters metadata
├── pages/                   # All content pages (77+ files)
│   ├── confluence.md
│   ├── confluence-chapter-1.md
│   └── ...
├── assets/
│   ├── css/
│   │   └── style.scss       # Custom styles (modal, buttons, etc.)
│   └── js/
│       ├── toc.js           # TOC generator
│       ├── search.js        # Client-side search
│       ├── sidebar.js       # Mobile menu toggle
│       ├── popup-modal.js   # Image modal
│       └── navigation.js    # Back/home button
├── images/                  # Organized by topic
├── _config.yml              # Jekyll configuration
├── search-index.json        # Generated search index
└── index.md                 # Homepage
```

### Key Technologies

- **Jekyll 4.x** - Static site generator
- **Tailwind CSS v4** - Utility-first CSS (via CDN)
- **Liquid** - Template engine
- **GitHub Pages** - Hosting and deployment
- **Vanilla JavaScript** - No frameworks, just modern ES6+

### Layout System

The site uses a modular layout system:

1. **`custom.html`** - Main layout that composes all includes
2. **Includes** - Reusable components loaded via `{% include %}`
3. **Data files** - YAML files that drive navigation and series structure
4. **Markdown pages** - Content with minimal frontmatter

This separation makes it easy to:
- Update the design without touching content
- Add new features globally by editing includes
- Maintain consistency across 77+ pages

---

## 🎨 Customization

### Color Scheme

Edit `/assets/css/style.scss` to change the warm amber theme:

```scss
/* Change primary amber to another color */
.custom-button {
  background: linear-gradient(to right, #your-color, #your-darker-color);
}

/* Update sidebar gradients */
.sidebar {
  background: linear-gradient(to bottom, white, #your-light-color);
}
```

Or modify Tailwind classes in the includes (e.g., `_includes/header.html`):

```html
<!-- Change from amber to purple -->
<header class="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
```

### Navigation Structure

Edit `_data/navigation.yml` to reorganize sections or add new ones:

```yaml
sections:
  - title: Your New Section
    icon: star  # lightning-bolt, book, heart, star, bulb, gear
    items:
      - title: Page Name
        url: /pages/page-name
        status: draft  # done, draft, jottings, barely_started
        series: true   # If it's a series with chapters
```

### Status Indicators

Update the status emoji in `_includes/sidebar.html`:

```liquid
{% case item.status %}
  {% when 'done' %}🟢
  {% when 'draft' %}🟡
  {% when 'jottings' %}🟠
  {% when 'barely_started' %}🔴
{% endcase %}
```

---

## 🔧 Development

### Available Commands

```bash
# Install dependencies
make local          # Install and start server
bundle install      # Install dependencies only

# Development server
make run            # Start server (assumes deps installed)
bundle exec jekyll serve

# Build only (output to _site/)
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

### Testing Locally

1. **Check for broken links:**
   ```bash
   bundle exec jekyll build
   # Use a link checker tool on _site/
   ```

2. **Test responsive design:**
   - Open DevTools (F12)
   - Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
   - Test mobile, tablet, desktop sizes

3. **Verify search:**
   - Type in search bar
   - Check `/search-index.json` is generated
   - Open browser console for errors

4. **Test modals:**
   - Click any image with `class="myImg"`
   - Should open in fullscreen overlay
   - ESC or click outside to close

### Adding JavaScript Features

All JS files are in `/assets/js/` and loaded via `_includes/scripts.html`:

```html
<script src="/assets/js/your-new-script.js"></script>
```

Use vanilla JavaScript (no jQuery):

```javascript
(function() {
  'use strict';

  function init() {
    // Your code here
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
```

---

## 🚢 Deployment

### GitHub Pages (Automatic)

The site deploys automatically when you push to `main`:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

GitHub Actions builds and deploys in ~2 minutes.

**Check deployment status:**
- Repository → Actions tab
- Look for the latest workflow run

**View logs if build fails:**
- Click the failed workflow
- Expand "build" step to see Jekyll errors

### Manual Deployment

If you need to deploy to another host:

```bash
# Build the site
bundle exec jekyll build

# The _site/ directory contains the static site
# Upload contents of _site/ to your web server
```

---

## 📊 Analytics

Google Analytics (G-K02129T37X) is integrated via `_includes/analytics.html`.

**View stats:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select property: Luciano's Library
3. View reports (allow 24-48h for first data)

**Add additional tracking:**

Edit `_includes/analytics.html` to add custom events:

```javascript
gtag('event', 'button_click', {
  'event_category': 'engagement',
  'event_label': 'series_navigation'
});
```

---

## 🐛 Troubleshooting

### Build Fails on GitHub Pages

**Check the logs:**
1. Repository → Actions tab
2. Click failed workflow
3. Look for Jekyll errors

**Common issues:**
- Invalid YAML in `_data/` files (use [yamllint.com](https://www.yamllint.com/))
- Liquid syntax errors in includes
- Missing frontmatter in pages

### Search Not Working

1. Check `/search-index.json` is generated
2. Open browser console (F12) for JavaScript errors
3. Verify `search.js` is loaded in Network tab

### Chapter Navigation Not Showing

- Page URL must contain the chapter slug from `_data/series.yml`
- Check spelling matches exactly
- Verify `_includes/chapter-nav.html` is included in layout

### Images Not Opening in Modal

- Ensure image has `class="myImg"`
- Check `popup-modal.js` is loaded
- Open console for errors

### Sidebar Not Showing on Mobile

- Click the hamburger menu (≡) in top-left
- Check `sidebar.js` is loaded
- Verify `lg:` responsive classes in `_includes/sidebar.html`

### Ruby Version Issues

If you see bundler errors:

```bash
# Check Ruby version
ruby --version  # Need 3.1+

# Install newer Ruby with rbenv
brew install rbenv
rbenv install 3.3.6
rbenv local 3.3.6
```

---

## 📚 Content Guidelines

### Writing Style

- **Be conversational** - write like you're explaining to a colleague
- **Use examples** - code snippets, screenshots, real scenarios
- **Add personality** - emoji, movie references, jokes (in moderation)
- **Be practical** - focus on "how to" over "what is"

### Status Indicators

Use these statuses consistently:

- 🟢 **Done**: Polished, complete, ready to share widely
- 🟡 **Draft**: Functional, content mostly there, needs polish
- 🟠 **Jottings**: Initial ideas, rough notes, work in progress
- 🔴 **Barely Started**: Structure exists, minimal content

### SEO Best Practices

1. **Write descriptive titles** (50-60 characters ideal)
2. **Clear descriptions** (150-160 characters, no clickbait)
3. **Use headings** (H2 for main sections, H3 for subsections)
4. **Add alt text** to all images
5. **Internal linking** between related pages

### Image Guidelines

- **Format**: PNG for screenshots, JPG for photos
- **Size**: Max 1920px wide, compress to keep under 500KB
- **Naming**: Use descriptive kebab-case (e.g., `confluence-macro-menu.png`)
- **Organization**: Store in `/images/{topic}/` subdirectories

---

## 🤝 Contributing

Want to improve the site? Contributions are welcome!

### How to Contribute

1. **Fork** the repository
2. **Create a branch** (`git checkout -b feature/improvement`)
3. **Make your changes**
4. **Test locally** (`make local`)
5. **Commit** (`git commit -m "Add: Description of changes"`)
6. **Push** (`git push origin feature/improvement`)
7. **Open a Pull Request**

### What to Contribute

- **Fix typos** - everyone makes them!
- **Improve clarity** - make explanations clearer
- **Add examples** - code snippets, screenshots
- **Update outdated info** - tools change, docs need updates
- **Suggest new features** - open an issue first to discuss

### Contribution Guidelines

- Follow existing writing style and tone
- Test changes locally before submitting PR
- Keep commits focused and descriptive
- Update relevant data files (`navigation.yml`, `series.yml`)

---

## 📜 License

Content is © Luciano Adonis Villarroel. Feel free to reference or link to guides, but please don't copy entire pages wholesale.

Code (HTML, CSS, JS) is available for reference and inspiration. If you adapt significant portions for your own site, a credit link would be appreciated but isn't required.

---

## 🙏 Acknowledgments

- **Theme Inspiration**: Original design based on [Leap Day](https://github.com/pages-themes/leap-day) by [Matt Graham](https://twitter.com/mattgraham)
- **Tailwind CSS**: [Adam Wathan](https://twitter.com/adamwathan) and team
- **Jekyll**: [Tom Preston-Werner](https://github.com/mojombo) and contributors
- **Hosting**: GitHub Pages (free hosting for static sites!)

---

## 📧 Contact

- **GitHub**: [@LucianoAdonis](https://github.com/LucianoAdonis)
- **YouTube**: [@energon-hq](https://www.youtube.com/@energon-hq/)
- **Site Issues**: [Open an issue](https://github.com/LucianoAdonis/lucianoadonis.github.io/issues)

---

<div align="center">

**Built with ❤️ using Jekyll, Tailwind CSS, and warm amber vibes.**

[Visit Site](https://lucianoadonis.github.io/) • [Report Bug](https://github.com/LucianoAdonis/lucianoadonis.github.io/issues) • [Suggest Feature](https://github.com/LucianoAdonis/lucianoadonis.github.io/issues)

</div>
