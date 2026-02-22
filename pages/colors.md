---
layout: custom
title: Colors
description: Practical pastel palettes and color guidance for Confluence, Jira, and documentation work
status: yellow
category: meta
---

Colors are easy to ignore until you have to make something look intentional. Then suddenly you have 40 browser tabs open comparing hex codes.

This is a practical reference. Mostly Confluence-focused, with enough theory to make the choices make sense.

---

# How Pastel Colors Work

A color has three properties: hue (what color it is), saturation (how intense it is), and lightness (how bright or dark it is).

A pastel is a color with high lightness and low-to-moderate saturation. That combination reads as soft and readable — the eye does not fight the background to see the text on top of it.

The trap most people fall into is picking colors that feel safe but are still too saturated. `#FF6B6B` looks like a reasonable red until you use it as a section background and the text becomes unreadable. Back it off: reduce the saturation and raise the lightness until it feels almost white. That is the target.

A useful check: if you squint and the background still jumps out at you, it is too saturated.

## Complementary and Analogous Colors

Two concepts that come up when picking palettes:

- **Complementary colors** sit opposite each other on the color wheel (red/green, blue/orange, purple/yellow). They create contrast and make each other pop. Useful for highlighting something against a background — but pairing two saturated complements directly looks aggressive. Pastel complements work better.
- **Analogous colors** sit next to each other on the color wheel (blue, blue-green, green). They feel harmonious and calm. A palette of analogous pastels never clashes. Good for multi-section documents where you want variety without noise.

---

# Confluence: Section Backgrounds

These work well as panel or table backgrounds without competing with the text.

## Semantic Palette

Use these when the color should carry meaning — status, alert level, or type of information.

| Purpose | Hex | Description |
|---------|-----|-------------|
| Info / Note | `#DEEBFF` | Soft blue — context, definitions, good-to-know |
| Success / Done | `#E3FCEF` | Soft green — completed work, confirmed status |
| Warning / Caution | `#FFFAE6` | Soft yellow — proceed with attention |
| Error / Blocked | `#FFEBE6` | Soft red — problems, blockers, urgent items |
| Neutral / Default | `#F4F5F7` | Light gray — general sections with no implied meaning |

These match what Confluence's built-in Info, Note, Warning, and Error panel macros use internally, so custom tables built with these colors stay consistent with the rest of the page.

## Tonal Palette

Use these when you want visual variety without implying status. Good for dividing sections in a long document or giving a header row a distinct background.

| Name | Hex | Description |
|------|-----|-------------|
| Slate | `#EDF2F7` | Near-white blue-gray. Safe default for any section. |
| Lavender | `#EDE7F6` | Soft purple. Good for theory, planning, or design content. |
| Peach | `#FFF3E0` | Warm off-white. Good for templates or reference sections. |
| Sage | `#F1F8F0` | Near-white green. Good for instructions or how-tos. |
| Steel | `#E8F4FD` | Cool pale blue. Good for callouts or reference material. |
| Rose | `#FCE4EC` | Very soft pink. Use sparingly — best as a one-off highlight. |

<br>

---

# Text on Color

The background color determines what text color works on top of it.

## Rules

- On any pastel background, use dark navy (`#172B4D`) for body text instead of pure black. It reads softer and still has strong contrast.
- On white or near-white sections, `#333333` or `#42526E` works well for secondary text.
- Never use white text on a pastel background. Contrast will be too low.
- For labels, badges, or borders on colored sections: use a darker shade of the same hue. Same color family, much lower lightness. This looks intentional rather than accidental.

## Pairing Examples

| Background | Text | Use for |
|------------|------|---------|
| `#DEEBFF` | `#172B4D` | Info panels, context boxes |
| `#E3FCEF` | `#006644` | Success states, done indicators |
| `#FFFAE6` | `#5C4400` | Warnings, in-progress notes |
| `#FFEBE6` | `#BF2600` | Errors, blockers, critical flags |
| `#F4F5F7` | `#172B4D` | Neutral sections, general use |

The text colors here are darker shades of the same hue as the background. Pick the hue family, drop the lightness significantly, and you get a text color that feels matched rather than random.

<br>

---

# Status Colors

Status colors appear in Jira tickets, Confluence status macros, and hand-built tables. Two palettes — one softer, one with a bit more presence.

## Softer Palette

Less distracting in dense tables. Good default.

| Status | Hex | Description |
|--------|-----|-------------|
| To Do | `#FFF4E5` | Light orange, neutral |
| In Progress | `#E5EDFF` | Light blue |
| Blocked | `#FFD5D5` | Light red |
| Done | `#D5FFE5` | Light green |

## Slightly Stronger

More readable at a glance. Use for dashboards or tables someone needs to scan quickly.

| Status | Hex | Description |
|--------|-----|-------------|
| To Do | `#FFEBCC` | Soft peach |
| In Progress | `#CCE5FF` | Brighter blue |
| Blocked | `#FFB3B3` | Stronger red |
| Done | `#B3FFCC` | Brighter green |

Use the softer palette as the default. The stronger one is for situations where someone is scanning many rows fast and the subtler version would get lost.

<br>

---

# Confluence Status Macro Colors

Confluence's built-in Status macro has six preset colors. These are the hex equivalents for when you need to match them in custom tables or panels.

| Macro Color | Hex | Use for |
|-------------|-----|---------|
| Grey | `#DFE1E6` | Not started, neutral, N/A |
| Blue | `#DEEBFF` | In progress, informational |
| Green | `#E3FCEF` | Done, healthy, on track |
| Yellow | `#FFFAE6` | At risk, in review, pending |
| Red | `#FFEBE6` | Blocked, overdue, critical |
| Purple | `#EDE7F6` | Custom states, planning |

<br>

---

# What to Avoid

**Pure saturated primaries.** `#FF0000`, `#0000FF`, `#FFFF00` are too aggressive as backgrounds. They work as small accents — a 4px border, a badge chip — but not as section fills.

**Multiple strong colors on the same page.** Each meaningful color should mean one thing. If blue means info, green means done, and yellow means caution, adding a random purple section breaks the system. Readers will try to interpret it and come up with nothing.

**Dark backgrounds.** Dark mode is a deliberate design choice. A black or very dark navy cell in a Confluence table reads as a mistake rather than a decision. Stick to light backgrounds.

**Off-brand grays.** Not all grays look the same next to each other. A gray with a brownish cast next to a gray with a blue cast looks accidental. Pick one and use it consistently. `#F4F5F7` is Atlassian's standard light gray — it works with everything else on this page.

**Gradients.** Gradients read as decorative rather than functional in documentation. A solid pastel does the same job with less visual noise.

<br>

---

# Quick Reference

Copy-paste palette for Confluence. All of these work together in the same document without clashing.

```
Section Backgrounds
  Neutral:       #F4F5F7
  Info:          #DEEBFF
  Success:       #E3FCEF
  Warning:       #FFFAE6
  Error:         #FFEBE6

Tonal Options
  Lavender:      #EDE7F6
  Peach:         #FFF3E0
  Sage:          #F1F8F0

Text on Backgrounds
  Primary:       #172B4D
  Secondary:     #42526E
  On warning:    #5C4400
  On error:      #BF2600
  On success:    #006644
```
