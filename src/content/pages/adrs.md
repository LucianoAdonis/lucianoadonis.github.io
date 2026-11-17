---
title: Why ADRs Matter and How to Use Them
description: Your future self will be grateful.
status: yellow
started: 2024-08-21
revised: 2026-02-21
shelf: tools
spine:
  hue: 0
  glyph: scroll
plate: ../../assets/images/headers/bluish-disney-the-beauty-and-the-beast-library.png
plateAlt: Belle and the Beast standing small in the middle of a huge animated library, with curved staircases and shelves of books rising on every side
---

>"To plant a garden is to believe in tomorrow." – Audrey Hepburn

---

## Why Use ADRs?

<!-- source: pages/adrs.md @ 6704d35 -->
Picture this: You're troubleshooting a critical system, trying to decipher why someone chose that specific architecture or tech stack. You're digging through layers of code and config files, muttering under your breath, and wishing you could ping the minds of your predecessors to ask, "What was the rationale here?"

That's where ADRs come in. Architecture Decision Records write down a decision, its context, and why you made it.

ADRs give you a few benefits in enterprise settings:

- **Collective Knowledge**: preserve the context and reasoning behind major technical decisions, so new people can see why as the organization grows.
- **Cross-Team Alignment**: keep multiple teams and departments consistent.
- **Informed Decision Making**: encourage thorough consideration of the options and their enterprise-wide impact.

<!-- source: pages/adrs.md @ 6704d35 -->
So, next time you're tempted to skip writing an ADR, remember: your future self (or the team that inherits your project) will be immensely grateful.

---

## Structure

<!-- source: pages/adrs.md @ 6704d35 -->
Look, I've seen more ADR templates than I've had hot dinners. But after years in the trenches, I've fine-tuned a format that actually works. It's lean, mean, and gets the job done. Here's the breakdown:

1. Problem Statement
2. Considered Options
3. Proposed Architecture
4. Impact Analysis
5. Implementation Plan
6. Risks and Mitigations
7. Compliance and Governance

<div data-review="new">

Each section below has the questions to answer and a short example. For a full ADR written end to end, see the [worked example](/pages/adrs-example).

</div>

---

## Problem Statement

Say what's broken and why the business cares.

Key points to consider:
- **Context**: what business or technical factors led to this decision point?
- **Objectives**: what specific, measurable goals are you aiming to achieve?
- **Scope**: is this a new implementation or an enhancement of an existing system?
- **Stakeholders**: which teams or business units will be affected?

Example:
```
Our current monolithic application is struggling to scale with our growing user base. Response times have increased by 40% in the last quarter, and deploying new features has become a time-consuming process, often requiring full system restarts. We need to explore options to improve scalability and deployment efficiency without disrupting our existing user experience.
```

---

## Considered Options

List what you looked at, good and bad.

Key points to consider:
- **Alternatives**: what options did the architecture team evaluate?
- **Pros and Cons**: what are the strengths and weaknesses of each option?
- **Constraints**: how do your current technology stack and enterprise standards influence these choices?
- **Total Cost of Ownership**: what are the long-term implications for maintenance and scalability?

Example:
```
We considered three main options:
1. Vertical Scaling: Simply increasing our server capacity.
   Pros: Quick to implement, no architectural changes.
   Cons: Costly, doesn't solve underlying issues.

2. Microservices Architecture: Breaking our monolith into smaller, independent services.
   Pros: Improved scalability, easier deployments.
   Cons: Complex to implement, requires significant refactoring.

3. Serverless Architecture: Moving to a fully managed, event-driven model.
   Pros: High scalability, pay-per-use pricing.
   Cons: Vendor lock-in, potential cold start issues.
```

---

## Proposed Architecture

Describe the solution you picked and where it fits in the architecture.

Key points to consider:
- **Solution Overview**: a high-level description of the proposed architecture.
- **Technology Stack**: what technologies will be used, and how do they fit into your enterprise landscape?
- **Scalability and Performance**: how will this solution meet your growth projections?
- **Security and Compliance**: how does it address your enterprise security requirements?

Example:
```
We propose adopting a microservices architecture, gradually breaking down our monolith into smaller, independently deployable services. We'll start by extracting our user authentication and product catalog as separate services, using Docker for containerization and Kubernetes for orchestration. This approach allows us to:
- Scale services independently based on demand
- Deploy updates more frequently with less risk
- Improve fault isolation

We'll use an API gateway to route requests to the appropriate microservices, maintaining a single entry point for our clients.
```

---

## Impact Analysis

Time to put on your fortune-teller hat. What ripples will this decision create across your tech ocean?

Key points to consider:
- **Downtime**: will there be any service interruptions? How can you minimize them?
- **Performance**: how will this affect system speed and efficiency?
- **Risks**: what could go wrong, and how likely is it?
- **Team Involvement**: which teams will be affected, and how?
- **Business Impact**: how does this align with broader company goals?
- **Metrics**: what KPIs will help you measure success?
- **Cost Implications**: both immediate and long-term financial considerations.
- **Reversibility**: if things go south, how easily can you roll back?

Example:
```
The transition to microservices will have several impacts:
- Performance: We expect a 30% improvement in response times for our most used features.
- Team Structure: We'll need to reorganize into cross-functional teams aligned with specific services.
- Learning Curve: The team will need training in microservices patterns, Docker, and Kubernetes.
- Costs: Initial development costs will increase, but we anticipate long-term savings in scaling and maintenance.
```

---

## Implementation Plan

Plot the course from decision to implementation.

Key points to consider:
- **Timeline**: key milestones and deadlines.
- **Roles and Responsibilities**: who's doing what?
- **Testing Strategy**: how will you make sure everything works as expected?
- **Phased Rollout**: going all-in or taking a gradual approach?
- **Training Needs**: do you need to upskill the team?
- **Feedback Loop**: how will you gather and incorporate user and team feedback?
- **Contingency Plans**: what's your backup if things don't go as planned?
- **Communication Strategy**: how will you keep stakeholders informed?

Example:
```
Our adoption plan spans 6 months:
Month 1-2: Team training and proof of concept
Month 3-4: Extract authentication service, test in production with 10% of traffic
Month 5-6: Extract product catalog, gradually increase traffic to new services

We'll use feature flags to easily roll back if we encounter issues, and we'll hold weekly team meetings to address challenges and share learnings.
```

---

## Risks and Mitigations

Document the stumbling blocks you've already identified.

Key points to consider:
- **Encountered Issues**: what problems have you already run into?
- **Root Causes**: why did these issues occur?
- **Workarounds**: how did you solve or mitigate them?
- **Lessons Learned**: what can other teams take away from your experience?
- **Potential Pitfalls**: what should future implementers watch out for?
- **Improvement Opportunities**: how can you do better next time?

Example:
```
During our proof of concept, we encountered:
- Data consistency issues between services
- Increased latency due to network calls between services
- Challenges in distributed logging and tracing

We're addressing these by implementing event sourcing for data consistency, optimizing inter-service communication, and adopting a distributed tracing solution.
```

---

## Compliance and Governance

Dot your i's and cross your t's. Make sure you're aligned with company standards and best practices.

Key points to consider:
- **Standard Procedures**: have you followed all company-mandated processes?
- **Related Resources**: link to relevant docs, MRs, or external references.
- **New Documentation**: what new guides or wikis need to be created?
- **Review Process**: who needs to sign off on this decision?
- **Tagging and Categorization**: how should this ADR be labeled for easy future reference?
- **Announcement Plan**: how will you communicate this decision to the wider org?
- **Update Cycle**: when should this ADR be reviewed and potentially updated?

Example:
```
✅ Architecture review board approval obtained on 2023-06-15
✅ Security team consulted, additional encryption requirements noted
✅ New runbook created for microservices deployment process
✅ Quarterly review scheduled to assess progress and adjust course if needed
```
