---
layout: custom
title: Why OKRs Matter - Chapter 1
description: The structure, the hierarchy, and where Jira fits in
book: okr
chapter: 1
status: orange
category: educational
---

{% include chapter-nav.html position="top" %}

---

<img class="myImg" src="../images/headers/yellow-okr.png" alt="yellow-okr" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

# What is an OKR?

OKR stands for Objectives and Key Results. The formula is:

**I will [Objective] as measured by [Key Results].**

That is the whole thing. What makes it useful is not the formula, it is the discipline of separating what you want to achieve from how you will know you achieved it.

An Objective is a direction. It is qualitative and tells you where you are going. "Improve platform reliability." You cannot check a box and say you are done. It is a statement of intent.

A Key Result is the proof. It is a specific, measurable number that tells you whether you actually moved in that direction. "Reduce incident frequency by 30% this quarter." When the quarter ends, either the number is there or it is not.

<br>

# The Third Layer Nobody Explains

Most OKR explanations stop at two layers. There is a third one that is where most of the actual work happens.

- **Objective**: the direction
- **Key Result**: the measurable proof that you moved in that direction
- **Initiative**: the actual work you do to move the Key Result

An Initiative is a project, a campaign, a feature, a migration. In Jira, an Initiative becomes an Epic. Multiple Epics can contribute to a single Key Result. Multiple Key Results roll up to a single Objective.

The full chain looks like this:

```
Objective
└── Key Result 1
│   ├── Epic A
│   └── Epic B
└── Key Result 2
    ├── Epic C
    ├── Epic D
    └── Epic E
```

This is the chain from company strategy down to the ticket an engineer picks up on Monday morning. Each layer answers a different question:

- Objective: where are we going?
- Key Result: how will we know we got there?
- Epic: what are we actually building or changing?
- Stories/Tasks: what does that break down to this sprint?

<br>

# Can a Key Result Be Divided?

This is a common question and the short answer is: Key Results should not be divided into sub-Key Results. What you can do is have multiple Epics contributing to the same Key Result. That is not dividing it, that is just how the work gets organized.

If a Key Result starts to feel like it needs to be split, it usually means it is measuring two different things and should be two separate Key Results, each with its own Epics.

The thing to avoid is treating Epics as Key Results. An Epic is the work. A Key Result is the outcome. "Migrate authentication service to the new provider" is an Epic. "Reduce login failure rate from 2% to 0.5%" is a Key Result. You might need three Epics to achieve that Key Result, but the KR is the thing you report against, not the individual Epics.

The distinction matters because it keeps the focus on outcomes rather than output. Shipping an Epic is not success on its own. Moving the number is.

<br>

# A Concrete Example

Say the company objective is: "Make the platform something engineers are proud to work on."

Three Key Results under that objective might be:

- Reduce deployment time from 45 minutes to 15 minutes
- Reduce the number of flaky tests in CI from 80 to under 10
- Achieve a developer satisfaction score of 8 out of 10 in the quarterly survey

The first Key Result could have three contributing Epics: pipeline parallelization, artifact caching, and test environment provisioning improvements. Each Epic has stories. The engineers work the stories. The Key Result moves as the work lands.

When a manager reports upward, they point at the Key Result number. If asked for evidence, they point at the Epics. The chain is already there.

<br>

# OKR Cycles

OKRs are time-bound, usually quarterly. Some organizations run annual Objectives with quarterly Key Results underneath them. The cadence matters less than the habit of reviewing them regularly and being honest about whether the numbers are moving.

Carrying an OKR into the next quarter is allowed. The useful question when that happens is whether the target was unrealistic to begin with or whether something blocked progress that should be addressed. An OKR that gets carried over three times in a row is not an OKR anymore, it is a wish.

<br>

# How Does Jira Relate to OKRs?

Epics in Jira are the natural home for Initiatives. When you create an Epic, its description should reference the Key Result it contributes to. This does two things:

First, it makes the connection visible to anyone looking at the Epic. An engineer can see why the work exists, not just what it is.

Second, it makes upward reporting mechanical. When someone asks "how are we tracking against KR2?", the answer is "here are the Epics contributing to KR2, and here is their current completion percentage."

Without this connection, reporting becomes a summary you write from memory. With it, the work reports itself.

---

{% include chapter-nav.html %}
