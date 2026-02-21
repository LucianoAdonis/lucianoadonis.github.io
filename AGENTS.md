# AGENTS.md — Writing Style and Tone Guide

This file defines the tone, grammar rules, structural patterns, and quality bar for all content on this site. Use it as a reference when writing or reviewing pages.

---

## The Reader

The audience is a working technical professional. They are busy, skeptical, and will stop reading the moment something feels like a corporate memo or a marketing page. Do not write to impress them. Write to be useful to them.

They can handle ambiguity, incomplete answers, and "I am not sure about this." What they cannot handle is vague language dressed up as confidence.

---

## Tone

**Write like you are explaining something to a colleague over lunch**, not presenting to a committee.

- First person is fine. "I find that..." and "you will notice..." are both acceptable.
- Opinions are fine. State them as opinions, not as universal truths.
- Humor is welcome when it fits naturally. Do not force it and do not explain it.
- Acknowledge when something is hard, incomplete, or uncertain. "I do not know" beats false precision.
- Casual does not mean careless. The thinking should be rigorous even when the tone is relaxed.

---

## What Not to Write

### Corporate vocabulary — never use these

- "leverage", "utilize" (use "use")
- "strategic asset", "value-add", "drive adoption", "best-in-class"
- "technical governance", "architectural integrity", "stakeholder alignment"
- "comprehensive", "in-depth", "cutting-edge", "robust"

### AI giveaways — phrases that signal the text was not written by a person

- "delve into", "it is worth noting", "it is important to"
- "in conclusion", "to summarize", "furthermore", "moreover"
- "it should be noted that", "consideration should be given to"
- "this section will cover...", "as mentioned above..."
- Bullet lists that restate the heading they are under

### Hedging language

Passive voice used to avoid accountability is a red flag. "It was decided that..." — by whom? "Changes were made..." — what changes?

Write the subject. Write the agent. Write who did what.

---

## Grammar Rules

These are specific to this project and override general style preferences.

- **No em dashes in prose text.** Use a comma, a period, or a colon depending on the relationship between the clauses. Em dashes are fine inside code blocks.
- **No semicolons in prose text.** If two clauses need a semicolon, they probably deserve to be two sentences. Semicolons in code blocks are fine.
- **US English spelling.** "color" not "colour", "rigor" not "rigour", "favor" not "favour".
- **Contractions are fine** in casual sections. "It is" and "it's" are both acceptable. Pick one and be consistent within a paragraph.
- **Sentence case for headings.** "How to write an ADR" not "How To Write An ADR". Proper nouns and acronyms are still capitalized.
- **No exclamation points** unless quoting someone or in a clearly comedic context.

---

## Structure Patterns

### Every page

```yaml
---
layout: custom
title: Page Title
description: One sentence. No period at the end.
status: green|yellow|orange|red
category: optimization|educational|self-help|mentoring|theory|meta
---
```

Followed by:
1. Header image (using the `myImg` class for popup behavior)
2. Optional blockquote (a short quote relevant to the topic, not generic inspiration)
3. Horizontal rule
4. Content

### Chapter pages add

```yaml
book: book-slug
chapter: N
```

The chapter number can be a decimal (0, 1, 1.5, 2, etc.) for optional or interstitial chapters.

### Status meanings

| Status | Meaning | When to use |
|--------|---------|-------------|
| green | Nearly done | Content is complete, reviewed, and readable |
| yellow | Draft | Most sections exist; some gaps or rough edges remain |
| orange | Jottings | Outline exists, significant content missing |
| red | Barely started | Skeleton or placeholder only |

Assign the status honestly. A page with mostly empty sections is red, not yellow.

### Navigation buttons (landing pages only)

```html
<div class="nav-buttons">
  <a href="/pages/book-slug-chapter-1" class="custom-button left"><strong>Chapter 1</strong></a>
</div>
```

- `left` class for forward-pointing buttons (next chapter, first chapter)
- `right` class for backward-pointing buttons (previous chapter)
- Do not include `{% include chapter-nav.html %}` on any page. Navigation is handled by the site's navbar.

### Links

Always use absolute paths without the `.md` extension: `/pages/page-name`

---

## What a Good Page Looks Like

A page is good when:

1. **The first paragraph tells you exactly what you will get** — not what the author hopes you will get, not a summary of the field, not a disclaimer. The actual thing.
2. **Each section earns its place.** If a heading does not add something the surrounding prose cannot, remove the heading and fold the content in.
3. **Examples are concrete.** "For example, use `in:#team-channel from:@user`" is useful. "For example, you can narrow your search" is not.
4. **The writing does not require re-reading.** If a sentence needs to be read twice to parse, rewrite it.
5. **Incomplete sections are removed or marked clearly.** An empty heading is worse than no heading. Either fill it or delete it.

---

## Common First-Draft Problems

These patterns appear often and should be caught in review:

| Problem | Example | Fix |
|---------|---------|-----|
| Restating the title | Section "What is an ADR?" opens with "An ADR is an Architecture Decision Record" | Lead with the thing that matters, not the definition |
| List where prose belongs | Three-item list that says the same thing three ways | Merge into one sentence |
| Prose where a list belongs | Long run-on sentence listing five things separated by commas | Make it a list |
| Inflated scope | "This chapter covers everything you need to know about X" | Say what the chapter actually covers |
| Vanishing subject | "It was determined that the approach would be..." | "We decided to..." |
| Missing landing | Section ends with a bullet list and no closing thought | Add one sentence of synthesis or transition |

---

## Examples

### Bad opening paragraph

> Confluence is a powerful team collaboration tool developed by Atlassian that allows teams to create, share, and collaborate on documentation, project plans, and other content in a centralized, accessible platform. In today's fast-paced business environment, effective knowledge management is crucial for team success.

Why it fails: restates the product name, uses corporate filler ("powerful", "centralized, accessible platform"), and the second sentence could be deleted without losing anything.

### Good opening paragraph (from this site)

> Our memory is not perfect, especially in tech, juggling multiple stacks and constantly switching contexts. Then, out of nowhere, someone asks about something you worked on months ago, and you have to dig deep to pull that knowledge back out.

Why it works: specific, relatable, no waste, makes you want to read the next sentence.

---

### Bad explanation of a concept

> ADRs provide several key benefits in enterprise settings: Collective Knowledge Repository, Cross-Team Alignment, Future-Proofing, Informed Decision Making, and Scalable Knowledge Management.

Why it fails: noun-phrase list with no explanation, "enterprise settings" is vague, every item is a buzzword.

### Good explanation of the same concept (from this site)

> Without the "why", you end up with a system full of choices nobody can explain. New team members inherit decisions they cannot question because the context is gone. Old team members get asked to defend decisions they barely remember.

Why it works: concrete consequences, no jargon, each sentence adds something the previous one did not.

---

## A Note on Completeness

It is better to have a short, honest, complete page than a long page with empty sections. Empty headings tell the reader that someone planned to write something and did not. That is worse than having less content.

If a section is not ready, either write a single honest sentence like "This section is still being worked on" or remove the heading entirely until there is something to say.
