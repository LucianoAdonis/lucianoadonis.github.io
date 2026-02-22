---
layout: custom
title: Aligning Infrastructure with Business OKRs - Chapter 2
description: What to do when your team's work does not obviously match any company objective
book: okr
chapter: 2
status: orange
category: educational
---

{% include chapter-nav.html position="top" %}

---

<img class="myImg" src="../images/headers/yellow-okr.png" alt="yellow-okr" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

# What Are My OKRs?

OKRs cascade down from company level to team level. A common structure looks like this:

- **Business OKRs**: where the company wants to go this quarter
  - **Development OKRs**: what product and engineering are doing to get there
    - **Infrastructure OKRs**: what the infra team is doing to support development

In practice, infrastructure teams often struggle here. The company objective is "grow revenue in LATAM by 20%." The infra team's work is Kubernetes upgrades, certificate rotations, and pipeline improvements. The connection is not obvious from the outside, which makes it easy for that work to get dismissed as overhead rather than recognized as what keeps everything else running.

The answer is not to pretend the connection is tighter than it is. It is to make the real connection explicit: without the reliability work, the product work cannot ship. Without the pipeline improvements, deployment frequency stays low. The infra team's OKRs support the development OKRs, which support the business OKRs. That chain needs to be documented.

<br>

# OKR Highlight Types

Not all work fits neatly under a stated OKR. Some of it is urgent, some of it is maintenance, some of it is the kind of thing nobody asked for but everyone benefits from. Categorizing work by type helps when reporting, because it explains why the Epic exists even when it does not map directly to a Key Result.

Useful categories:

- **Business Critical**: work required to hit a committed goal. If this does not get done, a Key Result misses.
- **Express**: urgent work that jumped the queue because something broke or a deadline moved. It was not planned but it was necessary.
- **Innovative**: something that improves how work gets done, not just what gets done. Usually generates future velocity.
- **Enhancement**: incremental improvements to something already working. The difference between acceptable and good.
- **Standardization**: making sure multiple teams or systems do the same thing the same way. Reduces future cognitive load.
- **Adjustment**: updates required to keep something functioning as the environment around it changes. Version upgrades, dependency patches, config drift corrections.

The categorization does two things. It makes it easier to explain why work happened that was not in the original OKR plan. And it gives leadership a clearer picture of where team effort actually goes, which is usually more fragmented than any quarterly plan suggests.

---

{% include chapter-nav.html %}
