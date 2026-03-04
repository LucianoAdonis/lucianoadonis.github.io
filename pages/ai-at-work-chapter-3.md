---
layout: custom
title: "AI in Your Workflow"
description: "Use it like a tool, not like a personality."
book: ai-at-work
chapter: 3
status: yellow
category: educational
---

{% include chapter-nav.html %}

---

# Where AI Fits in a Workday

The mistake most people make is treating AI as a separate activity. They open ChatGPT, have a conversation, copy the result, close the tab, and go back to work. That is like keeping a calculator in a different room.

AI tools work best when they are embedded in the flow of work, not bolted on top of it.

---

# The Five-Minute Rule

If you are stuck on something and five minutes of AI assistance would unblock you, use it. If the task requires deep thought, domain knowledge, or creative judgment, the model will waste your time more than it saves.

**Good five-minute uses:**
- "How do I format a date in Go's time.Format?"
- "What is the AWS CLI command to list S3 bucket policies?"
- "Rewrite this error message to be more helpful to the user."
- "Convert this Terraform HCL to a table showing resource types and names."

**Bad five-minute uses:**
- "Design the architecture for our new microservice."
- "Write the entire PR description for this 30-file change."
- "Should we use Kafka or RabbitMQ?"

The first group has a clear, verifiable answer. The second group requires judgment that the model does not have.

---

# IDE Integration

The highest-value AI integration for most engineers is inside the editor. GitHub Copilot, Cursor, Claude Code, Cody — the specific tool matters less than the habit.

## What Works

- **Autocomplete for boilerplate.** Tests, configuration files, repetitive CRUD operations. Let the model fill in the predictable parts so you can focus on the interesting ones.
- **Inline explanations.** Highlight a block of code and ask "what does this do?" Faster than context-switching to a browser.
- **Quick refactors.** "Rename this variable from `x` to `connectionTimeout` across this file." Mechanical work that takes seconds with AI and minutes by hand.

## What Does Not Work

- **Generating entire features.** The model does not know your architecture, your patterns, or your team's conventions. A 200-line generated function will look right and be subtly wrong in ways that take longer to debug than writing it yourself.
- **Blindly accepting suggestions.** Every autocomplete is a suggestion, not a decision. Read it before you tab-accept it. The five seconds you save by not reading are the five minutes you spend later debugging.

## The Habit

The habit to build is: **small, frequent, verified.** Use AI for small things, often, and always verify the output. That is the workflow that actually makes you faster without introducing risk.

---

# For Teams

If you are a lead or manager thinking about how your team uses AI tools, a few things to consider.

## Establish Norms, Not Bans

Blanket bans on AI tools are counterproductive. People will use them anyway — they will just hide it. Instead, establish norms:
- What data can be shared with AI tools? (See Chapter 1: The Security Conversation)
- What output needs to be reviewed before shipping?
- Where do AI tools add value for your team specifically?

## AI Does Not Replace Code Review

AI-generated code needs the same review as human-written code. Maybe more, because the failure modes are different — models generate plausible-looking code that passes a casual glance but fails in edge cases a human writer would have caught.

If someone on your team submits a PR and says "AI wrote it," the review standard does not change. The person who commits the code is responsible for it, regardless of who or what wrote it.

## Knowledge Sharing Still Matters

A risk of heavy AI use is that people stop building shared understanding. Instead of asking a colleague how a service works, they ask the model. Instead of writing documentation, they generate it. Instead of discussing tradeoffs in a meeting, they paste the question into a chat.

The model cannot replace the knowledge that lives in your team's heads. It cannot tell you why a decision was made, what was considered and rejected, or what the political context was. That knowledge transfers through conversations, code reviews, and documentation written by people who were there.

AI accelerates individual work. Shared understanding is what makes the team work. Do not let the first erode the second.

---

# The Long View

AI tools will get better. Whatever limitations I described here will shrink or vanish in a few years. The models will know more, hallucinate less, and integrate deeper into every tool you use.

That means "how to use ChatGPT" is ephemeral knowledge. The skills that last are:

- **Knowing what to ask.** The ability to decompose a problem into questions the model can answer. This is problem-solving, not prompt engineering.
- **Evaluating output.** The ability to read a response and quickly determine whether it is correct, partially correct, or confidently wrong. This requires domain knowledge.
- **Maintaining judgment.** The ability to decide when to use the tool and when not to. This is experience.

The people who benefit most from AI tools are the ones who were already good at their jobs. The tools amplify capability — they do not replace it.

Use them deliberately, verify the output, and keep thinking for yourself.

---

{% include chapter-nav.html %}
