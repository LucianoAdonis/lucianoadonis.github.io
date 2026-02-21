---
layout: custom
title: Why ADRs Matter and How to Use Them
description: Avoid future headaches with proper records.
status: yellow
category: educational
---

<img class="myImg" src="../images/headers/bluish-disney-the-beauty-and-the-beast-library.png" alt="the-beauty-and-the-beast" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

>"Weeks of programming can save you hours of planning."

---

# What Is an ADR?

An Architecture Decision Record is a short document that captures a technical decision: what was the problem, what options were considered, what was chosen, and why.

That last part is the one people skip, and it is also the most important one.

Without the "why", you end up with a system full of choices nobody can explain. New team members inherit decisions they cannot question because the context is gone. Old team members get asked to defend decisions they barely remember. Everyone spends time rediscovering the same tradeoffs the original author already worked through.

An ADR fixes that. It is not a design document. It does not describe how something works. It records the moment a decision was made, the options that were on the table, and the reasoning that settled it.

<br>

# Why Bother Writing One

Two reasons, and both are selfish.

**First**, writing forces clarity. You cannot write a coherent "why" without actually having one. The process of putting an ADR together will surface assumptions you did not know you were making, gaps in your research, and options you dismissed too quickly. If you cannot explain your decision to someone who was not in the room, it probably needs more thought.

**Second**, it protects you. When something goes wrong six months later, an ADR is the record of what was agreed, who was involved, and what tradeoffs were accepted at the time. It separates "bad decision" from "reasonable decision with known risks that were signed off by the right people."

That second reason matters a lot more than people admit.

<br>

# When to Write One

Not every decision needs an ADR. The bar is roughly: would future you, or someone new to the codebase, need to understand why this exists?

Good candidates:
- Choosing a database, message broker, or infrastructure pattern
- Deciding to migrate, deprecate, or replace something
- Setting a policy that affects multiple teams
- Accepting a known risk or limitation deliberately

Skip it for:
- Obvious implementation details
- Decisions that are trivially reversible
- Things already covered by existing team standards

<br>

# Structure

ADRs should be short enough that people actually read them. The goal is not to cover every edge case but to make the reasoning legible.

---

## Status

One line. What is the current state of this decision?

- **Proposed**: under discussion, not yet accepted
- **Accepted**: agreed and in effect
- **Deprecated**: still in place but no longer the recommended approach
- **Superseded by ADR-XXX**: replaced by a newer decision

The status field matters because decisions have a lifecycle. An ADR for a tool you migrated away from two years ago is still useful history, but it needs to be clearly marked as such.

---

## Context

What is the situation that made this decision necessary?

This is not a full problem statement. It is the minimum context someone needs to understand why a decision was needed at all. Include the constraints that shaped the options: team size, existing stack, performance requirements, compliance rules, or whatever made this non-obvious.

Keep it to a paragraph or two. If it takes more than that, you are writing a design doc, not an ADR.

---

## Options Considered

List what you actually evaluated. For each option, include enough to understand why it was or was not chosen.

The point here is to show the work. An ADR where only one option is listed is not an ADR, it is a justification. You need the alternatives to demonstrate that the decision was not made arbitrarily, and to explain why the rejected options were not good enough.

A simple format works fine:

```
Option A: [name]
- What it is
- Why it was considered
- Why it was not chosen (or why it was)

Option B: [name]
...
```

You do not need exhaustive pros and cons lists. What you need is an honest answer to "what would someone argue in favour of the option you did not pick, and why were they wrong?"

---

## Decision

What was chosen, and the condensed argument for it.

This should directly address the tradeoffs raised in the options section. If Option B was rejected because of operational complexity, the decision section should explain how the chosen option handles that concern, or acknowledge that the complexity was accepted for other reasons.

One paragraph is usually enough. If the decision requires more, split it into the decision itself and a brief rationale.

---

## Consequences

What changes as a result of this decision?

This is not just a list of benefits. Include the real costs: what gets harder, what assumptions now need to hold, which teams are affected, and what new risks are introduced. An ADR that only lists upsides was not written honestly.

Also note anything that needs to happen for the decision to remain valid: dependencies, review dates, or conditions under which the decision should be revisited.

<br>

# A Note on Tone

ADRs are not press releases. They do not need to sell the decision to the reader.

Write them as if you are explaining the situation to a colleague who will disagree with you and ask hard questions. That is the right level of rigour. Vague language and passive voice are usually signs that someone is hedging because the reasoning does not hold up to scrutiny.

If the decision was made under pressure, with incomplete information, or with known risks that were accepted for pragmatic reasons, say so. That context is valuable. It tells the reader whether to trust the decision or to revisit it.

<br>

---

<div class="nav-buttons">
  <a href="/pages/adrs-example" class="custom-button left"><strong>See an Example</strong></a>
</div>
