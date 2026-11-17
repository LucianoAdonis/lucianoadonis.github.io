---
title: Slack Tips
description: A second home. Themes, emoji sidebars, user groups, channels and search.
status: yellow
started: 2024-09-02
revised: 2026-02-21
book: communication-tips
chapter: 1
plate: ../../assets/images/headers/purple-computer.png
plateAlt: "Isometric illustration on a purple background: a server tower, a monitor showing code brackets, a phone, an HTML tile, a chart tile, a pen and a red book."
---

<!-- source: slack.md -->

## Style

You'll spend a lot of time in Slack, so it's best to get comfortable.

### Emoji Sidebars

<!-- source: slack.md -->

You can personalize sections with emojis. I tend to assign emojis that match the team or purpose, e.g. WiFi for Networking teams, Shield for Security.

I like the example of a coworker who uses Pokémon to identify each group.

If you don't have many emojis to pick from, the default ones go a long way:

- 🔴 Critical / Production
- 🟡 Development / Staging
- 🟢 General / Information
- 🔧 Technical
- 🎯 Projects
- 📢 Announcements

And then mute every channel that doesn't add value to your work.

### Custom Themes

<!-- source: slack.md -->

This is more of a preference thing, but you can try the following examples:

- **Mickey Mode**: `#1E328F,#091861,#20A271,#7C7A7F`
- **Dark Mode**: `#1A1D21,#232529,#2F3136,#FFFFFF`
- **Light Mode**: `#FFFFFF,#F8F8F8,#2F3136,#1A1D21`

Configure them from **Preferences → Appearance**, then select the **Custom** tab to the right of "Slack Themes".

## Optimization

<!-- source: slack.md -->

It's fun to do things until you do them over 20 times.

### Slack User Groups

By having a user group, you can:

- **Add users to multiple channels**: set the default channels on the group itself, and new members get added to all of them.
- **Tag the whole team in one go**: no more tagging each person individually when you ask a question or make an announcement. Less dependency on one team member and less awkwardness when reaching out to a team.

A group structure that works:

- `@team-all`: Everyone in the team
- `@team-dev`: Developers
- `@team-ops`: Operations
- `@team-leads`: Team leads
- `@team-oncall`: Current on-call

### Workspace Sections

Slack lets you organize your chats and channels by grouping them under sections, which gives you a clear picture of where each conversation comes from.

What do you gain from this extra step? If you work with many teams and hundreds of people, you can assign each team to a section, so whenever you go back to a conversation or get a message you already know the main association for it.

This is especially useful if many teams are involved. Not going crazy while doing our work in tech should be a priority.

### Channels

#### Essential Channel Setup

Normally your organization will decide this, but if you're starting from scratch, maybe the following structure could help:

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

## Advanced Features

### Pinned Items

Use pinned messages as a small knowledge base for each channel:

1. Team agreements
2. On-call schedule
3. Important links
4. Emergency procedures
5. Team documentation

Clean them up regularly so they stay useful.

### Custom Statuses

<!-- source: slack.md -->

- 🥙 **Lunch**: use a healthy food as the emoji so people believe you're a healthy person.
- 🗓️ **In meeting**: this can be set automatically if you add the proper integration, like the Outlook one.
- 🔴 **Do not disturb**
- ⏰ **Be right back** (or BRB)
- 📉 **Internet issues**: there's probably a better emoji for it, but it helps show others why you suddenly appear disconnected at random.

### Search Modifiers

Search modifiers narrow results quickly:

```
in:#channel
from:@user
before:2024-03-21
has:link
has:reaction
```

Combine them to pinpoint a message, for example `in:#tech-reviews from:@jane has:link`.

### Thread Best Practices

Keep the main channel readable by using threads for:

- Technical discussions
- Problem-solving
- Multiple responses
- Status updates

## Best Practices

1. **Channel Management**
   - Archive inactive channels
   - Regular cleanup of pinned items
   - Update channel topics weekly

2. **Communication**
   - Use threads for discussions
   - Keep messages concise
   - Use formatting for readability

3. **Organization**
   - Regular workspace audit
   - Consistent naming conventions
   - Clear channel purposes
