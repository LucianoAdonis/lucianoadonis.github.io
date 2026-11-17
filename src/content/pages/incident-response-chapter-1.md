---
title: Triage
description: How emergency rooms classify urgency, and how to do the same with incidents.
status: yellow
started: 2026-03-04
revised: 2026-03-04
book: incident-response
chapter: 1
---

## How Emergency Rooms Sort Chaos

The triage nurse decides how urgent the patient's condition is and how quickly they need to see a doctor. Nobody gets treated in order of arrival, they get treated in order of need.

That sounds obvious until you notice how many tech teams still process incidents like a deli counter: first come, first served.

---

## Priority Levels

Patients are classified into levels depending on how severe their condition is. The names vary by hospital and country, but the system usually has five levels:

- **Level 1, Immediate**: Life-threatening conditions that need instant intervention. Heart attacks, severe trauma, respiratory failure.
- **Level 2, Urgent**: Serious but not immediately life-threatening, could escalate if left alone. Severe pain, difficulty breathing, large wounds.
- **Level 3, Less Urgent**: Concerning but stable, so they may wait longer. Mild asthma attacks, uncomplicated fractures, infections.
- **Level 4, Non-Urgent**: Stable conditions that need care but pose no immediate risk. Minor cuts, sprains, mild fevers.
- **Level 5, Routine**: Minor ailments unlikely to get worse. Colds, minor rashes, routine check-ups.

The rule of thumb is urgency over arrival time. The most critical patients go first, no matter when they walked in.

---

## The Tech Translation

In tech you can use the same classification for incidents and system issues:

| Level | Hospital | Tech Equivalent |
|-------|----------|----------------|
| 1: Immediate | Heart attack, respiratory failure | Critical outage, security breach, data corruption |
| 2: Urgent | Severe pain, large wounds | Performance degradation, partial outage that could escalate |
| 3: Less Urgent | Mild asthma, uncomplicated fracture | Slow response times affecting some users, non-critical service degraded |
| 4: Non-Urgent | Minor cuts, sprains | Minor bugs not affecting core functionality |
| 5: Routine | Cold, minor rash | Cosmetic issues, low-impact bugs, tech debt items |

Most teams already have something like this, SEV1, SEV2, SEV3 labels in their incident management tool, and then treat every label the same once the adrenaline kicks in.

---

## Treatment Based on Priority

After classification, patients are treated by priority and not by arrival order. Someone with a life-threatening condition (Level 1) is seen immediately. Someone with a sprain (Level 4) waits.

In Level 1 and 2 the team acts right away, often with several professionals at once. Levels 3 to 5 wait in a designated area or get sent somewhere else.

**In tech terms:** a SEV1 gets the war room, the pager cascade and cross-team coordination. A SEV4 gets a Jira ticket and a place in the backlog. Treat every alert like a SEV1 and you burn out your team and numb them to the real emergencies.

---

## Continuous Reassessment

Triage isn't a one-time thing. Patients in the waiting area are reassessed all the time, and if one gets worse, they move to a higher level and are treated sooner.

**In tech terms:** that "minor" memory leak you called a SEV4 on Monday might be a SEV2 by Thursday if it grows linearly. The status page API answering slowly might be fine until a major incident hits and suddenly nobody can see the updates.

Key principles:
- **Urgency over arrival time**: the most critical problems are treated first, regardless of when they were reported
- **Resource allocation**: send engineers, tooling and attention where they're needed now
- **Efficient workflow**: triage keeps the team organized even when it's overwhelmed

---

## A Triage Example

Imagine three incidents land at the same time:

- **Incident A**: Production database is unreachable, all user-facing services are down. (Level 1, Immediate)
- **Incident B**: Deploy pipeline is broken, no new code can ship. (Level 3, Less Urgent)
- **Incident C**: A button on the settings page has the wrong color. (Level 5, Routine)

The triage engineer makes sure Incident A gets immediate attention and the full on-call response. Incident B is acknowledged, a workaround is noted (manual deploy if needed) and it's queued for after the crisis. Incident C gets a ticket.

If you've ever seen a team spend 20 minutes debating the deploy pipeline while production was burning, you've seen what happens without triage.

---
