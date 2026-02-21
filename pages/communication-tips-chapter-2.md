---
layout: custom
title: "Platform Essentials: Microsoft Teams"
description: Teams hierarchy, channels, tags, search, meetings, and best practices.
book: communication-tips
chapter: 2
status: yellow
category: optimization
---

{% include chapter-nav.html position="top" %}

---

<img class="myImg" src="../images/headers/purple-computer.png" alt="headers-purple-computer" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

# Style

Just like Slack, you will spend a significant amount of time in Teams. Making it feel like your own workspace is the first step to being productive in it.

## Themes and Appearance

Teams offers three built-in themes:

- **Default**: Light background, standard Microsoft look.
- **Dark**: Easier on the eyes for long sessions.
- **High Contrast**: Accessibility-focused with strong colour boundaries.

Configure these from **Settings → Appearance and accessibility**. If your organization supports it, Teams may also follow your OS-level dark mode preference.

# Teams Hierarchy

Understanding how Teams organises conversations is essential before diving into daily use.

## Teams vs. Channels vs. Tabs

| Concept | Purpose | Example |
|---------|---------|---------|
| **Team** | A group of people working toward a shared goal | `Engineering`, `Marketing` |
| **Channel** | A topic-specific conversation space within a team | `#deployments`, `#code-reviews` |
| **Tab** | A pinned app or document at the top of a channel | A Wiki page, a Planner board, a shared spreadsheet |

Think of Teams as the building, Channels as rooms, and Tabs as the whiteboards on each room's wall.

## Channel Types

1. **Standard**: Visible and accessible to all team members.
2. **Private**: Restricted to a specific subset of team members. Use for sensitive discussions like HR reviews or security incidents.
3. **Shared**: Accessible by people across different teams or even different organisations. Useful for cross-company collaboration.

### Recommended Channel Structure

If you are setting up a new team from scratch:

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

# Tags and Mentions

## Tags

Tags let you mention a subset of people inside a team without creating a separate team or channel. Common tag examples:

- `@Frontend`: All front-end developers
- `@On-Call`: Current on-call engineers
- `@Leads`: Team leads

Create and manage tags from the team settings menu under **Manage tags**.

## Mention Shortcuts

- `@team-name`: Notify everyone in the team.
- `@channel-name`: Notify everyone following the channel.
- `@user`: Notify a specific person.
- `@tag`: Notify everyone assigned to a tag.

Use broad mentions sparingly to avoid notification fatigue.

# Notification Management

Teams generates a lot of notifications by default. Taming them is critical:

1. **Channel-level settings**: Right-click any channel and choose **Channel notifications** to control what triggers alerts.
2. **Quiet hours**: Set working hours under **Settings → Notifications → Quiet time** to mute after-hours pings.
3. **Priority contacts**: Mark key people (your manager, on-call buddy) so their messages always break through Do Not Disturb.
4. **Banner vs. Feed**: Choose which events get a pop-up banner and which silently appear in the Activity feed.

# Pinning, Tabs, and Bookmarks

## Pinning Messages

Pin important messages in any channel to keep them visible. Pinned messages work as a lightweight channel wiki. Good candidates:

- On-call schedule
- Team agreements or working norms
- Links to dashboards and runbooks

## Tabs

Tabs sit at the top of every channel and can host:

- **Files**: Shared documents from SharePoint / OneDrive.
- **Wiki / OneNote**: Collaborative notes.
- **Planner / Tasks**: Kanban boards for the channel.
- **Custom apps**: Power BI dashboards, third-party integrations, websites.

## Bookmarks

The Bookmarks bar (below the tabs) stores quick links (URLs, documents, or channel-specific resources) without taking up a full tab.

# Status and Presence

Teams shows your availability automatically based on calendar events, but you can customise it:

- 🟢 **Available**: Ready to chat.
- 🟡 **Away**: Idle or stepped out.
- 🔴 **Do not disturb**: Only priority contacts can reach you.
- 🟣 **In a meeting**: Automatically set during calendar events.
- ⚫ **Offline / Appear offline**: Hidden from presence indicators.

### Custom Status Messages

Set a custom status message with a duration for more context:

- 🥙 **Lunch, back at 1pm**
- 🏠 **Working remotely today**
- 🎧 **Focus time, will reply after 3pm**
- 🏖️ **OOO until Monday**

# Search

## KQL Modifiers

Teams search supports Keyword Query Language (KQL) modifiers:

```
from:<person>
in:<channel>
subject:<topic>
sent:2024-03-21
hasattachment:true
```

Combine them for precise results, for example `from:jane in:deployments hasattachment:true`.

## Tips for Effective Search

- Use quotation marks for exact phrases: `"deployment failed"`.
- Filter by message, file, or person using the tabs at the top of search results.
- Star or bookmark messages you know you will need again.

# Meetings

Teams' meeting features go beyond basic video calls.

## Key Features

- **Together Mode**: Places participants in a shared virtual background, reducing video-call fatigue.
- **Breakout Rooms**: Split attendees into smaller groups for workshops or brainstorming, then bring everyone back.
- **Recording and Transcription**: Record meetings and get auto-generated transcripts saved to SharePoint.
- **Meeting Notes**: Collaborative notes attached to the meeting, visible to all participants.
- **Raise Hand**: Signal that you want to speak without interrupting.
- **Reactions**: Quick emoji reactions (thumbs up, applause, heart) without unmuting.

## Meeting Best Practices

1. **Always set an agenda** in the meeting invite body.
2. **Start on time, end early**: respect everyone's calendar.
3. **Record important meetings** and share the transcript in the channel.
4. **Use the chat** for links and side questions so the conversation stays on track.

# Best Practices

1. **Threading**
   - Reply in threads to keep channel conversations organised.
   - Use "Post in channel" only when the reply is relevant to everyone.

2. **Governance**
   - Archive inactive channels.
   - Review team membership quarterly.
   - Keep the General channel for announcements only.

3. **File Management**
   - Store shared files in the channel's **Files** tab (backed by SharePoint) rather than sending them as chat attachments.
   - Use consistent naming conventions for uploaded documents.

4. **Communication**
   - Keep messages concise.
   - Use formatting (bold, lists, code blocks) for readability.
   - Prefer channels over group chats for discussions that others might need to search later.

{% include chapter-nav.html %}
