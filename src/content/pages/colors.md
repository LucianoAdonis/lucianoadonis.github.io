---
title: Colors
description: My greatest weakness, plus pastel palettes for Confluence and Jira
status: yellow
started: 2025-03-12
revised: 2026-02-21
---

Colors, my greatest weakness!

Not to exaggerate, but usually we don't care about them, until we have to do something that requires a lot of combination, and mixing becomes a critical skill.

Like I wasn't aware of the opposite* colors.

<div data-review="new">

*Complementary, apparently. More on that below.

</div>

---

## How Pastel Colors Work

<!-- source: 2026 batch (8126bde), restored -->
The trap is picking colors that feel safe but are still too saturated. `#FF6B6B` looks like a reasonable red until you use it as a section background and the text becomes unreadable.

A color has three properties: hue (what color it is), saturation (how intense it is) and lightness (how bright or dark it is).

A pastel has high lightness and low-to-moderate saturation. It reads as soft, and the eye doesn't have to fight the background to see the text on top.

Back it off: lower the saturation and raise the lightness until it feels almost white.

A quick check: squint at it. If the background still jumps out, it's too saturated.

### Complementary and Analogous Colors

Two ideas that keep coming up when you pick a palette:

- **Complementary colors**: they sit opposite each other on the color wheel (red/green, blue/orange, purple/yellow). They create contrast and make each other pop, which helps when you highlight something against a background. Two saturated complements side by side look aggressive. Pastel complements work better.
- **Analogous colors**: they sit next to each other on the wheel (blue, blue-green, green). They feel calm, and a palette of analogous pastels never clashes. Good for multi-section documents where you want variety without noise.

---

## Confluence Section Backgrounds

<!-- source: 2026 batch (8126bde), restored -->
These work as panel or table backgrounds without competing with the text.

### Semantic Palette

Use these when the color carries meaning: status, alert level or type of information.

| Purpose | Hex | Description |
|---------|-----|-------------|
| Info / Note | `#DEEBFF` | Soft blue, for context, definitions, good-to-know |
| Success / Done | `#E3FCEF` | Soft green, for completed work and confirmed status |
| Warning / Caution | `#FFFAE6` | Soft yellow, proceed with attention |
| Error / Blocked | `#FFEBE6` | Soft red, for problems, blockers, urgent items |
| Neutral / Default | `#F4F5F7` | Light gray, for general sections with no implied meaning |

<span data-review="new">As far as I can tell, they</span> match what Confluence's built-in Info, Note, Warning and Error panel macros use, so custom tables in these colors stay consistent with the rest of the page.

### Tonal Palette

Use these for variety when you don't want to imply a status. Good for splitting a long document or giving a header row its own background.

| Name | Hex | Description |
|------|-----|-------------|
| Slate | `#EDF2F7` | Near-white blue-gray. Safe default for any section. |
| Lavender | `#EDE7F6` | Soft purple. Good for theory, planning or design content. |
| Peach | `#FFF3E0` | Warm off-white. Good for templates or reference sections. |
| Sage | `#F1F8F0` | Near-white green. Good for instructions or how-tos. |
| Steel | `#E8F4FD` | Cool pale blue. Good for callouts or reference material. |
| Rose | `#FCE4EC` | Very soft pink. Use sparingly, best as a one-off highlight. |

---

## Text on Color

<!-- source: 2026 batch (8126bde), restored -->
The background decides which text color works on top of it.

- On any pastel background, use dark navy (`#172B4D`) for body text instead of pure black. It reads softer and still has strong contrast.
- On white or near-white sections, `#333333` or `#42526E` works for secondary text.
- Never use white text on a pastel background, the contrast is too low.
- For labels, badges or borders on colored sections, use a darker shade of the same hue. Same family, much lower lightness, and it looks intentional.

### Pairing Examples

| Background | Text | Use for |
|------------|------|---------|
| `#DEEBFF` | `#172B4D` | Info panels, context boxes |
| `#E3FCEF` | `#006644` | Success states, done indicators |
| `#FFFAE6` | `#5C4400` | Warnings, in-progress notes |
| `#FFEBE6` | `#BF2600` | Errors, blockers, critical flags |
| `#F4F5F7` | `#172B4D` | Neutral sections, general use |

---

## Status Colors

<!-- source: 2026 batch (8126bde), restored -->
Status colors show up in Jira tickets, Confluence status macros and hand-built tables. Here are two palettes, one with a bit more presence.

### Stronger Status Palette

<!-- source: 2026 batch (8126bde), restored -->
More readable at a glance. Use it for dashboards or tables someone needs to scan quickly.

| Status | Hex Code | Color Description |
|--------|----------|-------------------|
| To Do | `#FFEBCC` | Soft Peach |
| In Progress | `#CCE5FF` | Brighter Blue |
| Blocked | `#FFB3B3` | Stronger Red |
| Done | `#B3FFCC` | Brighter Green |

### Softer Status Palette

<!-- source: 2026 batch (8126bde), restored -->
Less distracting in dense tables.

| Status | Hex Code | Color Description |
|--------|----------|-------------------|
| To Do | `#FFF4E5` | Light Orange (Soft and Neutral) |
| In Progress | `#E5EDFF` | Light Blue |
| Blocked | `#FFD5D5` | Light Red (Indicates Urgency) |
| Done | `#D5FFE5` | Light Green (Success/Completion) |

<!-- source: 2026 batch (8126bde), restored -->
Use the softer one as the default. The stronger one is for when someone is scanning many rows fast and the subtle version would get lost.

---

## Confluence Status Macro Colors

<!-- source: 2026 batch (8126bde), restored -->
Confluence's built-in Status macro has six preset colors. These are the hex equivalents, for when you need to match them in custom tables or panels.

| Macro Color | Hex | Use for |
|-------------|-----|---------|
| Grey | `#DFE1E6` | Not started, neutral, N/A |
| Blue | `#DEEBFF` | In progress, informational |
| Green | `#E3FCEF` | Done, healthy, on track |
| Yellow | `#FFFAE6` | At risk, in review, pending |
| Red | `#FFEBE6` | Blocked, overdue, critical |
| Purple | `#EDE7F6` | Custom states, planning |

---

## What to Avoid

<!-- source: 2026 batch (8126bde), restored -->
- **Pure saturated primaries**: `#FF0000`, `#0000FF` and `#FFFF00` are too aggressive as backgrounds. They work as small accents (a 4px border, a badge chip), not as section fills.
- **Multiple strong colors on one page**: each color should mean one thing. If blue is info, green is done and yellow is caution, a random purple section breaks the system, and readers will try to interpret it and come up with nothing.
- **Dark backgrounds**: dark mode is a deliberate design choice. A black or very dark navy cell in a Confluence table reads as a mistake, so stick to light backgrounds.
- **Off-brand grays**: a brownish gray next to a bluish gray looks accidental. Pick one and stay with it. `#F4F5F7` is Atlassian's standard light gray and works with everything else on this page.
- **Gradients**: they read as decoration in documentation. Use a solid pastel.

---

## Quick Reference

<!-- source: 2026 batch (8126bde), restored -->
A copy-paste palette for Confluence. These all work together in one document without clashing.

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
