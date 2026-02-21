---
layout: custom
title: Incident Response Communication
description: Channel selection, escalation paths, severity definitions, and post-incident checklists.
book: communication-tips
chapter: 5
status: yellow
category: optimization
---

{% include chapter-nav.html position="top" %}

---

<img class="myImg" src="../images/headers/purple-computer.png" alt="headers-purple-computer" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

When something breaks, clear communication is just as important as the technical fix. This chapter covers how to call for help, structure incident messages, manage escalation, and close the loop after resolution.

# Calling for Help

## Channel Selection Guidelines

Where you post depends on the scope of the incident:

1. **Private Group** (for initial triage)
   - Single environment impact
   - Minor component affected
   - Limited scope (fewer than 5 people involved)
   - Uncertain team ownership

2. **Public Channel** (mandatory for)
   - Multi-environment impact
   - Critical component affected
   - Multiple teams involved
   - Potential widespread impact
   - Escalated incidents

## Team Engagement Protocol

### Development Team Engagement

- Post in the squad's dev channel.
- Tag relevant subject matter experts.
- Include:
  - Error logs
  - Environment details
  - Recent changes
  - Impact assessment

### Infrastructure Team Engagement

- Contact the current on-call engineer first.
- Provide:
  - Infrastructure metrics
  - Alert screenshots
  - Access issues
  - System health indicators

### Cross-team Collaboration

- Create a war room channel if needed.
- Establish a single communication channel for the incident.
- Designate an incident commander.
- Assign a note-taker.

# Message Templates

## Initial Alert

```
🚨 Incident Alert
• Issue: [Brief description]
• Impact: [Affected services/users]
• Environment: [Dev/Staging/Prod]
• Current status: [Investigating/Identified/In Progress]
• Severity: [P1/P2/P3/P4]
• Started at: [Time]
CC: @oncall @teamlead
```

## Assistance Request

```
Need assistance with:
• Component: [System/Service name]
• Problem: [Specific issue]
• Attempted: [Actions taken so far]
• Logs: [Link to logs]
• Access needed: [Yes/No]
Priority: [Urgent/High/Medium/Low]
```

# Incident Management Process

## 1. Detection and Triage

- Identify severity level.
- Determine the immediate response team.
- Create a dedicated incident channel if needed.
- Start incident documentation.

## 2. Communication Flow

| Severity | Update Frequency |
|----------|-----------------|
| P1 | Every 30 minutes |
| P2 | Every 60 minutes |
| P3 | Every 2 hours |
| P4 | Final update post-resolution |

## 3. Escalation Path

```
L1 Support (15 min) → L2 Engineer (30 min) → Team Lead (45 min) → Department Head (60 min)
```

Each transition should include a handoff message summarising what has been tried so far.

# Incident Severity Definitions

| Severity | Definition | Example |
|----------|------------|---------|
| **P1** | Service down, customer impact | Production API returning 500s for all users |
| **P2** | Degraded service, workaround exists | Slow response times, users can retry |
| **P3** | Minor impact, non-critical | A single internal tool is unavailable |
| **P4** | Minimal impact, can be scheduled | A cosmetic bug in the admin panel |

# Communication Channels Matrix

| Severity | Primary Channel | Secondary Channel | Update Frequency |
|----------|----------------|-------------------|------------------|
| P1 | `#incidents` | Team Slack/Teams | 30 min |
| P2 | `#team-channel` | Email | 60 min |
| P3 | `#team-channel` |: | 120 min |
| P4 | Squad channel |: | Daily |

# Post-Incident Actions

## Immediate Actions

- [ ] Post resolution update in all relevant channels:
  - Development
  - DevOps
  - Scrum
  - Status page
- [ ] Create incident report ticket
- [ ] Schedule immediate debrief if needed

## Documentation Requirements

- [ ] Incident timeline
- [ ] Root cause analysis
- [ ] Resolution steps taken
- [ ] Customer impact assessment
- [ ] Prevention measures

## Follow-up Tasks

- [ ] Create tickets for:
  - Incident documentation
  - Action items
  - System improvements
  - Process updates
- [ ] Schedule post-mortem meeting
- [ ] Update runbooks and documentation
- [ ] Review monitoring and alerts

# Best Practices

**Do:**
- Keep communication clear and concise.
- Use thread discussions for technical details.
- Document all decisions as they happen.
- Follow escalation procedures.
- Update status regularly, even if there is no new information.

**Don't:**
- Spam multiple channels with the same message.
- Leave status updates hanging without a resolution message.
- Make assumptions about root cause before investigation.
- Work in isolation during a team-wide incident.
- Forget to close the loop with a final "resolved" message.

{% include chapter-nav.html %}
