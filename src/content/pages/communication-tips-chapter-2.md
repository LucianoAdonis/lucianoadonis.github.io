---
title: Microsoft Teams Tips
description: Teams hierarchy, channels, tags, search, meetings, and best practices.
status: orange
started: 2026-02-21
revised: 2026-02-21
book: communication-tips
chapter: 2
plate: ../../assets/images/headers/purple-computer.png
plateAlt: "Isometric illustration on a purple background: a server tower, a monitor showing code brackets, a phone, an HTML tile, a chart tile, a pen and a red book."
---

<div data-review="new">

Heads up: this chapter is still jottings.

</div>

## Style

Just like Slack, you'll spend a lot of time in Teams, so get comfortable.

### Themes and Appearance

Teams offers three built-in themes:

- **Default**: Light background, standard Microsoft look.
- **Dark**: Easier on the eyes for long sessions.
- **High Contrast**: Accessibility-focused, with strong color boundaries.

Configure them from **Settings → Appearance and accessibility**. If your organization supports it, Teams may also follow your OS-level dark mode.

## Teams Hierarchy

Before diving into daily use, it helps to know how Teams organizes conversations.

### Teams vs. Channels vs. Tabs

| Concept | Purpose | Example |
|---------|---------|---------|
| **Team** | A group of people working toward a shared goal | `Engineering`, `Marketing` |
| **Channel** | A topic-specific conversation space within a team | `#deployments`, `#code-reviews` |
| **Tab** | A pinned app or document at the top of a channel | A Wiki page, a Planner board, a shared spreadsheet |

### Channel Types

1. **Standard**: Visible and accessible to all team members.
2. **Private**: Restricted to a subset of team members. Use it for sensitive discussions like HR reviews or security incidents.
3. **Shared**: Accessible by people across different teams or even different organizations. Useful for cross-company collaboration.

#### Recommended Channel Structure

If you're setting up a new team from scratch:

1. **General** (default): Announcements and important links.
2. **Operations**
   - `Standups`: Daily syncs
   - `Announcements`: Team-wide updates
   - `Social`: Non-work conversations
3. **Technical**
   - `Architecture`: Design discussions
   - `Reviews`: Code and document reviews
   - `Deployments`: Release coordination
4. **Support**
   - `Help`: General questions
   - `On-Call`: Escalation and incident support

## Tags and Mentions

### Tags

Tags let you mention a subset of people inside a team without creating a separate team or channel. Some examples:

- `@Frontend`: All front-end developers
- `@On-Call`: Current on-call engineers
- `@Leads`: Team leads

Create and manage them from the team settings menu under **Manage tags**.

### Mention Shortcuts

- `@team-name`: Notify everyone in the team.
- `@channel-name`: Notify everyone following the channel.
- `@user`: Notify a specific person.
- `@tag`: Notify everyone assigned to a tag.

Use the broad ones sparingly, to avoid notification fatigue.

## Notification Management

Teams is noisy by default. Here's how to quiet it:

1. **Channel-level settings**: Right-click any channel and choose **Channel notifications** to control what triggers alerts.
2. **Quiet hours**: Set working hours under **Settings → Notifications → Quiet time** to mute after-hours pings.
3. **Priority contacts**: Mark key people (your manager, your on-call buddy) so their messages always break through Do Not Disturb.
4. **Banner vs. Feed**: Choose which events get a pop-up banner and which silently land in the Activity feed.

## Pinning, Tabs, and Bookmarks

### Pinning Messages

Pin important messages in a channel to keep them visible. They work as a small channel wiki. Good candidates:

- On-call schedule
- Team agreements or working norms
- Links to dashboards and runbooks

### Tabs

Tabs sit at the top of every channel and can host:

- **Files**: Shared documents from SharePoint / OneDrive.
- **Wiki / OneNote**: Collaborative notes.
- **Planner / Tasks**: Kanban boards for the channel.
- **Custom apps**: Power BI dashboards, third-party integrations, websites.

### Bookmarks

The Bookmarks bar (below the tabs) stores quick links (URLs, documents, channel resources) without taking up a full tab.

## Status and Presence

Teams shows your availability automatically based on your calendar, but you can customize it:

- 🟢 **Available**: Ready to chat.
- 🟡 **Away**: Idle or stepped out.
- 🔴 **Do not disturb**: Only priority contacts can reach you.
- 🟣 **In a meeting**: Set automatically during calendar events.
- ⚫ **Offline / Appear offline**: Hidden from presence indicators.

#### Custom Status Messages

Add a custom status message, with a duration, for more context:

- 🥙 **Lunch, back at 1pm**
- 🏠 **Working remotely today**
- 🎧 **Focus time, will reply after 3pm**
- 🏖️ **OOO until Monday**

## Search

### KQL Modifiers

Teams search supports Keyword Query Language (KQL) modifiers:

```
from:<person>
in:<channel>
subject:<topic>
sent:2024-03-21
hasattachment:true
```

Combine them for precise results, for example `from:jane in:deployments hasattachment:true`.

### Tips for Effective Search

- Use quotation marks for exact phrases: `"deployment failed"`.
- Filter by message, file, or person with the tabs at the top of the results.
- Star or bookmark the messages you know you'll need again.

## Meetings

### Key Features

- **Together Mode**: Places participants in a shared virtual background, which reduces video-call fatigue.
- **Breakout Rooms**: Split attendees into smaller groups for workshops or brainstorming, then bring everyone back.
- **Recording and Transcription**: Record meetings and get auto-generated transcripts saved to SharePoint.
- **Meeting Notes**: Collaborative notes attached to the meeting, visible to all participants.
- **Raise Hand**: Signal that you want to speak without interrupting.
- **Reactions**: Quick emoji reactions (thumbs up, applause, heart) without unmuting.

### Meeting Best Practices

1. **Always set an agenda** in the meeting invite.
2. **Start on time, end early**: respect everyone's calendar.
3. **Record important meetings** and share the transcript in the channel.
4. **Use the chat** for links and side questions so the conversation stays on track.

## Best Practices

1. **Threading**
   - Reply in threads to keep channel conversations organized.
   - Use "Post in channel" only when the reply is relevant to everyone.

2. **Governance**
   - Archive inactive channels.
   - Review team membership quarterly.
   - Keep the General channel for announcements only.

3. **File Management**
   - Store shared files in the channel's **Files** tab (backed by SharePoint) instead of sending them as chat attachments.
   - Use consistent naming conventions for uploaded documents.

4. **Communication**
   - Keep messages concise.
   - Use formatting (bold, lists, code blocks) for readability.
   - Prefer channels over group chats for discussions that others might need to search later.
