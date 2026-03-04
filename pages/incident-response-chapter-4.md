---
layout: custom
title: "After the Incident"
description: "The incident is over. The learning has not started yet."
book: incident-response
chapter: 4
status: yellow
category: educational
---

{% include chapter-nav.html %}

---

# Debrief and Continuous Improvement

In a hospital, the post-operative review is not optional. The surgical team gathers, reviews what happened, what went well, what went wrong, and what they would do differently. This is not punishment — it is how medicine gets better.

In tech, we call it a postmortem. And too many teams skip it, especially when the fix was "obvious" or when people just want to move on.

## Running a Good Postmortem

A useful postmortem has three qualities: it is **blameless**, it is **specific**, and it **produces actions**.

**Blameless** does not mean "nobody is accountable." It means the focus is on systems, processes, and decisions — not on finding someone to punish. When people fear blame, they hide information. When they hide information, the next incident is worse.

**Specific** means you name the actual failure chain, not a vague summary. "The database went down" is not a postmortem finding. "The connection pool was set to 50, traffic spiked to 3x normal, the pool exhausted, the health check started failing, and the load balancer pulled the instance" is a postmortem finding.

**Produces actions** means the postmortem ends with concrete, assigned, time-boxed follow-ups. "We should monitor this better" is not an action. "Add a CloudWatch alarm for connection pool utilization above 80%, assigned to Maria, due by next Friday" is an action.

## The Five Whys (Used Carefully)

The "Five Whys" technique — asking "why?" iteratively until you reach a root cause — is popular for good reason. It forces you past the surface.

But it has a trap: if you are not careful, every chain of "why" ends at "because we did not have enough people" or "because we did not test enough," which is true but useless. The goal is to find the deepest cause you can actually fix with a specific action.

- **Why did the service go down?** Because the database connection pool exhausted.
- **Why did the pool exhaust?** Because traffic tripled during a product launch.
- **Why did tripled traffic cause failure?** Because the pool was sized for normal traffic with no auto-scaling.
- **Why was there no auto-scaling?** Because it was not part of the original architecture and nobody revisited it.
- **Action:** Add connection pool auto-scaling. Add a load test to the launch checklist.

Stop when you reach something you can change.

---

# What Pandemics Taught Us

COVID-19 was, among many things, a stress test for incident response at scale — not just for hospitals but for every organization that had to operate under sustained crisis conditions.

A few lessons translate directly to tech:

## Sustained Incidents Are Different

Most of our incident playbooks assume short, acute crises. Something breaks, you fix it, you go home. But some incidents last days, weeks, or months: a slow data corruption, a rolling security breach, a dependency that degrades gradually.

Hospitals during a pandemic learned that you cannot run an ER at surge capacity indefinitely. People burn out. Supplies run low. Decision quality degrades. The same happens in tech: if your team has been in "incident mode" for two weeks, the quality of their debugging, their communication, and their judgment has declined whether they admit it or not.

**The fix:** plan for rotation during sustained incidents. Define shifts. Set explicit rest periods. Accept that the response will be slower because the alternative — running everyone at 100% until they break — is slower still.

## Communication Fatigue Is Real

During COVID, hospitals had to communicate constantly — to staff, patients, the public, government agencies. At some point, people stopped reading the updates. Not because the updates were bad, but because there were too many and the format never changed.

In tech, this happens during long incidents. The 47th status update that says "still investigating" teaches nobody anything. If the situation has not changed, say so in one line. If it has changed, lead with what is different. Respect people's attention.

## Preparedness Is Not Paranoia

The hospitals that handled the pandemic best were not the ones with the most resources. They were the ones that had rehearsed pandemic scenarios before 2020. They had plans. The plans were imperfect, but they were infinitely better than improvising from scratch.

In tech, the equivalent is: have an incident response plan. Write it down. Practice it. Update it when it breaks. The plan will not survive first contact with reality, but having one means you start from "adapt the plan" instead of "figure out what to do."

---

# Closing Thought

The analogy between an ER and a tech team breaks down eventually. Nobody dies when your API returns 500 errors. The stakes are different.

But the principles — triage, clear roles, rehearsed protocols, blameless review, emotional readiness — are not about stakes. They are about working well under pressure. And that applies whether the pressure is a cardiac arrest or a production outage at 2 AM.

The goal is not to turn your engineering team into a hospital. It is to borrow the parts that work: classify first, assign roles clearly, communicate relentlessly, practice before it matters, and learn from every incident so the next one goes better.

---

{% include chapter-nav.html %}
