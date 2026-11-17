---
title: Why OKRs Matter
description: The third layer nobody explains, and which months your Q3 really is.
status: orange
started: 2024-12-25
revised: 2026-03-03
book: okr
chapter: 1
plate: ../../assets/images/headers/yellow-okr.png
plateAlt: '"OKR" in dark letters on three wooden cubes, standing on a glossy yellow surface'
---

## What is an OKR?

It's a sentence you fill in (OKR stands for Objectives and Key Results):

**I will (Objective) as measured by (Key Results).**

The Objective is qualitative, like "Improve platform reliability", and you can't tick a box and say you're done. The Key Results are the numbers that say whether you got there, like "Reduce incident frequency by 30% this quarter."

<!-- source: 2026 batch (8126bde), restored -->
The point of the sentence is splitting what you want from how you'll know you got it.

For example, "I will enhance the user experience on our website" as measured by "achieving a user satisfaction rate of 70%, reducing load time to under one second, and decreasing error rates to less than 1%."

---

## The Third Layer Nobody Explains

Most explanations stop at two layers, and there's a third where the actual work happens.

<!-- source: 2026 batch (8126bde), restored -->
- **Objective**: the direction, where are we going?
- **Key Result**: the measurable proof that you moved in that direction, how will we know we got there?
- **Initiative**: the work you do to move the Key Result, what are we building or changing?
- **Stories/Tasks**: what an Epic breaks down to this sprint

An Initiative is a project, a campaign, a feature, a migration. In Jira it becomes an Epic. Several Epics can feed one Key Result, and several Key Results roll up to one Objective:

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

That's the chain from company strategy down to the ticket an engineer picks up on Monday morning.

---

## Can a Key Result Be Divided?

This is a common question. Short answer: no, a Key Result shouldn't have sub-Key Results. What you can do is have multiple Epics contributing to the same one, which is just how the work gets organized.

If a Key Result feels like it needs splitting, it's probably measuring two things and should be two Key Results, each with its own Epics.

Also avoid treating Epics as Key Results. "Migrate authentication service to the new provider" is an Epic. "Reduce login failure rate from 2% to 0.5%" is a Key Result, and that's the thing you report against.

<!-- source: 2026 batch (8126bde), restored -->
You might need three Epics to move that one Key Result, and shipping all three doesn't count until the number moves.

---

## A Concrete Example

<!-- source: 2026 batch (8126bde), restored -->

Say the company Objective is "Make the platform something engineers are proud to work on."

Three Key Results under it might be:

- Reduce deployment time from 45 minutes to 15 minutes
- Reduce the number of flaky tests in CI from 80 to under 10
- Achieve a developer satisfaction score of 8 out of 10 in the quarterly survey

The first Key Result could have three contributing Epics: pipeline parallelization, artifact caching, and test environment provisioning improvements. Each Epic has stories, the engineers work the stories, and the Key Result moves as the work lands.

When a manager reports upward, they point at the Key Result number. If someone asks for evidence, they point at the Epics.

---

## Do OKRs Have Timelines?

Usually yes, and they're often quarterly. The catch is that those quarters follow the organization's fiscal year, not the calendar one. That flexibility lets you fit OKRs into different schedules and reassess regularly.

<!-- source: 2026 batch (8126bde), restored -->
Some organizations run annual Objectives with quarterly Key Results underneath. Either way, review them often.

### Understanding Fiscal Years

Which months "Q2" means depends on when the fiscal year starts. Two common cases:

Standard calendar year (January start)
- **Q1:** January, February, March
- **Q2:** April, May, June
- **Q3:** July, August, September
- **Q4:** October, November, December

<!-- source: 2026 batch (8126bde), restored -->
Fiscal year starting in October (common in the U.S. Federal Government and some large enterprises)
- **Q1:** October, November, December
- **Q2:** January, February, March
- **Q3:** April, May, June
- **Q4:** July, August, September

<!-- source: 2026 batch (8126bde), restored -->
April (UK government, Japan) and July are other common start months.

Organizations pick the starting month for regulatory reasons, industry practice or strategy. When you join a new company or start with a new client, confirm it early, because "our Q3 goals" means something different depending on who says it.

### Considerations for Carrying Over OKRs

<!-- source: 2026 batch (8126bde), restored -->
Carrying an OKR into the next quarter is allowed. When it happens, ask whether the target was unrealistic to begin with, or whether something blocked progress that needs fixing. If it's on its third carry-over, drop it or rewrite it.

An OKR can move to the next period if it was too ambitious, blocked, or a long-term project by design. When you extend one:

<!-- source: 2026 batch (8126bde), restored -->
- **Review and Rationale:** Why is it carried over? Over-ambition, external factors, or its long-term nature?
- **Update and Adapt:** Revise the Key Results if the business changed.
- **Communication:** Say it out loud, say why, and say what changes, or people will read it as a miss.
- **Integration with New Goals:** Check it still maps to current priorities.

---

## How Does Jira Relate to OKRs?

Many organizations use Jira to follow OKRs. Managers and product owners create Epics that correspond to each OKR, and teams (development, infrastructure, whatever) use them to show their own contribution to the company goals.

Put the Key Result in the Epic's description. Anyone looking at it can see why the work exists, not just what it is. And when someone asks "how are we tracking against KR2?", you answer with the Epics contributing to it and their completion percentage. Chapter 3 shows how to pull that into Confluence.

---
