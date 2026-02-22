---
layout: custom
title: Troubleshooting Guide
description: Who knows, you may find something useful here!
status: orange
category: self-help
---

<img class="myImg" src="../images/headers/green-troubleshooting-repair-computer.png" alt="green-troubleshooting-repair-computer" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

>I don't know who you are. I don't know what you want. If you are looking for specific solutions I can tell you I don't have any, but what I do have are a very particular set of skills. Skills I have acquired over a very long career. Skills that make me a problem-solver for people like you.

Some approaches and strategies come so intuitively to me that I don't even think about them. I wanted to pull a more detailed explanation beyond just "my heart guides me."
I hope this will be useful to others.

---

⚠️ **I work on this on the side, so expect it to be incomplete for a while!** ⚠️

---

# Reacting to a Problem

>"We cannot choose our external circumstances, but we can always choose how we respond to them."
― Epictetus

Before you start touching everything, you need to diagnose the general situation. Ask yourself questions like:

| Main Question | Follow-up Questions | Expected Insights |
| -------------|:-------------------:|:-----------------:|
| How bad is it? | What is the affected environment? | Prod beats everything else. Dev can usually wait. Knowing the environment sets the urgency before you touch anything. |
| | Does this impact team delivery? | If yes, loop in management before they hear it from someone else. The update can be brief, but the silence is worse. |
| | Can we live with the issue? | Sets whether this is a stop-everything fix or a document-and-schedule. Not every issue needs to be resolved right now. |
| What could be a possible cause? | Naming | Unless you are prepared for the unexpected and have ways to avoid depending on the names of resources, some changes may cause disruption, as they could prevent you from accessing the right resource. |
| | Paths | Hardcoded paths are fragile. Changing a folder name, moving a volume, or restructuring a container can break things silently with no error that points directly to the cause. |
| | Versions | A [minor](https://docs.npmjs.com/about-semantic-versioning#:~:text=Backward%20compatible%20new%20features) update may not cause issues, but you never know. Best to be sure. |
| | Policies | IAM policies and security rules change quietly. A permission that worked yesterday may have been tightened by someone else without a deployment or announcement. |
| | Rules | Firewall rules, routing rules, and load balancer rules can be modified without touching any code. These are easy to overlook because nothing in the application changed. |
| | Making plans on a Friday | Horrible idea if you want a relaxed weekend. |

Reasoning through the scope and range of the issue will reduce the stress caused by the abrupt interruption of your day. And by knowing what it actually is, you can at least prepare some talking points for management while you figure things out.

# Preemptive Strategies

You can think of this as panicking ahead of time so you will know what to do when things go wrong.
Preparation is key, and it is normal to ignore things that are "working" and don't add value to day-to-day work. But look at it this way: you are a prepper, and that will pay off eventually.

## Negative Thinking

>"Expect the best, prepare for the worst." - Muhammad Ali Jinnah

Considering worst-case scenarios, like making the issue worse or the existential dread of a 2 AM escalation, is a powerful motivator to set boundaries when troubleshooting. If you find yourself making things worse, it is a clear sign that those boundaries could have prevented the situation. The consequences of not setting them can be severe.

Examples of sensible limits:
- Stop troubleshooting after 11 PM unless it is a P1.
- Only restart services if you are confident they can come back up cleanly.
- Do not remove resources you are unsure the IaC can reconstruct.

Some of these may seem counterintuitive, but tech debt makes our work more exciting and, above all, more dangerous. Discovering those flaws in a critical moment will not make your life easier.

And if you do mess up despite all that, that is a great story for a barbecue someday.

## Suggested Questions

If your anxiety is not already working overtime, a good use of calm time is understanding the dependencies of the applications and services you work on.

You should be able to answer questions like:

- What are the teams we depend on or who depend on us?
- What happens if any of those teams has an outage?
- Do we have graceful degradation for critical dependencies?
- What are our alerts and metrics, and do they cover the right things?
- What do our endpoints tell us about the state of the system?

As a side note: I always thought Chaos Engineering was about deliberately breaking things and hardening them. But that is only about 20% of it. The rest is about learning your systems and their dependencies, because in large architectures, many components are not under your control.

## Ask Around and Find Out

>"When you stare into the abyss, the abyss doubles it and gives it to the next person." - TikTok Nietzsche

Trying to figure it out alone is rarely worth it. It may look cool, but it is usually better to rely on others, like:

- **QA**: They know what can go wrong internally and, in most cases, between dependencies.
- **Dev**: They have nightmare stories. They may not recall everything immediately, but their instincts will remember the experience.
- **Managers**: They are haunted by technical debt and past incidents, so they can give you insight into both the history and the risks.

Everyone will have a piece of information that helps you uncover the mystery, and by that, I mean the tech debt.

Be aware that sometimes team members will not have all the answers. It may be that they did not work on that part, or as often happens in technology, things change fast and people remember parts of multiple different architectures.

This is a long way of saying: if they do not know, that is understandable. If you do not know anything about the system you own, and that is worth fixing.

Remember:

- Be patient.
- Be reasonable.
- Respete para que lo respeten.

## Responsibilities

This may not apply to every company, but it shares common patterns when working with large teams. A useful mental chain to follow is:

```
Infrastructure > Development > Additional Teams > Dependencies > Blame the Cloud Provider
```

We will revisit this in the [Proper Escalation](#proper-escalation) section. But before jumping into each type, let's talk techniques.

# Techniques

>Where should I start? What can I check? Why me? Why on a Friday? - Engineer

It is normal to question where to begin. Without a structured approach, you may find yourself wandering aimlessly, which wastes time and adds stress. As you grow in your career, having a clear direction for tackling issues becomes one of your most valuable skills.

I will eventually go deeper into each of these, but consider the following as a suggested approach.

## Quick Methods

Before anything else, establish two things:

- **Time Correlation**: When exactly did this start? Pull up deployment history, check what cron jobs ran around that time, look at certificate expiry dates. Problems rarely appear from nowhere. Most of the time something changed, and the timestamp points you directly at it.
- **Reproduce It First**: Confirm you can make the problem happen consistently before you change anything. If you cannot reproduce it reliably, you have no way to verify whether a fix worked. "It seemed to go away" is not a resolution. If the problem is intermittent, find the conditions that trigger it.

If everything has been quiet with no recent changes, start here:

- **Comparison**: Compare against another environment that is working. Differences between the two usually point to the cause.
- **Contrast**: If you do not have a working equivalent, look at another application with similar conditions: another region, another tenant, or a staging environment.
- **Reading Logs**: Yes, this feels obvious, but it is often skipped. Everything has logs, though they are not always verbose. You may need to increase the log level to get useful information.
- **Verify Assumptions**: Most debugging sessions go wrong because of an assumption that was never checked. "The service is running" — verify it. "The config is loading from the right file" — check the path. "I am connected to the right environment" — confirm. One wrong assumption at the start can waste hours.

If you are in the middle of implementation or testing, use the classic approach:

- **Read the Error**: Read the full message: not just the first line. The error usually tells you the file, the line, and the reason for failure. Many engineers skip this step and then spend hours looking for answers that were already in the output.
- **Google the Error**: Copy the exact error string, remove environment-specific parts like hostnames or IDs, and search with the technology name included. Stack Overflow is your friend, but pay attention to the date of the answers: some solutions are years old and may not apply to current versions.
- **Accept the Error**: Sometimes an error is a known warning or a non-blocking issue. Before investing more time, verify that what you are seeing is actually causing the problem and not just noise.
- **Live with the Error**: This is the technical debt option. Document it, create a ticket, and move on. Not every error needs to be fixed right now, especially if it has existed for months without causing impact.
- **Change One Thing at a Time**: When testing a fix, change exactly one variable, observe the result, then decide the next step. Making multiple changes simultaneously means you cannot tell what helped or what introduced a new problem. Under pressure this feels slow. It is actually faster.

## Long Methods

If the problem does not seem to be going anywhere soon, you will definitely need to try any or all of the following:

- **Mock**: Sometimes being right is not enough. You need to demonstrate that the system is working correctly by mimicking part of the setup. For example, spinning up a container that prints its environment variables proves that configuration is being loaded correctly, independent of the application behavior.
- **Rule Out**: Start from what is working and progressively narrow the range of potential causes, services, or dependencies. Each thing you rule out makes the remaining possibilities clearer.
- **The Scientific Method**: A reliable approach for issues that persist beyond two hours. Formulate a hypothesis, test it, and evaluate the result. This keeps troubleshooting systematic instead of random.
  - This will take time, but it allows you to observe and compare different cases methodically.
  - Always take notes. Certain behaviors only appear under specific conditions, and in the heat of an incident it is very easy to forget a step you already tried or miss a pattern across multiple failures.

## Understanding Is Half the Battle

- **Taking Notes**: Document as you go: what you tried, what changed, what the result was. This prevents repeating the same steps twice, helps when you need to hand off to someone else, and gives you material for a post-mortem or runbook later. A messy note is better than no note.
- **Making Diagrams**: A quick sketch of how components interact will often reveal where the problem might be. You do not need a formal diagram: a whiteboard photo is fine. Focus on data flow and dependencies. It is also easier for a new pair of eyes to understand at a glance.
- **Rubber Duck Debugging**: Explain the problem out loud. To a colleague, to a stranger, to a rubber duck on your desk. The act of putting into words what you have been thinking implicitly forces you to confront assumptions you have been glossing over. Very often the answer surfaces before you finish the explanation. If no one is around, write it in a message you do not send.

Making the process easy to follow is considerate to anyone who joins mid-way. There is nothing worse than feeling like you are starting from scratch in an ongoing incident. If things are truly at a dead end, fresh perspective is welcome, but only if there is enough context to get up to speed quickly.

# Proper Escalation

Knowing when and how to escalate is a skill in itself. The goal is not to cover yourself, but to get the right people involved before the situation gets worse.

## Infrastructure

Start here when the application was working before and nothing in the code has changed. Things to check:

- Network connectivity, DNS resolution, firewall rules
- SSL/TLS certificate expiry
- IAM roles and permissions (something often changes here quietly)
- Resource availability: disk space, memory, CPU, connection pool limits
- Recent infrastructure changes: new deployments, Terraform runs, autoscaling events
- Cloud provider status pages (yes, they do go down)

If infrastructure is clean, move on.

## Development

If the infra layer is not the problem, look at the application. Things to check:

- Environment variables and configuration files
- Recent code changes: `git log` and `git diff` are your friends here
- Dependency versions and whether something was updated automatically
- Database migrations that may have run (or failed)
- Feature flags that may have been toggled
- Error rates and specific error messages from application logs

## Dependencies

When neither infrastructure nor code is the culprit, look outward. Things to check:

- Third-party API and SaaS status pages
- Authentication tokens: check expiry dates on API keys, certificates, and service accounts
- Rate limits: you may have hit a quota silently
- Breaking changes in external contracts or schema updates
- SDK or library versions that were updated by a dependency

## Other Stuff

The catch-all category. Sometimes the problem is not where you expect:

- The monitoring is broken, not the system: verify alerts with a manual check
- A scheduled job ran at midnight and left things in a bad state
- The issue has always existed but was never noticed until now
- Two teams changed something simultaneously and the combination broke things
- The definition of "working" differs between teams (always worth clarifying)

## Experience

>"If you're the smartest person in the room, you're in the wrong room." - Richard P. Feynman

There is no shortcut here. Every incident you work through adds to your pattern library. The engineer who has seen a certificate expire three times will spot the fourth one before the monitoring does. The one who debugged a race condition at 2 AM will recognize its symptoms in a code review.

Experience is not just about fixing things faster. It is about knowing which questions to ask first, which assumptions to challenge, and when to stop troubleshooting and escalate.

## Share

>"When people put you up on a pedestal, don't come off it acting humble. Stay up there, because if they put you there, that's showing you how high they can see. Stay there and pull them up." - Victor Wooten

Document your findings. Write runbooks. Create a post-mortem even for incidents no one else noticed. Do not be the single point of failure who holds all the critical knowledge in their head.

Sharing knowledge is what turns a good engineer into a great colleague. The next person to face a similar problem might be you, six months from now, at 1 AM, with no memory of how you solved it the first time.

# Plan B

When nothing is working and pressure is mounting, resist the urge to keep trying random things. That is how small incidents become big ones.

- **Rollback**: Revert to the last known good state. Troubleshoot in a non-production environment once service is restored. A slow rollback beats a prolonged outage.
- **Feature flag or circuit breaker**: Disable the broken feature while the rest of the system stays up. This buys time without a full rollback.
- **Workaround**: A temporary fix to restore service, even imperfectly. Something that works at 80% is better than nothing while you work on the real fix.
- **Communicate**: Keep stakeholders updated. "We are investigating and have no ETA" is better than silence. Set a regular cadence for updates even if there is nothing new to report.
- **Pair up**: If you have been staring at the same problem for too long, bring in a colleague. Fresh eyes and your context together are usually faster than either alone.

Sometimes the right Plan B is admitting you need more time, more information, or more people. Knowing when to say that is not a weakness. It is good engineering.

# Random Conclusions

After enough incidents, patterns emerge. Before going deep into a complex investigation, always check the classics first:

- It was the cache. (Clear it first, ask questions later.)
- It was DNS. (It is always DNS.)
- It was the certificate. (Expired last Tuesday. Nobody noticed.)
- It was the permissions. (Someone updated the IAM policy and did not mention it.)
- It works in dev. (And that is the last time anyone saw it work correctly.)
- We didn't even need to do this in the first place. (The feature was never used in production.)
