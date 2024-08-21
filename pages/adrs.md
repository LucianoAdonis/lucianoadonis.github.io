---
layout: default
title: Architectural Decision Record (ADR)
description: Either the Reason or Solution of Your Problems
---

An ADR is a document that outlines the critical details of an architectural decision, including its context and impact on the system. It helps gather input from multiple team members by providing a clear overview of the decision and the next steps. By documenting decisions upfront, an ADR ensures everyone is aligned on what was decided and why, preventing future misunderstandings.

# Structure

I have seen many examples how to do one, but honestly, I prefer the format that I already learnt with the improvements done to it over time.

In summary:
- Problem Statement.
- Considered Options.
- Proposed Architecture.
- Impact.
- Adoption Plan.
- Known Errors.
- Company Checklist.

## Problem Statement
Explain the context and objectives behind this decision. Determine whether this is a new implementation or an improvement, and consider its impact on other teams.

Questions to answer:
- What is the context that led to this decision?
- What are the objectives and expected outcomes?
- Is this a new implementation, or are we improving an existing one?
- Will this also impact other teams?

## Considered Options
Explore multiple alternatives, detailing why certain options were chosen or rejected. Consider the limitations and dependencies related to the existing tech stack.

Questions to answer:
- What options were explored?
- What are the advantages and disadvantages of each option?
- Are there limitations due to the existing tech stack or dependencies on other teams?
- Are we considering additional improvements or testing the scope limits?

## Proposed Architecture
Describe the chosen solution and how it will be implemented, focusing on its sustainability and any additional considerations like scalability and security.

Questions to answer:
- What is the proposed solution to improve the system?
- How will this solution be implemented?
- Is a new implementation required, or can we leverage existing technologies?
- Is the proposed solution sustainable in the long run?
- Have we taken all necessary considerations into account (e.g., scalability, security)?

## Impact
Identify potential impacts, including downtime, risks, and the involvement of other teams. Use a risk management approach to communicate with stakeholders.

Questions to answer:
- Will this decision cause any downtime, and how can we prevent service disruption?
- What potential risks or corner cases could arise?
- Have we reviewed this with developers to ensure all system-related concerns are addressed?
- Does this involve other teams, and what will the resource cost (e.g., sprints) be for them and us?
- How does this decision affect the broader business, and can we frame it using a risk management approach for managers?

## Adoption Plan
Outline the steps for implementation and coordination, including peer review and management across different environments.

Questions to answer:
- What are the steps to implement this solution?
- Can a coworker test this process in lower environments to ensure completeness and accuracy?
- How will changes be managed across different environments?
- How will coordination with the squad be handled?
- What are the expected changes, and how will they be implemented?

## Known Errors
Document any issues encountered during planning or provisioning to help other teams avoid similar pitfalls.

Questions to answer:
- What issues were encountered during planning or provisioning?
- What lessons can be learned from these errors to help other teams avoid similar pitfalls?

## Company Checklist
Use a standardized checklist to document updates and reference relevant resources. Note any related documents or new materials created.

Questions to answer:
- Have we used a standardized checklist to document components being updated?
- Are there references to Merge Requests (MRs) or other resources that should be noted?
- Are there any related documents or new materials created during this process?

# Example

Eventually...