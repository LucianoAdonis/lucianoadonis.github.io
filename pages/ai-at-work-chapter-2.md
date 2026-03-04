---
layout: custom
title: "Prompts That Work"
description: "Specific prompts for specific jobs."
book: ai-at-work
chapter: 2
status: yellow
category: educational
---

{% include chapter-nav.html %}

---

The difference between a useless AI response and a useful one is almost always the prompt. Not the model, not the temperature setting, not the plugin — the prompt.

This chapter is a collection of prompt patterns organized by use case. They are designed for professional tech work: code review, debugging, documentation, and knowledge extraction. Steal them, modify them, make them yours.

---

# Code Review

When you want a second pair of eyes — not a replacement for your team's code review, but a pre-check before you submit.

### Find Issues

```
Review this code for bugs, edge cases, and security issues.
Do not rewrite it. Just list the problems you find, one per line,
with the line number and a brief explanation.

[code]
```

The key instruction is "do not rewrite it." Without that, the model will return a refactored version instead of a review.

### Explain Unfamiliar Code

```
I did not write this code. Explain what it does, step by step,
in plain language. Focus on the business logic, not the syntax.

[code]
```

Useful when you inherit a codebase or are reviewing a PR in an area you do not own.

### Suggest Tests

```
Given this function, suggest test cases that cover:
- Happy path
- Edge cases
- Error conditions

Return each test as a description (not code) with the expected behavior.

[function]
```

Asking for descriptions instead of code gives you a test plan you can implement in your own style rather than generated code you have to adapt.

---

# Debugging

When you are stuck and need a new angle.

### Diagnose an Error

```
I am getting this error: [error message]

Context:
- Language/framework: [X]
- What I was doing: [brief description]
- What I already tried: [list]

What are the most likely causes, ranked by probability?
```

The "what I already tried" part is critical. Without it, the model will suggest the obvious things you already ruled out.

### Rubber Duck

```
I am debugging a problem and I need to think through it.
Here is the situation: [describe the problem in detail].

Do not give me the answer. Instead, ask me questions that
might help me find it myself.
```

This is the most underrated prompt pattern. It turns the model into a debugging partner instead of an answer machine.

### Explain a Stack Trace

```
Explain this stack trace. Tell me:
1. What went wrong
2. Where in the code it originated (not the framework internals)
3. What I should look at first

[stack trace]
```

Filtering out framework noise from a stack trace is exactly the kind of text transformation that models excel at.

---

# Documentation

Where AI tools earn their keep, if you use them right.

### Write a Runbook

```
I need a runbook for [procedure]. The audience is an on-call engineer
who has never done this before and it is 3 AM.

Include:
- Prerequisites
- Step-by-step commands (with placeholders for environment-specific values)
- How to verify each step worked
- Common failure modes and what to do about them
- Rollback procedure
```

The "3 AM on-call engineer" framing sets the right level of detail. It prevents the model from assuming knowledge the reader might not have when they are stressed and sleep-deprived.

### Summarize a Long Document

```
Summarize this document in three sections:
1. What it says (3-5 bullet points)
2. What decisions it implies
3. What questions it leaves unanswered

[document]
```

Section 3 is the valuable one. Most people use AI to summarize what a document says. The real value is in spotting what it does not say.

### Convert Formats

```
Convert this [format A] to [format B].
Preserve all information. Do not add commentary or explanations.

[content]
```

JSON to YAML, bullet points to a table, a Slack thread to meeting notes, raw logs to a timeline. This is mechanical transformation, and models are nearly perfect at it.

---

# Knowledge Extraction

When you need to pull structured information out of unstructured sources.

### Extract Action Items

```
Read this meeting transcript and extract:
- Decisions made (with who decided)
- Action items (with who is responsible)
- Open questions (with who should answer)

Return as a table.

[transcript]
```

### Compare Options

```
I am evaluating [Option A] vs [Option B] for [use case].

Compare them on:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

For each criterion, state which option is better and why in one sentence.
End with a recommendation.
```

Asking for one sentence per criterion prevents the model from writing a whitepaper.

### Prepare for a Meeting

```
I have a meeting about [topic] with [audience].
Here is the context: [brief background].

Give me:
- 5 questions I should be prepared to answer
- 3 questions I should ask
- The one thing I should definitely not forget to mention
```

---

# The Meta-Pattern

Every prompt in this chapter follows the same structure:

1. **Role or context** — what situation am I in?
2. **Task** — what do I want the model to do?
3. **Constraints** — what should it not do?
4. **Format** — how should the output look?

You do not need to memorize specific prompts. If you internalize this structure, you can build effective prompts on the fly for any situation.

```
[Context about who I am and what I am working on]
[The specific thing I need]
[What to avoid or not include]
[The format I want the output in]
```

That is the whole framework. Everything else is just examples.

---

{% include chapter-nav.html %}
