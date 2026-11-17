---
title: Setup
description: Tutorial of the Tutorial
status: yellow
started: 2024-12-10
revised: 2026-02-21
book: markdown
chapter: 0
plate: ../../assets/images/lsp/header-lego-identity-and-landscape-kit.png
plateAlt: A huge pile of colorful LEGO bricks, animals, minifigures and baseplates around an orange sorting tray
---

## Templates

GitHub Pages has a set of official themes, and you apply one with a single line in `_config.yml`. The full list is at [pages.github.com/themes](https://pages.github.com/themes/).

Each theme has its own repository with the default layout files. That matters, because customizing means overriding those defaults and you can't override what you haven't found yet.

This site uses [Leap Day](https://github.com/pages-themes/leap-day):

```yaml
# _config.yml
remote_theme: pages-themes/leap-day@v0.2.0
plugins:
  - jekyll-remote-theme
```

If the official themes feel too tight, any public GitHub repository that's a valid Jekyll theme works the same way, by its `user/repo` path.

---

## Domain

<!-- source: 2026 batch (8126bde), restored -->
By default your site lives at `username.github.io`. A custom domain <span data-review="new">should take</span> about ten minutes of setup<span data-review="new">, not counting the DNS wait</span>:

1. Buy a domain from any registrar.
2. In the registrar's DNS settings, add four `A` records pointing to GitHub:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Add a `CNAME` record pointing `www` to `username.github.io`.
4. In your repository settings, open Pages and set the custom domain. GitHub issues the SSL certificate by itself.
5. Create a file named `CNAME` at the root of the repository with just your domain in it:
   ```
   yourdomain.com
   ```

DNS can take a few hours to propagate. If the certificate hasn't shown up an hour after the DNS resolves, go back to the Pages settings and save again to trigger the check.

---

## Other Repositories

A few repositories worth bookmarking before you start:

- [github.com/pages-themes](https://github.com/orgs/pages-themes/repositories): all the official themes in one place.
- [github.com/jekyll/jekyll](https://github.com/jekyll/jekyll): the Jekyll source, for when the documentation doesn't explain something well.
- [awesome-jekyll-plugins](https://github.com/planetjekyll/awesome-jekyll-plugins): a curated list of plugins. Most won't work on GitHub Pages (only whitelisted ones do), but it shows what's possible if you run Jekyll locally.

<!-- source: 2026 batch (8126bde), restored -->
If you're starting from scratch, forking an existing site is often faster than starting from a blank template. You get working navigation, layouts and configuration to adapt instead of building it all yourself.
