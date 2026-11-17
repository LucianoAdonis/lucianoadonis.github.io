---
title: Prompts That Work
description: Specific prompts for specific jobs.
status: yellow
started: 2026-03-04
revised: 2026-03-04
book: ai-at-work
chapter: 2
---

A useless AI answer is almost always a prompt problem, not a model problem. Here are the prompts, by job. Steal them.

---

## Code Review

When you want a second pair of eyes. Use it as a pre-check before you submit, your team still does the real review.

#### Find Issues

```
Review this code for bugs, edge cases, and security issues.
Don't rewrite it. Just list the problems you find, one per line,
with the line number and a brief explanation.

[code]
```

"Don't rewrite it" is the instruction that matters. Without it, the model returns a refactored version instead of a review.

#### Explain Unfamiliar Code

```
I didn't write this code. Explain what it does, step by step,
in plain language. Focus on the business logic, not the syntax.

[code]
```

Useful when you inherit a codebase or are reviewing a PR in an area you don't own.

#### Suggest Tests

```
Given this function, suggest test cases that cover:
- Happy path
- Edge cases
- Error conditions

Return each test as a description (not code) with the expected behavior.

[function]
```

Asking for descriptions instead of code gives you a test plan you can implement in your own style, rather than generated code you have to adapt.

---

## Debugging

When you're stuck and need a new angle.

#### Diagnose an Error

```
I'm getting this error: [error message]

Context:
- Language/framework: [X]
- What I was doing: [brief description]
- What I already tried: [list]

What are the most likely causes, ranked by probability?
```

"What I already tried" is critical. Without it, the model will suggest the obvious things you already ruled out.

#### Rubber Duck

```
I'm debugging a problem and I need to think through it.
Here's the situation: [describe the problem in detail].

Don't give me the answer. Instead, ask me questions that
might help me find it myself.
```

This is the most underrated prompt pattern. It turns the model into a debugging partner instead of an answer machine.

#### Explain a Stack Trace

```
Explain this stack trace. Tell me:
1. What went wrong
2. Where in the code it originated (not the framework internals)
3. What I should look at first

[stack trace]
```

Filtering out framework noise from a stack trace is exactly the kind of text transformation models are good at.

---

## Documentation

Where AI tools earn their keep, if you use them right.

#### Write a Runbook

```
I need a runbook for [procedure]. The audience is an on-call engineer
who has never done this before and it's 3 AM.

Include:
- Prerequisites
- Step-by-step commands (with placeholders for environment-specific values)
- How to verify each step worked
- Common failure modes and what to do about them
- Rollback procedure
```

The "3 AM on-call engineer" framing sets the right level of detail. It stops the model from assuming knowledge the reader might not have when they're stressed and sleep-deprived.

#### Summarize a Long Document

```
Summarize this document in three sections:
1. What it says (3-5 bullet points)
2. What decisions it implies
3. What questions it leaves unanswered

[document]
```

Section 3 is the valuable one. Most people use AI to summarize what a document says, but spotting what it doesn't say is where the value is.

#### Convert Formats

```
Convert this [format A] to [format B].
Preserve all information. Don't add commentary or explanations.

[content]
```

JSON to YAML, bullet points to a table, a Slack thread to meeting notes, raw logs to a timeline. This is mechanical transformation, and models are nearly perfect at it.

#### Polish a Sentence

<!-- source: writing.md -->
You don't need prompt engineering to write a summary you could come up with yourself. A few things worth asking for:

- Rewrite for clarity X text.
- Suggest alternatives to X line.
- Rewrite this more politely.
- Alternative expressions for X text.

---

## Knowledge Extraction

When you need to pull structured information out of unstructured sources.

#### Extract Action Items

```
Read this meeting transcript and extract:
- Decisions made (with who decided)
- Action items (with who is responsible)
- Open questions (with who should answer)

Return as a table.

[transcript]
```

#### Compare Options

```
I'm evaluating [Option A] vs [Option B] for [use case].

Compare them on:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

For each criterion, state which option is better and why in one sentence.
End with a recommendation.
```

Asking for one sentence per criterion keeps the model from writing a whitepaper.

#### Prepare for a Meeting

```
I have a meeting about [topic] with [audience].
Here's the context: [brief background].

Give me:
- 5 questions I should be prepared to answer
- 3 questions I should ask
- The one thing I should definitely not forget to mention
```

---

## The Meta-Pattern

Every prompt in this chapter follows the same structure:

1. **Role or context**: what situation am I in?
2. **Task**: what do I want the model to do?
3. **Constraints**: what should it avoid?
4. **Format**: how should the output look?

You don't need to memorize specific prompts. If you internalize this structure, you can build effective prompts on the fly for any situation.

```
[Context about who I am and what I'm working on]
[The specific thing I need]
[What to avoid or leave out]
[The format I want the output in]
```

<span data-review="new">Next chapter is about where these fit in your actual day.</span>

---
