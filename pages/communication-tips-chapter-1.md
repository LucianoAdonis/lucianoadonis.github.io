---
layout: custom
title: "Platform Essentials: Slack"
description: Themes, channels, user groups, and search tips for Slack.
book: communication-tips
chapter: 1
status: yellow
category: optimization
---

{% include chapter-nav.html position="top" %}

---

<img class="myImg" src="../images/headers/purple-computer.png" alt="headers-purple-computer" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

# Style

You will spend a lot of time in Slack, so it is best for you to get comfortable.

## Emoji Sidebars

You can personalize sidebar sections with emojis. Assign emojis that match the team or purpose, for example a WiFi icon for Networking teams, a Shield for Security, and so on.

One coworker uses Pokémon to identify each group, which is a fun alternative. If you prefer to keep things simple, the default emojis work well:

- 🔴 Critical / Production
- 🟡 Development / Staging
- 🟢 General / Information
- 🔧 Technical
- 🎯 Projects
- 📢 Announcements

After setting up your sections, mute every channel that does not add value to your daily work.

## Custom Themes

Slack lets you apply custom colour palettes. You can try the following examples:

- **Mickey Mode**: `#1E328F,#091861,#20A271,#7C7A7F`
- **Dark Mode**: `#1A1D21,#232529,#2F3136,#FFFFFF`
- **Light Mode**: `#FFFFFF,#F8F8F8,#2F3136,#1A1D21`

Configure these from **Preferences → Appearance**, then select the **Custom** tab to the right of "Slack Themes".

# Optimization

It is fun to do things until you do them over 20 times. The features below help reduce that repetition.

## Slack User Groups

By creating a user group you can:

- **Add users to multiple channels at once.** Set default channels on the group itself and every new member is automatically included.
- **Mention the whole team in one tag.** This removes the awkwardness of tagging each person individually and reduces dependency on a single team member for answers.

A recommended group structure:

- `@team-all`: Everyone in the team
- `@team-dev`: Developers
- `@team-ops`: Operations
- `@team-leads`: Team leads
- `@team-oncall`: Current on-call

## Workspace Sections

Slack lets you group channels and conversations into sidebar sections. If you work across many teams and hundreds of people, assigning each team to its own section means you immediately know the context of any new message.

This is especially useful when many teams are involved. Keeping your workspace organized helps you stay sane.

## Channels

### Essential Channel Setup

Your organization will normally define its own channels, but if you are starting from scratch the following structure is a solid starting point:

1. **Team Operations**
   - `#team-standups`: Daily meetings
   - `#team-announcements`: Important updates
   - `#team-social`: Non-work discussions

2. **Technical Channels**
   - `#tech-architecture`: Design discussions
   - `#tech-reviews`: Code reviews
   - `#tech-deployments`: Release coordination

3. **Support Channels**
   - `#help-technical`: Technical assistance
   - `#help-access`: Access requests
   - `#help-oncall`: Emergency support

# Advanced Features

## Pinned Items

Use pinned messages as a lightweight knowledge base for each channel:

1. Team agreements
2. On-call schedule
3. Important links
4. Emergency procedures
5. Team documentation

Review and clean up pinned items regularly so they stay useful.

## Custom Statuses

Statuses give your teammates quick context about your availability:

- 🥙 **Lunch**: use a healthy food emoji so people believe you are a healthy person.
- 🗓️ **In meeting**: this can be set automatically if you add the Outlook integration.
- 🔴 **Do not disturb**
- ⏰ **Be right back**
- 📉 **Internet issues**: helps explain unexpected disconnections.

## Search Modifiers

Slack search supports modifiers that narrow results quickly:

```
in:#channel
from:@user
before:2024-03-21
has:link
has:reaction
```

Combine them to pinpoint a message, for example `in:#tech-reviews from:@jane has:link`.

## Thread Best Practices

Keep the main channel readable by using threads for:

- Technical discussions
- Problem-solving conversations
- Responses that require back-and-forth
- Status updates on ongoing work

# Best Practices

1. **Channel Management**
   - Archive inactive channels
   - Clean up pinned items regularly
   - Update channel topics weekly

2. **Communication**
   - Use threads for discussions
   - Keep messages concise
   - Use formatting for readability

3. **Organization**
   - Perform regular workspace audits
   - Follow consistent naming conventions
   - Write clear channel purposes

{% include chapter-nav.html %}
