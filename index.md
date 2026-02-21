---
layout: custom
title: Luciano's Library
description: Mini Books
---

At work, I get to talk to a lot of interesting people and juggle a wide range of ideas. With that much in motion, things can get messy, and keeping everyone aligned takes effort.

So I put together these “Mini Books.” They’re meant to create a shared baseline and make life easier for all of us.

They also give me a convenient link to send when someone new asks how things work.

---

{% assign total_books = site.books | size %}
{% assign categories = site.books | map: "category" | uniq %}
{% assign cat_count = categories | size %}

<p class="book-count">{{ total_books }} mini-books across {{ cat_count }} categories</p>

<div class="filters">
  <input type="text" id="book-search" class="book-search" placeholder="Search mini-books...">
  <select id="status-filter" class="filter-select">
    <option value="all">All Status</option>
    <option value="green">Nearly Done</option>
    <option value="yellow">Draft</option>
    <option value="orange">Jottings</option>
    <option value="red">Barely Started</option>
  </select>
  <select id="category-filter" class="filter-select">
    <option value="all">All Categories</option>
    <option value="educational">Educational</option>
    <option value="self-help">Self-Help</option>
    <option value="optimization">Optimization</option>
    <option value="mentoring">Mentoring</option>
    <option value="theory">Theory</option>
    <option value="meta">Meta</option>
  </select>
</div>

<div class="book-grid">
{% for book in site.books %}
  <a href="{{ book.url }}" class="book-card" data-title="{{ book.title }}" data-description="{{ book.description }}" data-status="{{ book.status }}" data-category="{{ book.category }}"{% if book.image %} style="background-image: url('{{ book.image }}');"{% endif %}>
    <div class="card-overlay"></div>
    <div class="card-content">
      <div class="card-header">
        <span class="status-dot {{ book.status }}"></span>
        <span class="card-category">{{ book.category }}</span>
      </div>
      <h3 class="card-title">{{ book.title }}</h3>
      <p class="card-desc">{{ book.description }}</p>
      {% if book.chapters > 0 %}
        <span class="card-chapters">{{ book.chapters }} chapters</span>
      {% endif %}
    </div>
  </a>
{% endfor %}
</div>

---

## Code Snippets, Tools, and Efficiency Tips
> **Little hacks that go a long way.** GitHub Gists with wisdom and free time to spare.

- **Configurations**:
    - <a href="https://gist.github.com/LucianoAdonis/be46fd68a6324a9777385b8982885cc3" target="_blank">Chrome Plugins</a>
    - <a href="https://gist.github.com/LucianoAdonis/4a711db16b8eef7a24c5e66110ba644e" target="_blank">VSCode Settings to Make Life Better</a>
    - <a href="https://gist.github.com/LucianoAdonis/43a43e5b80515abb828ceb1d3dca2258" target="_blank">Brewfile</a>
    - <a href="https://gist.github.com/LucianoAdonis/2fdc70716cc00e7d584494b0beafc985" target="_blank">Sublime Customization</a>

- **Random Finds**:
    - <a href="https://gist.github.com/LucianoAdonis/24888d407bec9e59c9cfc460a866b163" target="_blank">Cool Pages</a>
    - <a href="https://gist.github.com/LucianoAdonis/93f008e9bf92b0dbcdd5d2ee03f37535" target="_blank">Edition Tools and Sites</a>
    - <a href="https://gist.github.com/LucianoAdonis/91398d78df653e6a2d4969c87261b184" target="_blank">Team Building Activities</a>
        - <a href="https://gist.github.com/LucianoAdonis/da2d0e3b8cea63407eb0a181bf30985f" target="_blank">Music to Describe Your Sprint</a>

- **Hack a Facebook**:
    - <a href="https://gist.github.com/LucianoAdonis/77e2ba214320560e1f4958a30152f262" target="_blank">Apple Security for Family and Friends</a>

---

## Contribute

Want to contribute? Open a PR or reach out to me directly! I'll be setting up a contributor page soon. Feedback and suggestions are always welcome.
