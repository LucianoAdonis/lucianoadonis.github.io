---
layout: custom
title: "Triage"
description: "Classify first, fix second."
book: incident-response
chapter: 1
status: yellow
category: educational
---

{% include chapter-nav.html %}

---

# How Emergency Rooms Sort Chaos

The triage nurse's role is to determine the urgency of the patient's condition and decide how quickly they need to see a doctor. No one gets treated in order of arrival. They get treated in order of need.

This sounds obvious until you realize how many tech teams still process incidents the way a deli counter processes customers: first come, first served.

---

# Priority Levels

Patients are classified into different levels of priority depending on their condition's severity. The exact names vary by hospital and country, but the system generally follows five levels:

- **Level 1 — Immediate:** Life-threatening conditions requiring instant intervention. Heart attacks, severe trauma, respiratory failure.
- **Level 2 — Urgent:** Serious but not immediately life-threatening. Could escalate if left untreated. Severe pain, difficulty breathing, large wounds.
- **Level 3 — Less Urgent:** Concerning but stable. These patients may wait longer. Mild asthma attacks, uncomplicated fractures, infections.
- **Level 4 — Non-Urgent:** Stable conditions that need care but pose no immediate risk. Minor cuts, sprains, mild fevers.
- **Level 5 — Routine:** Minor ailments unlikely to deteriorate. Colds, minor rashes, routine check-ups.

The key principle: urgency over arrival time. The most critical patients are treated first, regardless of when they walked in.

---

# The Tech Translation

In tech, you can adopt the same classification for incidents and system issues:

| Level | Hospital | Tech Equivalent |
|-------|----------|----------------|
| 1 — Immediate | Heart attack, respiratory failure | Critical outage, security breach, data corruption |
| 2 — Urgent | Severe pain, large wounds | Performance degradation, partial outage that could escalate |
| 3 — Less Urgent | Mild asthma, uncomplicated fracture | Slow response times affecting some users, non-critical service degraded |
| 4 — Non-Urgent | Minor cuts, sprains | Minor bugs not affecting core functionality |
| 5 — Routine | Cold, minor rash | Cosmetic issues, low-impact bugs, tech debt items |

Most teams already have something like this — SEV1, SEV2, SEV3 labels in their incident management tool. The problem is not the labels. The problem is that people treat them all the same way once the adrenaline kicks in.

---

# Treatment Based on Priority

After classification, patients are treated based on their priority level rather than arrival order. A person with a life-threatening condition (Level 1) is seen immediately. Someone with a sprain (Level 4) waits.

In Level 1 and Level 2 situations, the team acts immediately — often multiple professionals at once. Levels 3 through 5 wait in a designated area or get redirected elsewhere.

**In tech terms:** a SEV1 gets the war room, the pager cascade, and cross-team coordination. A SEV4 gets a Jira ticket and a place in the backlog. When you treat every alert like a SEV1, you burn out your team and desensitize them to the real emergencies.

---

# Continuous Reassessment

Triage is not a one-time process. Patients in the waiting area are continuously reassessed to ensure their condition is not worsening. If a patient's condition deteriorates, they are moved to a higher priority level and treated sooner.

**In tech terms:** that "minor" memory leak you classified as SEV4 on Monday might be a SEV2 by Thursday if it is growing linearly. The status page API returning slow responses might be fine until a major incident hits and suddenly nobody can see the status updates.

Key principles:
- **Urgency over arrival time:** the most critical problems are treated first, regardless of when they were reported
- **Resource allocation:** send engineers, tooling, and attention where they are needed now
- **Efficient workflow:** triage ensures the team operates efficiently even when overwhelmed

---

# A Triage Example

Imagine three incidents land at the same time:

- **Incident A:** Production database is unreachable. All user-facing services are down. (Level 1 — Immediate)
- **Incident B:** Deploy pipeline is broken. No new code can ship. (Level 3 — Less Urgent)
- **Incident C:** A button on the settings page has the wrong color. (Level 5 — Routine)

The triage engineer ensures Incident A gets immediate attention and the full on-call response. Incident B is acknowledged, a workaround is noted (manual deploy if needed), and it is queued for after the crisis. Incident C gets a ticket.

If you have ever seen a team spend 20 minutes debating the deploy pipeline while production is burning, you have seen what happens without triage.

---

{% include chapter-nav.html %}
