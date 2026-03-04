---
layout: custom
title: "Team Roles"
description: "Everyone has a job. The trick is knowing yours before the page fires."
book: incident-response
chapter: 2
status: yellow
category: educational
---

{% include chapter-nav.html %}

---

To define roles for your "tech doctors" during an incident, it helps to look at how hospital teams are structured. Each role exists because someone figured out the hard way that it was needed.

---

# Incident Commander (Lead Doctor)

The overall leader during an incident. They make the final decisions, coordinate efforts across the team, and keep the broadest view of the situation. Nobody else can redirect resources mid-crisis — that is their job.

**Responsibilities:**
- Direct the response to major incidents
- Decide priorities and allocate resources — which team works on what
- Communicate with stakeholders: management, customers, other departments
- Keep the team focused on the most critical issues first

**In tech:** the Incident Commander is your tech lead or senior engineer during a system outage. They are not necessarily the one typing commands — they are the one making sure the right people are typing the right commands.

The most common mistake: the IC getting pulled into debugging. The moment the commander starts writing queries, nobody is coordinating. An IC who is debugging is a team without a leader.

---

# Subject Matter Experts (Specialist Doctors)

Engineers deeply specialized in specific areas — database management, networking, security, a particular microservice. When an incident falls within their domain, they take charge of diagnosing and resolving that specific piece.

**Responsibilities:**
- Fix the problem within their area of expertise
- Diagnose root cause within their area
- Implement fixes or guide generalists in applying solutions

**In tech:** during a database failure, the Database SME takes the lead in restoring service while working alongside others for system-wide recovery.

The thing about specialists is that they are expensive to context-switch. Pulling your database expert into a networking issue because "they are smart" wastes their expertise and delays the fix on the thing they actually know.

---

# Generalist Engineers (ER Nurses)

Like nurses who handle a range of tasks in the ER, generalist engineers work across multiple areas without specializing deeply in one. They assist specialists and keep non-critical areas running.

**Responsibilities:**
- Support specialists by handling secondary tasks
- Apply straightforward fixes to keep the system running
- Cover areas where they have working knowledge

**In tech:** a generalist might handle simple database maintenance, network reconfiguration, or server restarts to free up the specialist for the complex work.

Generalists are the backbone of incident response. Specialists get the headlines, but generalists keep the other 90% of the system from falling over while the specialist focuses on the one thing that broke.

---

# Triage Engineer (Triage Nurse)

The first responder. This engineer assesses incoming issues, classifies them by severity, and routes the right people to the most critical problems. They are often the first to see the incident report and determine urgency.

**Responsibilities:**
- Classify incidents based on priority (critical, high, medium, low)
- Assign incidents to the appropriate team members or specialists
- Monitor the overall system to spot issues early and escalate as needed
- Continuously reassess if new information surfaces or the situation changes

**In tech:** the Triage Engineer monitors system alerts and support tickets, routing them to the team that can solve the problem fastest. This is not a glamorous role, but without it, three engineers end up debugging the same alert while another one goes unnoticed.

---

# Communications Officer (ER Coordinator)

Owns communication with external teams, departments, and stakeholders during the incident. They push critical information outward and translate the situation for non-technical teams.

**Responsibilities:**
- Keep management, customers, and stakeholders informed of the incident's status
- Relay key information between the tech team and external teams (business, product, customer success)
- Shield the IC and the rest of the team from communication overhead

**In tech:** the Communications Officer updates the status page, informs leadership, and handles customer-facing messaging during a major outage. This lets the engineers focus on fixing the problem instead of answering Slack messages from six different channels.

A common failure mode: no designated communicator, so the IC ends up writing status updates, answering leadership questions, and trying to coordinate the fix at the same time. Something always drops.

---

# Support Engineer (Resident Doctor)

Less experienced but capable of handling important tasks under supervision. Like residents in a hospital, they assist with simpler tasks, learn from the specialists, and develop their skills in a high-pressure environment.

**Responsibilities:**
- Handle smaller, non-critical tasks that free up senior engineers
- Assist senior engineers by gathering data or running diagnostics
- Learn on the job by working closely with experienced engineers during real incidents

**In tech:** a junior support engineer might check logs, restart services, or monitor system health during an incident. This is where future specialists and ICs are made — by being in the room when it matters.

---

# Post-Incident Analyst (Post-Op Team)

Once the incident is over, this role analyzes what happened, what went right, and what went wrong. Their job is to turn the experience into changes that improve the next response.

**Responsibilities:**
- Conduct a detailed post-incident review
- Identify root cause and how it could have been prevented
- Propose changes to processes, tools, or training based on findings
- Organize a debrief session to gather team feedback

**In tech:** the Post-Incident Analyst leads the blameless postmortem, focusing on system improvements and process refinements. The word "blameless" is important. The moment someone gets blamed, everyone else stops sharing information, and the next incident will be worse.

---

# Knowing Your Role Before the Page Fires

The worst time to figure out who does what is during the incident. Every one of these roles should be assigned — or at least known — before the crisis. Not necessarily by name, but by agreement: "When things break, who triages? Who communicates? Who leads?"

If you do not have enough people for every role, that is fine. Most teams do not. But knowing which roles you are combining and which you are skipping is infinitely better than discovering it in real time.

---

{% include chapter-nav.html %}
