---
title: Troubleshooting
description: Who knows, you may find something useful here!
status: orange
started: 2024-07-26
revised: 2026-02-21
shelf: career
spine:
  hue: 140
  glyph: wrench
elsewhere:
  name: Incident Runbook
  url: https://runbook.neorgon.com/
  relation: superseded
  note: The method grew into a full runbook with worked examples.
plate: ../../assets/images/headers/green-troubleshooting-repair-computer.png
plateAlt: Three tiny orange-suited construction figures and a roadworks sign standing on a green circuit board among the chips and capacitors
---

>I don't know who you are. I don't know what you want. If you are looking for specific solutions I can tell you I don't have any, but what I do have are a very particular set of skills. Skills I have acquired over a very long career. Skills that make me a problem-solver for people like you.

Some approaches and strategies come so intuitively to me that I don't even think about them. I wanted to pull a more detailed explanation beyond just "my heart guides me."
I hope this will be useful to others.

---

⚠️ **I work on this on the side, so expect it to be incomplete for a while!** ⚠️

---

## Reacting to a Problem

>"We cannot choose our external circumstances, but we can always choose how we respond to them."
― Epictetus

Before you start touching everything, you need to diagnose the general situation. Ask yourself questions like:

| Main Question | Follow-up Questions | Expected Insights |
| -------------|:-------------------:|:-----------------:|
| How bad is it? | What is the affected environment? | Prod beats everything else. Dev can usually wait. Knowing the environment sets the urgency before you touch anything. |
| | Does this impact team delivery? | If yes, loop in management before they hear it from someone else. |
| | Can we live with the issue? | Sets whether this is a stop-everything fix or a document-and-schedule. Not every issue needs to be resolved right now. |
| What could be a possible cause? | Naming | Unless you're prepared for the unexpected and have ways to avoid depending on the names of resources, some changes may cause disruption, as they could prevent you from accessing the right resource. |
| | Paths | Hardcoded paths are fragile. Changing a folder name, moving a volume, or restructuring a container can break things silently with no error that points directly to the cause. |
| | Versions | A [minor](https://docs.npmjs.com/about-semantic-versioning#:~:text=Backward%20compatible%20new%20features) update may not cause issues, but you never know. Best to be sure. |
| | Policies | IAM policies and security rules change quietly. A permission that worked yesterday may have been tightened by someone else without a deployment or announcement. |
| | Rules | Firewall rules, routing rules, and load balancer rules can be modified without touching any code. These are easy to overlook because nothing in the application changed. |
| | Make plans | Horrible idea if you want a relaxed Friday. |

Reasoning through the scope and range of the issue will reduce the stress caused by the abrupt interruption of your day. And by knowing what it actually is, you can at least prepare some excuses for upper management while you figure stuff out.

## Preemptive Strategies

You can think of this as panicking ahead of time so you will know what to do when things go wrong.
Preparation is key, and it's normal to ignore things that are "working" and don't add value to day-to-day work. But look at it this way: you're a prepper, and that will pay off eventually.

### Negative Thinking

>"Expect the best, prepare for the worst." - Muhammad Ali Jinnah

Considering worst-case scenarios, like making the issue worse or even losing your job, is a powerful motivator to set boundaries when troubleshooting. If you find yourself making things worse, it's a clear sign that those boundaries could have prevented it, and the consequences of not setting them can be severe.

Examples of sensible limits:
- Stop troubleshooting after 11 PM unless it's a P1.
- Only restart services if you're confident they can come back up cleanly.
- Don't remove resources you're unsure the IaC can reconstruct.

Some of these may seem counterintuitive, but tech debt makes our work more exciting and, above all, more dangerous. Discovering those flaws in a critical moment won't make your life easier.

And if you do mess up despite all that, that's an exciting story for a barbecue or to tell your dates.

### Suggested Questions

If your anxiety isn't already working overtime, I'd advise starting to understand the dependencies of the applications and services you work on.

You should be able to answer questions like:

- What are the teams we depend on or who depend on us?
- What happens if any of those teams decides to explode their systems?
- Do we have graceful degradation for critical dependencies?
- What are our alerts and metrics, and do they cover the right things?
- What do our endpoints tell us about the state of the system?

As a side note: I always thought Chaos Engineering was about deliberately breaking things and hardening them. But that's only about 20% of it. The rest is about learning your systems and their dependencies, because in large architectures, many components aren't under your control.

### Question Around and Find Out

>"When you stare into the abyss, the abyss doubles it and gives it to the next person." - TikTok Nietzsche

Trying to figure it out alone is rarely worth it. It may look cool, but it's usually better to rely on others, like:

- **QA**: They know what can go wrong internally and, in most cases, between dependencies.
- **Dev**: They have nightmare stories. They may not recall everything immediately, but their hearts will remember the experience.
- **Managers**: They are haunted by technical debt and past incidents, so they can give you insight into both the history and the risks.

Everyone will have a piece of information that helps you uncover the mystery, and by that, I mean the tech debt.

Be aware that sometimes team members won't have all the answers. It may be that they didn't care, or as it usually happens in technology, things stagnate or move fast, so they will probably remember parts of both architectures.

This is a convoluted way to say: if they don't know, that's okay for them. If you don't, WHAT ARE YOU DOING!?

Remember:

- Be patient.
- Be reasonable.
- Respete para que lo respeten.

### Responsibilities

This may not apply to every company, but it shares common patterns when working with large teams. I follow this pattern:

```
Infrastructure > Development > Additional Teams > Dependencies > Blame the Cloud Provider
```

I'll revisit this in the [Proper Escalation](#proper-escalation) section. But before jumping into each type, let's go in a different direction first: techniques.

## Techniques

>Where should I start? What can I check? Why me? Why on a Friday? - Engineer

It's normal to question where to begin. Without a structured approach, you may find yourself wandering aimlessly, which wastes time and adds stress. As you grow in your career, having a clear direction for tackling issues becomes one of your most valuable skills.

I will eventually go deeper into each of these, but consider the following as a suggested approach.

### Quick Methods

If everything has been quiet with no recent changes, I'd suggest this:

- **Comparison**: Compare against another environment that's working. Differences between the two usually point to the cause.
- **Contrast**: If you don't have a working equivalent, look at another application with similar conditions, like another region or a staging environment.
- **Reading Logs**: I know, this is a last resort, but everything has logs, though they aren't always verbose. You may need to increase the log level to get useful information.

If you're in the middle of implementation or testing, use the classic approach:

- **Read the Error**: The whole message, not just the first line.
- **Google the Error**: Copy the exact error string and search with the technology name included.
- **Accept the Error**: Sometimes it's a known warning and not the actual problem.
- **Live with the Error**: Document it, create a ticket and move on. Not every error needs to be fixed right now.

### Long Methods

If the problem doesn't seem to be going anywhere soon, you will definitely need to try any or all of the following:

- **Mock**: Sometimes being right isn't enough. You need to demonstrate that the system is working correctly by mimicking part of the setup. For example, spinning up a container that prints its environment variables proves that configuration is being loaded correctly, independent of the application behavior.
- **Rule Out**: Start from what is working and progressively narrow the range of potential causes, services, or dependencies. Each thing you rule out makes the remaining possibilities clearer.
- **The Scientific Method**: A reliable approach for issues that persist beyond two hours. Formulate a hypothesis, test it, and evaluate the result. This keeps troubleshooting systematic instead of random.
  - This will take time, but it allows you to observe and compare different cases methodically.
  - Always take notes. Certain behaviors only appear under specific conditions, and in the heat of an incident it's very easy to forget a step you already tried or miss a pattern across multiple failures.

### Understanding Is Half the Battle

- **Taking Notes**: Write down what you tried and what changed, so you don't repeat steps and can hand off to someone else.
- **Making Diagrams**: A quick sketch of how components interact will often reveal where the problem might be. A whiteboard photo is fine.
- **Rubber Duck Debugging**: Explain the problem out loud, to a colleague or a rubber duck on your desk.

Making the process easy to follow is considerate to anyone who joins mid-way. There's nothing worse than feeling like you're starting from scratch in an ongoing incident. If things are truly at a dead end, fresh perspective is welcome, but only if there's enough context to get up to speed quickly.

## Proper Escalation

<div data-review="new">

This part is still being written. The [Incident Runbook](https://runbook.neorgon.com/) covers the checklists for each layer.

</div>

### Experience

>"If you're the smartest person in the room, you're in the wrong room." - Richard P. Feynman

Experience pays off in more than speed: you learn which questions to ask first, which assumptions to challenge, and when to stop troubleshooting and escalate.

### Git Gud

<!-- source: .forge/corpus-2025/pages/troubleshooting.md -->
>"I've wrestled with alligators, I've tussled with a whale. I done handcuffed lightning And throw thunder in jail (...)" - Muhammad Ali

<!-- source: .forge/corpus-2025/pages/troubleshooting.md -->
Experience is what will make you proud of yourself. There isn't a magic trick that will solve all problems; instead, there are tools and techniques that can help you react to things and act accordingly.

### Share

>"When people put you up on a pedestal, don't come off it acting humble. Stay up there, because if they put you there, that's showing you how high they can see. Stay there and pull them up." - Victor Wooten

Document your findings. Write runbooks. Create a post-mortem even for incidents no one else noticed. Don't be the single point of failure who holds all the critical knowledge in their head.

## Plan B

Sometimes the right Plan B is admitting you need more time, more information, or more people.

## Random Conclusions

After enough incidents, patterns emerge. Before going deep into a complex investigation, always check the classics first:

- It was the cache.
- It was DNS. (It's always DNS.)
- It was the certificate.
- It was the permissions.
- It works in dev.
- We didn't even need to do this in the first place.
