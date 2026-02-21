---
layout: custom
title: Architecture Decision Record Example
description: A worked example using the 5-section format.
book: adrs
chapter: 1
status: yellow
category: educational
---

---

<img class="myImg" src="../images/headers/bluish-disney-the-beauty-and-the-beast-library.png" alt="the-beauty-and-the-beast" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

Below is a worked example using the structure from the main page. The scenario is a team deciding how to handle a scaling problem in their backend. Read the annotations in italics to understand what each section is actually doing.

---

# ADR-001: Move from vertical scaling to a service-based split for the checkout flow

---

## Status

Accepted — 2024-08-14

Reviewed by: Platform lead, two senior engineers, product manager.

---

## Context

Our monolithic API handles all customer-facing operations. Over the last two quarters, checkout-related endpoints have been responsible for 80% of our response time degradation during peak hours. The rest of the system runs fine.

Vertical scaling (larger instances) has been our go-to fix for the past 18 months. We have maxed out the instance tier our cloud provider offers without a significant cost increase, and the gains from the last two upgrades did not hold past the first major traffic spike.

The team is small (six engineers), we run on Node.js, and we have no existing experience operating distributed systems. Those constraints matter for evaluating options.

---

## Options Considered

**Option 1: Continue vertical scaling**

Upgrade to the next instance tier and re-evaluate in six months.

Considered because it requires no architecture changes and zero learning curve. Rejected because we have already hit diminishing returns on this approach, and the next tier roughly doubles our infrastructure cost for an estimated 15–20% improvement that will not survive the next traffic spike.

**Option 2: Full microservices extraction**

Break the entire monolith into independently deployable services.

Considered because it would eliminate the problem at the root. Rejected because the scope is too large relative to team size. Splitting the entire system while keeping it running would consume most of our capacity for 6–12 months, and the operational overhead of running a distributed system is something we have no experience managing. The problem we have is specific to checkout, not the whole application.

**Option 3: Extract the checkout flow as a standalone service**

Pull only the checkout-related handlers, their direct dependencies, and the data they own into a separate service. Everything else stays in the monolith.

This is a much smaller scope than full microservices. It directly addresses the bottleneck without taking on the full cost of option 2. The risk is that the checkout service will need to call back into the monolith for some shared operations (user sessions, product catalog), which adds network hops we do not currently have.

---

## Decision

We are going with option 3.

The checkout flow accounts for a disproportionate share of our scaling problem and is already relatively well-bounded in the codebase. Extracting it gives us the scaling relief we need without committing the team to a multi-month architectural overhaul.

The inter-service calls back to the monolith are a real cost. We are accepting this tradeoff because the alternative (keeping everything in the monolith) is unsustainable, and the full extraction (option 2) is not feasible at our current team size. We will keep a list of the cross-service dependencies and treat them as technical debt to clean up in future iterations.

---

## Consequences

**What gets better:**
- Checkout can be scaled independently during peak hours without scaling the entire application.
- Deployments to the checkout service are isolated, reducing the risk of unrelated changes affecting it.

**What gets harder:**
- We are introducing network calls between services for the first time. Latency, timeouts, and retry logic now need to be handled explicitly.
- Debugging a failed checkout now involves logs across two services.
- The team needs to learn how to operate, monitor, and deploy a second service.

**Conditions that need to hold:**
- The cross-service API contract between checkout and the monolith must be treated as a formal interface, not an internal call. Any breaking changes require versioning.
- This ADR should be revisited if the team size grows enough to take on option 2, or if the cross-service calls become a source of reliability problems.
