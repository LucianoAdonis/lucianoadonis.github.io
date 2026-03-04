---
layout: custom
title: "The Rules"
description: "Before you ask AI anything, read this."
book: ai-at-work
chapter: 1
status: yellow
category: educational
---

{% include chapter-nav.html %}

---

# What AI Tools Are Good At

AI tools — large language models specifically — are good at a narrow set of things, and spectacularly good at those:

- **Transforming text.** Rewriting, summarizing, reformatting, translating between formats (JSON to YAML, bullet points to prose, formal to casual). This is their sweet spot.
- **First drafts.** Getting past the blank page. The output will need editing, but starting from "something that exists" is faster than starting from nothing.
- **Explaining concepts.** "Explain X like I am a junior engineer" works remarkably well. Not as a replacement for documentation, but as a quick way to build intuition before diving into the docs.
- **Pattern completion.** Boilerplate code, repetitive configurations, test cases that follow a pattern. Anything where the structure is predictable and the content varies.
- **Rubber ducking.** Describing a problem to a model forces you to articulate it, and the response sometimes points you in a direction you had not considered.

---

# What AI Tools Are Bad At

And here is where it falls apart:

- **Knowing your codebase.** The model does not know your architecture, your naming conventions, your team's preferences, or why that one service is deployed differently. Without that context, its suggestions are generic at best and wrong at worst.
- **Being right.** Models are confident even when they are wrong. They will fabricate API endpoints, invent function signatures, and cite documentation that does not exist. If you cannot verify the output, do not trust it.
- **Replacing thinking.** If you use AI to generate an answer you do not understand, you have not saved time — you have created a liability. You are now responsible for code you cannot explain, documentation you cannot defend, and decisions you cannot justify.
- **Security-sensitive contexts.** Pasting your production database schema, API keys, customer data, or proprietary business logic into a third-party AI service is a security incident waiting to happen. If your company has a policy about this, follow it. If it does not, you should probably suggest one.
- **Nuanced judgment.** Should we refactor this service or rewrite it? Is this candidate a good fit for the team? Should we delay the launch? These require context, experience, and judgment that a model does not have.

---

# The Traps

## The Copy-Paste Trap

The model gives you a response. It looks right. You paste it into your code or document without reading it carefully. Two weeks later, someone finds a bug or a factual error, and you cannot explain why it is there.

**The rule:** never commit output you have not read and understood. The model is a collaborator, not an author. You are still the author.

## The Verbosity Trap

You ask a simple question and get a 500-word response with an introduction, three sections, a conclusion, and phrases like "it is important to note that." You did not need any of that. You needed two sentences.

**The fix:** be explicit about length and format in your prompt. "Answer in one paragraph." "Give me the command, nothing else." "Three bullet points, no explanation." The model will match whatever format you set.

## The Authority Trap

The response sounds authoritative and well-structured, so you assume it is correct. But structure is not accuracy. A model can produce a beautifully formatted wrong answer.

**The rule:** treat every factual claim as "probably right but possibly fabricated." Verify against documentation, test the code, or ask someone who knows.

## The Shortcut Trap

You use AI to skip the learning. Instead of understanding how Kubernetes networking works, you ask the model to generate the config. It works. You move on. Three months later, something breaks and you have no mental model for debugging it.

**The balance:** use AI to accelerate learning, not to bypass it. "Explain how Kubernetes service discovery works, then show me a config example" is better than "Give me the config."

---

# The Security Conversation

This deserves its own section because people get it wrong in both directions.

**Too cautious:** refusing to use AI tools at all because "everything is sensitive." Most of the things you type into a chat are not sensitive. Asking how to write a bash loop, how to format a YAML file, or how to structure a postmortem template is fine.

**Too careless:** pasting entire codebases, database schemas, customer names, or internal architecture diagrams into a public model. This is where actual risk lives.

**The practical approach:**
- Know your company's AI policy. If one exists, follow it. If one does not exist, assume the strictest reasonable interpretation until one is written.
- Never paste credentials, tokens, API keys, or personally identifiable information.
- Sanitize code before pasting. Replace real service names with generic ones. Remove comments that reference internal systems.
- Use enterprise versions of AI tools when available — they typically have data retention and privacy guarantees that consumer versions do not.
- When in doubt, ask yourself: "Would I paste this into a public Stack Overflow question?" If not, do not paste it into ChatGPT either.

---

{% include chapter-nav.html %}
