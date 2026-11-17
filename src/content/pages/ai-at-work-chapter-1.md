---
title: The Rules
description: Before you ask AI anything, read this.
status: yellow
started: 2026-03-04
revised: 2026-03-04
book: ai-at-work
chapter: 1
---

## What AI Tools Are Good At

They're good at a short list of things, and very good at those:

- **Transforming text**: rewriting, summarizing, reformatting, translating between formats (JSON to YAML, bullet points to prose, formal to casual). This is their sweet spot.
- **First drafts**: getting past the blank page. The output will need editing, but starting from "something that exists" is faster than starting from nothing.
- **Explaining concepts**: "Explain X like I'm a junior engineer" works remarkably well. It doesn't replace the documentation, but it's a quick way to build intuition before diving into the docs.
- **Pattern completion**: boilerplate code, repetitive configurations, test cases that follow a pattern. Anything where the structure is predictable and the content varies.
- **Rubber ducking**: describing a problem to a model forces you to articulate it, and the response sometimes points you in a direction you hadn't considered.

---

## What AI Tools Are Bad At

And here's where it falls apart:

- **Knowing your codebase**: the model doesn't know your architecture, your naming conventions, your team's preferences, or why that one service is deployed differently. Without that context, its suggestions are generic at best and wrong at worst.
- **Being right**: models are confident even when they're wrong. They'll fabricate API endpoints, invent function signatures, and cite documentation that doesn't exist. If you can't verify the output, don't trust it.
- **Replacing thinking**: if you use AI to generate an answer you don't understand, you haven't saved time, you've created a liability. Now you're responsible for code you can't explain, documentation you can't defend, and decisions you can't justify.
- **Security-sensitive contexts**: pasting your production database schema, API keys, customer data, or proprietary business logic into a third-party AI service is a security incident waiting to happen. If your company has a policy about this, follow it. If it doesn't, you should probably suggest one.
- **Nuanced judgment**: should we refactor this service or rewrite it? Is this candidate a good fit for the team? Should we delay the launch? These need context, experience, and judgment that a model doesn't have.

---

## The Traps

### The Copy-Paste Trap

The model gives you a response. It looks right. You paste it into your code or document without reading it carefully. Two weeks later, someone finds a bug or a factual error, and you can't explain why it's there.

**The rule:** never commit output you haven't read and understood. Your name is on it, not the model's.

### The Verbosity Trap

You ask a simple question and get a 500-word response with an introduction, three sections, a conclusion, and phrases like <span data-review="new">"let's dive in."</span> You didn't need any of that. You needed two sentences.

<!-- source: writing.md -->
To put it simply, if someone asks how they're doing and they respond with a lengthy explanation about the current geopolitical and economic situation before getting into business, it might come across as odd and pretentious. Sometimes, less is more, and adding more text won't necessarily improve your answer; it might make it harder to read.

**The fix:** be explicit about length and format in your prompt. "Answer in one paragraph." "Give me the command, nothing else." "Three bullet points, no explanation." The model will match whatever format you set.

### The Authority Trap

The response sounds authoritative and well-structured, so you assume it's correct. A model can give you a beautifully formatted wrong answer, and the formatting is what makes you trust it.

**The rule:** treat every factual claim as "probably right but possibly fabricated." Verify against documentation, test the code, or ask someone who knows.

### The Shortcut Trap

You use AI to skip the learning. Instead of understanding how Kubernetes networking works, you ask the model to generate the config. It works. You move on. Three months later, something breaks and you have no mental model for debugging it.

**The balance:** use AI to accelerate learning, not to bypass it. "Explain how Kubernetes service discovery works, then show me a config example" is better than "Give me the config."

---

## The Security Conversation

This deserves its own section because people get it wrong in both directions.

<!-- source: writing.md -->
As you may already know (I hope so), in a company you should avoid using these services. If you use them anyway because "insert the proper reason here," at least don't do it carelessly: exposing sensitive information by passing a whole document just to rewrite two lines of text would be very questionable.

**Too cautious:** refusing to use AI tools at all because "everything is sensitive." Most of the things you type into a chat aren't sensitive. Asking how to write a bash loop, how to format a YAML file, or how to structure a postmortem template is fine.

**Too careless:** pasting entire codebases, database schemas, customer names, or internal architecture diagrams into a public model. This is where actual risk lives.

**The practical approach:**
- Know your company's AI policy. If one exists, follow it. If one doesn't exist, assume the strictest reasonable interpretation until one is written.
- Never paste credentials, tokens, API keys, or personally identifiable information.
- Sanitize code before pasting. Replace real service names with generic ones. Remove comments that reference internal systems.
- Use enterprise versions of AI tools when available. They typically have data retention and privacy guarantees that consumer versions don't.
- When in doubt, ask yourself: "Would I paste this into a public Stack Overflow question?" If not, don't paste it into ChatGPT either.

---
