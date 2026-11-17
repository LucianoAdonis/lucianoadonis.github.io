---
title: Team Roles
description: "From Incident Commander to Post-Incident Analyst: everyone has a job."
status: yellow
started: 2026-03-04
revised: 2026-03-04
book: incident-response
chapter: 2
---

Who does what when the page fires? In the hospital nobody had to ask. To define roles for your "tech doctors" during an incident, it helps to look at how hospital teams are structured.

---

## Incident Commander (Lead Doctor)

The overall leader during an incident. They make the final decisions, coordinate the team and keep the broadest view of the situation. Nobody else can redirect resources mid-crisis, that's their job.

**Responsibilities:**
- Direct the response to major incidents
- Decide priorities and allocate resources, meaning which team works on what
- Communicate with stakeholders: management, customers, other departments
- Keep the team focused on the most critical issues first

**In tech:** the Incident Commander is your tech lead or senior engineer during a system outage. Their job is making sure the right people are typing the right commands.

The most common mistake is the IC getting pulled into debugging. The moment the commander starts writing queries, nobody is coordinating.

---

## Subject Matter Experts (Specialist Doctors)

Engineers deeply specialized in one area: database management, networking, security, a particular microservice. When an incident falls in their domain, they take charge of diagnosing and resolving that piece.

**Responsibilities:**
- Fix the problem within their area of expertise
- Diagnose the root cause within their area
- Implement fixes or guide generalists in applying them

**In tech:** during a database failure, the Database SME leads the restoration while working alongside others for the system-wide recovery.

Specialists are expensive to context-switch. Pulling your database expert into a networking issue because "they're smart" wastes their expertise and delays the fix on the thing they actually know.

---

## Generalist Engineers (ER Nurses)

Like nurses who handle a range of tasks in the ER, generalist engineers work across several areas without going deep in one. They assist the specialists and keep the non-critical areas running.

**Responsibilities:**
- Support specialists by handling secondary tasks
- Apply straightforward fixes to keep the system running
- Cover areas where they have working knowledge

**In tech:** a generalist might handle simple database maintenance, network reconfiguration or server restarts to free the specialist for the complex work.

Generalists are <span data-review="new">probably</span> the backbone of incident response. Specialists get the headlines, but generalists keep the rest of the system from falling over while the specialist focuses on the one thing that broke.

---

## Triage Engineer (Triage Nurse)

The first responder. This engineer assesses incoming issues, classifies them by severity and routes the right people to the most critical problems. They're often the first to see the incident report and decide how urgent it is.

**Responsibilities:**
- Classify incidents by priority (critical, high, medium, low)
- Assign incidents to the right team members or specialists
- Monitor the overall system to spot issues early and escalate as needed
- Reassess when new information surfaces or the situation changes

**In tech:** the Triage Engineer watches system alerts and support tickets and routes them to the team that can solve the problem fastest. It isn't a glamorous role, but without it three engineers end up debugging the same alert while another one goes unnoticed.

---

## Communications Officer (ER Coordinator)

Owns communication with external teams, departments and stakeholders during the incident. They push critical information outward and translate the situation for non-technical people.

**Responsibilities:**
- Keep management, customers and stakeholders informed of the incident's status
- Relay key information between the tech team and external teams (business, product, customer success)
- Shield the IC and the rest of the team from communication overhead

**In tech:** the Communications Officer updates the status page, informs leadership and handles customer-facing messaging during a major outage. That lets the engineers fix the problem instead of answering Slack messages from six different channels.

A common failure: no designated communicator, so the IC ends up writing status updates, answering leadership and coordinating the fix at the same time. Something always drops.

---

## Support Engineer (Resident Doctor)

Less experienced but capable of important tasks under supervision. Like residents in a hospital, they take on simpler tasks, learn from the specialists and grow their skills under pressure.

**Responsibilities:**
- Handle smaller, non-critical tasks that free up senior engineers
- Assist senior engineers by gathering data or running diagnostics
- Learn on the job by working next to experienced engineers during real incidents

**In tech:** a junior support engineer might check logs, restart services or monitor system health during an incident. This is where future specialists and ICs are made, by being in the room when it matters.

---

## Post-Incident Analyst (Post-Op Team)

Once the incident is over, this role looks at what happened, what went right and what went wrong. Their job is to turn the experience into changes that improve the next response.

**Responsibilities:**
- Conduct a detailed post-incident review
- Identify the root cause and how it could have been prevented
- Propose changes to processes, tools or training based on the findings
- Organize a debrief session to gather team feedback

**In tech:** the Post-Incident Analyst leads the blameless postmortem, focused on system improvements and process refinements. The word "blameless" matters. The moment someone gets blamed, everyone else stops sharing information, and the next incident will be worse.

---

## Knowing Your Role Before the Page Fires

The worst time to figure out who does what is during the incident. Every one of these roles should be assigned, or at least known, before the crisis. Not necessarily by name, but by agreement: "When things break, who triages? Who communicates? Who leads?"

If you don't have enough people for every role, that's fine, most teams don't. Just know which roles you're combining and which you're skipping, because finding out in real time is way worse.

---
