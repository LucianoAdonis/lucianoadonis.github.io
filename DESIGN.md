# DESIGN.md: pocket paperbacks

The visual system of Luciano's Library, confirmed with the owner on 2026-11-17. Product context and principles are in `PRODUCT.md`; this file is how it looks. Source of truth for values: `src/styles/global.css` and `src/lib/color.ts`.

## Overview

A shelf of well-made pocket paperbacks. The home page is a shelf of spines grouped by topic; a book opens on its front cover beside a printed-style title page and contents; a chapter is one quiet reading column. Color belongs to the books. The page itself is paper and ink, so the author's writing does the talking.

Named references: 1960s Pelican paperbacks (flat, color-coded covers where the title does the work), A Book Apart's small-format covers (one color, one shape), Standard Ebooks' reading pages (plain, honest metadata, no chrome).

## Color

Strategy per surface: **full palette** on the shelf (one hue per book), **committed** on a cover (the book's color fills it), **restrained** in the reading column (paper, ink, and the book's color as the only accent).

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` | `oklch(97.2% 0.013 92)` | `oklch(20.5% 0.012 70)` | page |
| `--ink` | `oklch(25.5% 0.018 70)` | `oklch(92.5% 0.012 90)` | text, 14.6:1 |
| `--ink-2` | `oklch(40% 0.018 70)` | `oklch(81% 0.014 85)` | secondary text, 8.5:1 |
| `--ink-3` | `oklch(47% 0.016 70)` | `oklch(72% 0.014 80)` | meta, labels, 6.3:1 |
| `--rule` | `oklch(86% 0.014 85)` | `oklch(33% 0.012 70)` | hairlines (decorative) |
| `--plank` | `oklch(66% 0.05 62)` | `oklch(38% 0.04 58)` | the shelf board |

**Book colors** come from one number, `spine.hue`. `bookColors()` walks lightness until the spine's text clears 4.6:1, and picks a light spine with ink lettering (yellows, teals, cyans) or a dark spine with paper lettering (everything else), whichever keeps more chroma. It also derives the accent used for links inside the book (5.2:1 or better on both papers) and a quiet tint for callouts. Never hand-pick a book color; change the hue.

The Dark Souls book (`theme: ds`) is always dark: ash paper `oklch(17.5% 0.014 48)` and an ember accent `oklch(76% 0.15 60)`.

## Typography

The Alegreya superfamily (Huerta Tipográfica, Argentina), self-hosted through the Astro fonts API.

| Role | Face | Where |
|---|---|---|
| Reading text, display titles | Alegreya 400 to 900, italics | body, masthead, chapter titles, deks |
| Headings, covers, UI | Alegreya Sans 500 / 700 / 800 | h2-h3 in prose, cover titles, buttons |
| Labels | Alegreya Sans SC 500 / 700 | spines, kickers, meta, the status legend |

Body is `clamp(1.125rem, ..., 1.25rem)` on a 1.6 line height, in a 66ch column. Scale steps are 1.25 apart or more. Headings use `text-wrap: balance`, paragraphs `pretty`. Spine titles are sized at build time to fit their spine (one, two or three lines).

## Components

- **Spine**: thickness from the book's word count (36 to 74px), height varies a little per book, glyph at the head, status mark at the foot, two printed bands. Hover or focus lifts it 10px and shows a slip (description, status, chapters, minutes, revised); the slip is `display: none` until then.
- **Shelf**: label in small caps, spines on a plank drawn as a repeating gradient, so every wrapped row gets its own board.
- **Status mark**: a circle filled a quarter (Barely Started) to full (Nearly Done). Shape carries the meaning; the word sits beside it wherever there is room.
- **Cover**: 2:3, the book's color, glyph and shelf at the top, title and subtitle at the bottom, two printed rules. Shares a view-transition name with its spine, so a click grows the spine into the cover.
- **Contents**: the author's own chapter numbers, dot leaders to reading time, a status mark and description per chapter. Labels like References sit above their entry.
- **Running head**: book name with a color swatch, chapter position, and a 2px reading-progress line (scroll-driven animation, where supported).
- **Moved on / Related**: a tinted box near the top of a superseded book with a button out; a single quiet line for a related site.

## Layout

Left-aligned, asymmetric where it earns it (masthead, book head), centered reading column everywhere else. `.measure` is `min(66ch, 100% - 2 gutters)`. The table of contents sits in the left margin from 76rem up and folds into a `<details>` below that. Breakpoint-free where possible; tested at 375px and 1280px.

## Motion

Exponential ease-outs only. Spine lift 280ms, slip fade 240ms, cross-document view transition 360ms. Everything collapses under `prefers-reduced-motion`.

## Don't

- Card grids for books. Books are spines and covers.
- Side-stripe borders, gradient text, glass panels.
- A second accent color inside a book.
- Hand-picked hex values for a book.
- Em dashes in any copy.
