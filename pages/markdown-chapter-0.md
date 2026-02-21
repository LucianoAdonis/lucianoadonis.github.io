---
layout: custom
title: Setup - Chapter 0
description: Getting your environment ready before the fun starts
book: markdown
chapter: 0
status: yellow
category: meta
---

{% include chapter-nav.html position="top" %}

---

<img class="myImg" src="../images/lsp/header-lego-identity-and-landscape-kit.png" alt="header-lego-identity-and-landscape-kit" style="cursor: pointer;">

---

This chapter is the boring one. Before you start writing or customizing, there are a few things worth knowing upfront so you do not get stuck on something avoidable later.

---

# Templates

GitHub Pages offers a set of official themes you can apply with a single line in `_config.yml`. The full list is at [pages.github.com/themes](https://pages.github.com/themes/).

Each theme has a repository where you can see the default layout files. That matters because customizing means overriding those defaults, and you cannot override something you have not found yet.

The theme this site uses is [Leap Day](https://github.com/pages-themes/leap-day). To apply it:

```yaml
# _config.yml
remote_theme: pages-themes/leap-day@v0.2.0
plugins:
  - jekyll-remote-theme
```

If the official themes are too constrained, you can also base your site on any public GitHub repository that is a valid Jekyll theme by referencing its `user/repo` path the same way.

---

# Domain

By default your site lives at `username.github.io`. If you want a custom domain, the setup takes about ten minutes.

1. Buy a domain from any registrar.
2. In your registrar's DNS settings, add four `A` records pointing to GitHub's servers:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Add a `CNAME` record pointing `www` to `username.github.io`.
4. In your repository settings, go to Pages and set the custom domain. GitHub will provision an SSL certificate automatically.
5. Create a file named `CNAME` at the root of your repository containing just your domain name:
   ```
   yourdomain.com
   ```

DNS changes can take a few hours to propagate. If the SSL certificate does not appear within an hour of the DNS resolving, go back to the Pages settings and save again to re-trigger the check.

---

# Other repositories

A few repositories worth bookmarking before you start:

- [github.com/pages-themes](https://github.com/orgs/pages-themes/repositories): All the official GitHub Pages themes in one place.
- [github.com/jekyll/jekyll](https://github.com/jekyll/jekyll): The Jekyll source. Useful when you hit something the documentation does not explain well.
- [awesome-jekyll-plugins](https://github.com/planetjekyll/awesome-jekyll-plugins): A curated list of plugins. Most will not work on GitHub Pages (only whitelisted plugins are allowed), but good for knowing what is possible when running Jekyll locally.

If you are starting from scratch, forking an existing site is often faster than starting from a blank template. You get working navigation, layouts, and configuration that you can adapt instead of building from the ground up.

{% include chapter-nav.html %}
