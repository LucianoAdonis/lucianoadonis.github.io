---
title: After the Incident
description: Debriefs, continuous improvement, and what pandemics taught us about sustained crisis.
status: yellow
started: 2026-03-04
revised: 2026-03-04
book: incident-response
chapter: 4
---

## Debrief and Continuous Improvement

In a hospital, the post-operative review isn't optional. The surgical team gathers and goes over what happened, what went well, what went wrong and what they'd do differently, and that's how medicine gets better.

In tech we call it a postmortem, and too many teams skip it, especially when the fix was "obvious" or when people just want to move on.

### Running a Good Postmortem

A useful postmortem has three qualities: it's **blameless**, it's **specific**, and it **produces actions**.

**Blameless** keeps the focus on systems, processes and decisions, and people stay accountable without anyone being punished. When people fear blame they hide information, and the next incident is worse for it.

**Specific** means you name the actual failure chain. "The database went down" isn't a postmortem finding. "The connection pool was set to 50, traffic spiked to 3x normal, the pool exhausted, the health check started failing, and the load balancer pulled the instance" is a postmortem finding.

**Produces actions** means the postmortem ends with concrete, assigned, time-boxed follow-ups. Compare "we should monitor this better" with "Add a CloudWatch alarm for connection pool utilization above 80%, assigned to Maria, due by next Friday".

### The Five Whys (Used Carefully)

The "Five Whys" technique, asking "why?" again and again until you reach a root cause, is popular for good reason. It forces you past the surface.

It has a trap, though. Every chain of "why" can end at "because we didn't have enough people" or "because we didn't test enough," which is true but useless. Look for the deepest cause you can actually fix with a specific action.

- **Why did the service go down?** Because the database connection pool exhausted.
- **Why did the pool exhaust?** Because traffic tripled during a product launch.
- **Why did tripled traffic cause failure?** Because the pool was sized for normal traffic with no auto-scaling.
- **Why was there no auto-scaling?** Because it wasn't part of the original architecture and nobody revisited it.
- **Action:** Add connection pool auto-scaling. Add a load test to the launch checklist.

Stop when you reach something you can change.

---

## What Pandemics Taught Us

COVID-19 was, among many things, a stress test for incident response at scale, for hospitals and for every organization that had to operate under sustained crisis.

A few lessons translate directly to tech.

### Sustained Incidents Are Different

Most incident playbooks assume short, acute crises. Something breaks, you fix it, you go home. But some incidents last days, weeks or months: a slow data corruption, a rolling security breach, a dependency that degrades gradually.

Hospitals during the pandemic learned that you can't run an ER at surge capacity forever. People burn out, supplies run low, decisions get worse. Same in tech: if your team has been in "incident mode" for two weeks, their debugging, communication and judgment have declined whether they admit it or not.

**The fix:** plan for rotation during sustained incidents. Define shifts, set explicit rest periods, and accept that the response will be slower, because running everyone at 100% until they break is slower still.

### Communication Fatigue Is Real

During COVID, hospitals had to communicate constantly with staff, patients, the public and government agencies. At some point people stopped reading the updates. They weren't bad, there were just too many and the format never changed.

In tech this happens during long incidents. The 47th status update that says "still investigating" teaches nobody anything. If nothing has changed, say so in one line. If something has, lead with what's different.

### Preparedness Isn't Paranoia

The hospitals that handled the pandemic best had rehearsed pandemic scenarios before 2020, whatever their budget. They had plans, the plans were imperfect, and they were still far better than improvising from scratch.

In tech, have an incident response plan. Write it down, practice it, update it when it breaks. It won't survive first contact with reality, but you'll start from "adapt the plan" instead of "figure out what to do."

---

## Where the Analogy Breaks

Nobody dies when your API returns 500 errors, so the ER comparison only goes so far.

Triage, clear roles, rehearsed protocols, blameless review and emotional readiness still help whenever there's pressure, whether it's a cardiac arrest or a production outage at 2 AM.

<!-- source: 2026 batch (8126bde), restored -->
The goal isn't to turn your engineering team into a hospital. It's to borrow the parts that work: classify first, assign roles clearly, communicate relentlessly, practice before it matters, and learn from every incident so the next one goes better.

---
