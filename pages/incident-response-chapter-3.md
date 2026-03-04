---
layout: custom
title: "Drills, Protocols, and Readiness"
description: "You do not rise to the level of your aspirations. You fall to the level of your training."
book: incident-response
chapter: 3
status: yellow
category: educational
---

{% include chapter-nav.html %}

---

# Cross-Training and Simulation Drills

Hospitals do not wait for emergencies to practice. They run drills. Codes are called over the intercom, teams mobilize, and the entire choreography is rehearsed — not because they need the exercise, but because muscle memory saves lives when the real thing hits.

Tech teams rarely do this. We wait for production to break and call it "learning by doing." That is like a hospital saying their trauma training is the next car accident that rolls through the door.

## Game Days

The idea is simple: simulate a real incident in a controlled environment and let the team respond as if it were real.

- Pick a realistic failure scenario (database failover, region outage, security breach)
- Do not tell the team what the scenario is in advance
- Let the Incident Commander, Triage Engineer, and Communications Officer practice their roles
- Debrief afterward — what worked, what did not, what surprised people

You do not need chaos engineering tools for this, although they help. A well-structured tabletop exercise where someone narrates the scenario and the team talks through their response is already better than nothing.

## Rotation

In hospitals, residents rotate through departments — surgery, internal medicine, ER, pediatrics — specifically so they are not useless outside their specialty when a crisis crosses domains.

In tech, this maps to on-call rotations that span teams, paired debugging sessions across services, and shadow shifts where junior engineers observe how a different team handles their stack. The goal is not to make everyone an expert in everything. It is to make sure nobody freezes when they see an alert from an unfamiliar service.

---

# Clear Protocols and Communication Channels

Emergency rooms do not improvise their communication. There is a protocol for who gets called, in what order, through which channel, with what information. The reason is not bureaucracy — it is that confusion during a crisis kills people.

In tech, it kills uptime.

## Before the Incident

Decide these things now, while things are calm:

- **Where does incident communication happen?** A dedicated Slack channel? A war room? A bridge call? Pick one. Document it. Make sure everyone knows.
- **Who gets paged first?** The on-call engineer. Then the IC if the severity warrants it. Then the SMEs as needed. This chain should be automated, not improvised.
- **What information goes in the first message?** At minimum: what is broken, who is affected, what severity level, and who is currently looking at it.
- **How often are status updates posted?** For SEV1, every 15-30 minutes. For SEV2, every hour. For lower severities, at meaningful milestones.

## During the Incident

- The IC owns the communication channel. They decide when to escalate, when to bring in more people, and when to declare the incident resolved.
- The Communications Officer posts external updates. The IC should never be the one updating the status page.
- If multiple threads of investigation are running, each one reports back to the IC with findings. The IC synthesizes and redirects resources if needed.
- Anyone can raise a concern, but decisions flow through the IC. This is not about hierarchy — it is about avoiding five people making contradictory decisions at the same time.

## The Template That Saves You

Having a fill-in-the-blank template for incident updates removes the cognitive overhead of composing messages under stress:

```
[SEV Level] - [Service/System]
Status: [Investigating / Identified / Monitoring / Resolved]
Impact: [Who/what is affected]
Current action: [What is being done right now]
Next update: [Time]
```

Nobody writes poetry during a crisis. Make the format boring and consistent.

---

# Mindset and Emotional Readiness

This is the part nobody wants to talk about.

Hospital staff are trained for the emotional weight of emergencies. They have peer support, structured debriefs, and an institutional acknowledgment that the work takes a toll. Nobody expects a surgeon to be emotionally unaffected after losing a patient.

In tech, we pretend that a 3 AM page followed by four hours of debugging followed by a morning standup is just part of the job. It is part of the job. But pretending it costs nothing is how you burn people out.

## Things That Help

- **Acknowledge the stress.** After a major incident, saying "that was rough" out loud is not weakness. It is accuracy.
- **Rotate the burden.** If the same person is always the IC or always gets paged first, they will eventually break. Distribute the load.
- **Separate the incident from the person.** Blameless postmortems are not just a nice cultural artifact. They are how you keep people honest about what happened instead of defensive about who caused it.
- **Rest after an incident.** If someone was up until 4 AM fixing a SEV1, they should not be expected to function normally at 9 AM. The hospital does not schedule the ER doctor for a morning clinic after a night shift. Neither should you.
- **Normalize not knowing.** The most dangerous moment in an incident is when someone pretends to know the cause to look competent, instead of admitting uncertainty and continuing to investigate.

---

{% include chapter-nav.html %}
