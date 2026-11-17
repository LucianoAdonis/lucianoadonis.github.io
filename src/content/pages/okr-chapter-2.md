---
title: Aligning Infrastructure with Business OKRs
description: When the goal is revenue in LATAM and your work is Kubernetes upgrades.
status: orange
started: 2024-12-25
revised: 2026-02-21
book: okr
chapter: 2
plate: ../../assets/images/headers/yellow-okr.png
plateAlt: '"OKR" in dark letters on three wooden cubes, standing on a glossy yellow surface'
---

## What Are My OKRs?

<!-- source: 2026 batch (8126bde), restored -->
OKRs cascade down from company level to team level. It depends on how your organization is built, and with something like the Spotify Model you might find a tiered hierarchy:

- **Business OKRs**: where the company wants to go this quarter
  - **Development OKRs**: what product and engineering do to get there
    - **Infrastructure OKRs**: what the infra team does to support development

<!-- source: 2026 batch (8126bde), restored -->
Say the company objective is "grow revenue in LATAM by 20%" and your work is Kubernetes upgrades, certificate rotations and pipeline improvements. Infra teams often struggle here: the connection isn't obvious from outside, so that work easily gets dismissed as overhead instead of seen as what keeps everything else running. Make the link explicit: without reliability work the product work can't ship, and without pipeline improvements deployment frequency stays low. Then write that chain down.

---

## OKR Highlight Types

Not every task feeds a stated OKR, and they still matter. Giving them a type helps you report why an Epic exists when it doesn't map to a Key Result:

<!-- source: 2026 batch (8126bde), restored -->
- **Business Critical**: work required to hit a committed goal. If it doesn't get done, a Key Result misses.
- **Express**: urgent work that jumped the queue because something broke or a deadline moved.
- **Innovative**: improves how work gets done, not just what gets done. Usually generates future velocity.
- **Enhancement**: small improvements to something already working, the difference between acceptable and good.
- **Standardization**: making multiple teams or systems do the same thing the same way, which cuts future cognitive load.
- **Adjustment**: updates to keep something working as the environment changes, like version upgrades, dependency patches or config drift fixes.

<!-- source: 2026 batch (8126bde), restored -->
This explains work that wasn't in the original plan, and it shows leadership where the team's effort really goes, which is probably more fragmented than any quarterly plan suggests.

---
