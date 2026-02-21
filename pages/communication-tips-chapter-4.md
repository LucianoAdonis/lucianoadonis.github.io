---
layout: custom
title: Message Templates
description: Copy-paste templates for meeting absences, time off, and status updates.
book: communication-tips
chapter: 4
status: yellow
category: optimization
---

{% include chapter-nav.html position="top" %}

---

<img class="myImg" src="../images/headers/purple-computer.png" alt="headers-purple-computer" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

These templates are designed to be copied and adapted. Replace the bracketed placeholders with your own details and adjust the tone to fit your team's culture.

The `[$TEAM_GREETING]` placeholder represents whatever greeting your team typically uses: for example, "Hi team", "Hey folks", "Good morning everyone", or simply "Hello all". Use whatever feels natural in your workspace.

# Unable to Join a Team Meeting

Key principles for communicating a meeting absence:

- Always communicate as early as possible.
- Use appropriate channels (prioritise the team's Scrum or Sprint channel).
- Provide clear status updates and next steps.
- Tag relevant team members.
- Follow up after the meeting.

## Communication Channel Priority

1. Team's Scrum / Sprint channel
2. Project-specific channels
3. Direct messages to lead / manager
4. Calendar update / meeting response

## Templates for Meeting Absence

### Standard Update (No Blockers)

```
[$TEAM_GREETING] I won't be joining today's [meeting name]:
• Status: All tickets updated in Jira
• Blockers: None
• Next actions: Will review meeting notes
• Return: Will join tomorrow's sync
CC: @mylead @relevantcoworker
```

### Update with Blockers

```
[$TEAM_GREETING] I won't be joining today's [meeting name]:
• Status: Working on TICKET-123
• Blockers: Pending API access
• Handoff: @coworker will continue the setup
• Next actions: Sync with @coworker at 2pm
• Questions: Please tag me in thread if needed
CC: @mylead @relevantcoworker
```

### Late Join Notice

```
[$TEAM_GREETING] I'll be 15 minutes late to today's [meeting name]:
• Status: In another meeting until [time]
• Updates: Will share in thread when I join
CC: @mylead
```

# Taking Time Off

## Types of Time Off Communication

1. Planned vacation
2. Sick leave
3. Emergency absence
4. Extended leave
5. Partial day off

## Templates for Time Off

### Planned Time Off

```
[$TEAM_GREETING]
I'll be out of office on [dates]:
• Handoff: @backup will cover critical tasks
• Current work: All tickets updated in Jira
• Pending items:
  - [TICKET-123]: Ready for review
  - [TICKET-456]: Blocked, details in ticket
• Emergency contact: @mylead
• Knowledge base: [link to relevant docs]

I'll be back on [return date].
CC: @projectmanager @teamchannel
```

### Unexpected Absence / Sick Leave

```
[$TEAM_GREETING]
Due to [reason if comfortable sharing], I need to take today off:
• Urgent matters: Please contact @backup
• Meetings: Calendar updated to OOO
• Status: Updated tickets with current progress
• Expected return: [date/time if known]
CC: @mylead @projectmanager
```

### Extended Leave Notice

```
[$TEAM_GREETING]
I'll be taking leave from [start date] to [end date]:
• Handoff doc: [link to document]
• Coverage plan:
  - Daily tasks: @teammate1
  - Project X: @teammate2
  - Ongoing reviews: @teammate3
• Last day preparations:
  - Complete code reviews
  - Update documentation
  - Transfer access permissions
• Return plan: Team sync on [date]

I'll ensure all critical tasks are transitioned before leaving.
CC: @mylead @projectmanager
```

### Partial Day Off

```
[$TEAM_GREETING]
I'll be away today from [start time] to [end time]:
• Available: [specify hours]
• Critical updates: Will check messages at [time]
• Pending tasks: Can be handled after [return time]
CC: @mylead
```

# Return to Work

### First Day Back

```
[$TEAM_GREETING]
I'm back from my time off:
• Catching up on: Messages and tickets
• Available for: Sync calls after [time]
• Questions: Please tag me in any important threads
• Priorities: Will align with @lead during our 1:1
```

# Pre-absence Checklist

Use this checklist before any planned absence:

- [ ] Update all relevant tickets and tasks
- [ ] Create handoff documentation if needed
- [ ] Set up auto-responder for email
- [ ] Update calendar to show OOO
- [ ] Decline or delegate scheduled meetings
- [ ] Notify key stakeholders
- [ ] Set messaging platform status
- [ ] Update team availability calendar
- [ ] Document current project status
- [ ] Share access to necessary resources
- [ ] Delegate monitoring and alert responsibilities

# General Communication Best Practices

## Message Structure

Every work message benefits from a consistent structure:

1. Clear subject or purpose
2. Current status
3. Impact on others
4. Next steps or actions
5. Relevant tags and mentions

## Response Time Expectations

| Priority | Expected Response |
|----------|-------------------|
| Urgent matters | Within 1 hour during work hours |
| Regular updates | Same business day |
| Non-critical items | Within 24 hours |
| While OOO | As specified in auto-response |

## Status Indicators

- 🟢 Available
- 🟡 In a meeting
- 🔴 Do not disturb
- ⚫ Out of office
- 🌙 After hours

## Documentation Requirements

1. Update personal workspace status
2. Maintain team calendar
3. Keep project documentation current
4. Log all handoff decisions
5. Document any temporary access grants

## Emergency Contacts Template

```
Emergency Contacts List:
• Technical Issues: @techlead
• Project Questions: @projectmanager
• Access Problems: @devops
• Client Concerns: @accountmanager
• HR Matters: @hrteam
```

{% include chapter-nav.html %}
