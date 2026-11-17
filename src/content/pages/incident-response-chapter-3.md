---
title: Drills, Protocols, and Readiness
description: Cross-training, simulation drills, communication channels, and emotional readiness.
status: yellow
started: 2026-03-04
revised: 2026-03-04
book: incident-response
chapter: 3
---

## Cross-Training and Simulation Drills

Hospitals practice before the emergency: they run drills. Codes are called over the intercom, teams mobilize and the whole choreography gets rehearsed, because muscle memory saves lives when the real thing hits.

Tech teams rarely do this. We wait for production to break and call it "learning by doing." That's like a hospital saying its trauma training is the next car accident that rolls through the door.

### Game Days

The idea is simple: simulate a real incident in a controlled environment and let the team respond as if it were real.

- Pick a realistic failure scenario (database failover, region outage, security breach)
- Don't tell the team the scenario in advance
- Let the Incident Commander, Triage Engineer and Communications Officer practice their roles
- Debrief afterward: what worked, what didn't, what surprised people

You don't need chaos engineering tools for this, although they help. A well-structured tabletop exercise, where someone narrates the scenario and the team talks through their response, is already better than nothing.

### Rotation

In hospitals, residents rotate through departments (surgery, internal medicine, ER, pediatrics) so they aren't useless outside their specialty when a crisis crosses domains.

In tech, this maps to on-call rotations that span teams, paired debugging sessions across services, and shadow shifts where junior engineers watch how a different team handles their stack. Nobody becomes an expert in everything, but nobody freezes at an alert from an unfamiliar service either.

---

## Clear Protocols and Communication Channels

Emergency rooms don't improvise their communication. There's a protocol for who gets called, in what order, through which channel, with what information, because confusion during a crisis kills people. In tech it costs you uptime instead.

### Before the Incident

Decide these things now, while things are calm:

- **Where does incident communication happen?** A dedicated Slack channel? A war room? A bridge call? Pick one, document it, make sure everyone knows.
- **Who gets paged first?** The on-call engineer. Then the IC if the severity warrants it. Then the SMEs as needed. This chain should be automated, not improvised.
- **What goes in the first message?** At minimum: what's broken, who's affected, what severity level, and who's looking at it.
- **How often are status updates posted?** For SEV1, every 15 to 30 minutes. For SEV2, every hour. For lower severities, at meaningful milestones.

### During the Incident

- The IC owns the communication channel. They decide when to escalate, when to bring in more people and when to declare the incident resolved.
- The Communications Officer posts external updates. The IC should never be the one updating the status page.
- If several threads of investigation are running, each one reports back to the IC with findings. The IC synthesizes and redirects resources if needed.
- Anyone can raise a concern, but decisions flow through the IC. That way five people don't make contradictory calls at the same time.

### The Template That Saves You

A fill-in-the-blank template for incident updates removes the effort of composing messages under stress:

```
[SEV Level] - [Service/System]
Status: [Investigating / Identified / Monitoring / Resolved]
Impact: [Who/what is affected]
Current action: [What is being done right now]
Next update: [Time]
```

Keep the format boring and consistent.

---

## Mindset and Emotional Readiness

Hospital staff are trained for the emotional weight of emergencies. They have peer support, structured debriefs and an institutional acknowledgment that the work takes a toll. Nobody expects a surgeon to be unaffected after losing a patient.

In tech we pretend a 3 AM page, four hours of debugging and then a morning standup is just part of the job. It is part of the job. But pretending it costs nothing is how you burn people out.

### Things That Help

- **Acknowledge the stress.** After a major incident, say "that was rough" out loud. It was.
- **Rotate the burden.** If the same person is always the IC or always gets paged first, they'll eventually break. Spread the load.
- **Separate the incident from the person.** Blameless postmortems keep people honest about what happened instead of defensive about who caused it.
- **Rest after an incident.** If someone was up until 4 AM fixing a SEV1, don't expect them to function normally at 9 AM. The hospital doesn't schedule the ER doctor for a morning clinic after a night shift, and you shouldn't either.
- **Normalize not knowing.** The most dangerous moment in an incident is <span data-review="new">probably</span> when someone pretends to know the cause to look competent, instead of admitting uncertainty and continuing to investigate.

---
