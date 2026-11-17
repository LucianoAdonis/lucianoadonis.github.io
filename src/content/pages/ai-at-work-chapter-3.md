---
title: AI in Your Workflow
description: Use it like a tool, not like a personality.
status: yellow
started: 2026-03-04
revised: 2026-03-04
book: ai-at-work
chapter: 3
---

## Where AI Fits in a Workday

The mistake most people make is treating AI as a separate activity. They open ChatGPT, have a conversation, copy the result, close the tab, and go back to work. That's like keeping a calculator in a different room.

AI tools work best inside the work you're already doing.

---

## The Five-Minute Rule

If you're stuck on something and five minutes of AI assistance would unblock you, use it. If the task needs deep thought, domain knowledge, or creative judgment, the model will waste more of your time than it saves.

**Good five-minute uses:**
- "How do I format a date in Go's time.Format?"
- "What is the AWS CLI command to list S3 bucket policies?"
- "Rewrite this error message to be more helpful to the user."
- "Convert this Terraform HCL to a table showing resource types and names."

**Bad five-minute uses:**
- "Design the architecture for our new microservice."
- "Write the entire PR description for this 30-file change."
- "Should we use Kafka or RabbitMQ?"

The first group has a clear, verifiable answer. The second group requires judgment that the model doesn't have.

---

## IDE Integration

The highest-value AI integration for most engineers is inside the editor. GitHub Copilot, Cursor, Claude Code, Cody: the specific tool matters less than the habit.

### What Works

- **Autocomplete for boilerplate**: tests, configuration files, repetitive CRUD operations. Let the model fill in the predictable parts so you can focus on the interesting ones.
- **Inline explanations**: highlight a block of code and ask "what does this do?" Faster than context-switching to a browser.
- **Quick refactors**: "Rename this variable from `x` to `connectionTimeout` across this file." Mechanical work that takes seconds with AI and minutes by hand.

### What Doesn't Work

- **Generating entire features**: the model doesn't know your architecture, your patterns, or your team's conventions. A 200-line generated function will look right and be subtly wrong in ways that take longer to debug than writing it yourself.
- **Blindly accepting suggestions**: every autocomplete is a suggestion, not a decision. Read it before you tab-accept it.

### The Habit

The habit to build is **small, frequent, verified.** Use AI for small things, often, and always verify the output. That's the workflow that makes you faster without adding risk.

---

## For Teams

If you're a lead or manager thinking about how your team uses AI tools, a few things to consider.

### Establish Norms, Not Bans

Blanket bans on AI tools are counterproductive. People will use them anyway, they'll just hide it. Instead, establish norms:
- What data can be shared with AI tools? (See [The Security Conversation](/pages/ai-at-work-chapter-1#the-security-conversation))
- What output needs to be reviewed before shipping?
- Where do AI tools add value for your team specifically?

### AI Doesn't Replace Code Review

AI-generated code needs the same review as human-written code. Maybe more, because the failure modes are different: models generate plausible-looking code that passes a casual glance but fails in edge cases a human writer would have caught.

If someone on your team submits a PR and says "AI wrote it," the review standard doesn't change. The person who commits the code is responsible for it, regardless of who or what wrote it.

### Knowledge Sharing Still Matters

A risk of heavy AI use is that people stop building shared understanding. Instead of asking a colleague how a service works, they ask the model. Instead of writing documentation, they generate it. Instead of discussing tradeoffs in a meeting, they paste the question into a chat.

The model can't replace the knowledge that lives in your team's heads. It can't tell you why a decision was made, what was considered and rejected, or what the political context was. That knowledge transfers through conversations, code reviews, and documentation written by people who were there.

---

## The Long View

AI tools will get better. Whatever limitations I described here will shrink or vanish in a few years. The models will know more, hallucinate less, and integrate deeper into every tool you use.

That means "how to use ChatGPT" is ephemeral knowledge. The skills that last are:

- **Knowing what to ask**: the ability to decompose a problem into questions the model can answer. That's problem-solving more than prompt engineering.
- **Evaluating output**: the ability to read a response and quickly tell whether it's correct, partially correct, or confidently wrong. This requires domain knowledge.
- **Maintaining judgment**: the ability to decide when to use the tool and when not to. This is experience.

The people who benefit most from AI tools are the ones who were already good at their jobs.

<!-- source: writing.md -->
ChatGPT is helpful, but it's like using Mahoraga: it depends on how you use it.

---
