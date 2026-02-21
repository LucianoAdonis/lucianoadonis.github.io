---
layout: custom
title: Writing Advice
description: An act that you do with your heart
status: orange
category: educational
---

<img class="myImg" src="../images/headers/sky-blue-writting.png" alt="sky-blue-writting" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

Depending on the document type, you will need to figure out how to start. If you barely have an idea of how it should look, search for references first.

---

# Who Are You Writing This For?

Know who this is for.

Personally, I write thinking of myself: the version of me who has forgotten everything. That tends to be the right level of detail.

# Review

It is easier to spot a bad movie than to explain what it does well. And when you try, you usually end up with a bunch of clichés. The same applies to writing: you know something feels off before you can articulate why.

## What to Look for

We tend to leave out information when writing because we skip the obvious to keep things simple, which is not necessarily bad. The trick is to know when skipping something actually loses the reader.

A few tips:

- Avoid using headings for everything: sometimes less structure is more readable.
- Think about your approach before starting. Personally, I like to brain-dump everything and organize it later. Sometimes I start with the conclusion. Others prefer to outline headings first and fill them in. Neither is wrong.
- Write thinking about the person reading it. What will their first reaction be? Assume they have more knowledge gaps than you do, and cover those quickly and clearly.

## What to Avoid

- **Overexplaining**: It is easy to over-explain simple ideas and bury the actual point.
- **Too many clichés**: Relying on common phrases makes writing feel generic and forgettable.
- **Losing the purpose**: Every sentence should serve the document. If it does not, cut it.
- **Not enough detail**: Missing context breaks immersion and sends the reader searching elsewhere, which is exactly what you want to avoid.

# AIs and ChatGPT

As you may already know, in a company context you should avoid passing sensitive information through these services. If you do use them (for whatever valid reason), at least do not do it carelessly. Uploading an entire document just to rewrite two lines of text is a risky trade-off.

To put it simply: if someone asks how you are doing and they respond with a lengthy breakdown of the geopolitical situation before getting to the point, it comes across as odd. The same principle applies to documents. More is not always better.

## Prompts

Let's say you need a quick context section for a document on the Cold Start issue affecting AWS Lambdas inside VPCs. A plain answer would be: "Lambdas running inside VPCs are slower to start because allocating internal networking resources takes more time than public ones that are always ready."

But here is how the same request plays out with slightly different prompts in ChatGPT 3.5:

- Explain the limitation of AWS Lambdas running in private VPCs that causes the cold start issue as context for a document:

  <details style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
    <summary style="color: #00AEEF; cursor: pointer;">Click to expand</summary>
    <div style="padding: 10px;">
      <p><strong>Title:</strong> Understanding the Limitations of AWS Lambdas Running in Private VPCs: Cold Start Issue</p>

      <p><strong>Introduction:</strong> AWS Lambda has become a popular choice for building serverless applications due to its scalability, cost-effectiveness, and ease of use. However, when Lambda functions are configured to run within a Virtual Private Cloud (VPC), they can experience a significant limitation known as the cold start issue. This document aims to provide a comprehensive understanding of this limitation and its implications for AWS Lambda functions deployed in private VPC environments.</p>

      <p><strong>Limitation:</strong> Cold Start Issue The cold start issue refers to the delay experienced when a Lambda function is invoked for the first time or after a period of inactivity. This delay occurs because AWS needs to provision resources for the function to execute, including networking resources within the VPC. In a private VPC environment, the provisioning process can be more complex and time-consuming compared to functions running outside the VPC.</p>

      <p><strong>Factors Contributing to Cold Start Issue:</strong></p>

      <ul>
        <li><strong>Networking Configuration:</strong> Running Lambda functions within a VPC requires additional networking configuration, such as subnet routing, security groups, and network ACLs. These configurations add overhead to the provisioning process, resulting in longer cold start times.</li>
        <li><strong>Resource Allocation:</strong> The availability of resources within the VPC, such as IP addresses, subnet capacity, and routing tables, can impact the speed at which Lambda functions are provisioned. Limited resources or contention for resources can lead to delays in cold starts.</li>
        <li><strong>Security Checks:</strong> Security measures implemented within the VPC, such as network isolation and access controls, contribute to the cold start delay. AWS performs security checks during function invocation, which can take longer in a private VPC environment with stricter security configurations.</li>
      </ul>

      <p><strong>Implications:</strong></p>

      <ul>
        <li><strong>Reduced Performance:</strong> The cold start delay can negatively impact the performance of serverless applications, especially those with strict latency requirements or fluctuating workloads. Users may experience increased response times and variability in execution times during periods of high demand.</li>
        <li><strong>Increased Costs:</strong> Longer cold start times can result in higher costs for serverless applications, as users may need to provision more resources to handle peak loads and mitigate the impact of cold starts. Additionally, the increased provisioning time contributes to higher operational costs associated with AWS Lambda usage.</li>
      </ul>

      <p><strong>Mitigation Strategies:</strong></p>

      <ul>
        <li><strong>Warm-up Techniques:</strong> Implementing warm-up techniques, such as scheduled invocations or using AWS Lambda Provisioned Concurrency, can help mitigate the cold start issue by keeping functions warm and ready to handle incoming requests.</li>
        <li><strong>Optimized VPC Configuration:</strong> Optimizing VPC configuration settings, such as subnet size, routing tables, and security group rules, can reduce the overhead associated with cold starts. By streamlining networking configurations, users can minimize provisioning delays and improve overall performance.</li>
        <li><strong>Performance Monitoring:</strong> Monitoring cold start times and overall function performance is essential for identifying performance bottlenecks and optimizing resource allocation. Leveraging AWS CloudWatch metrics and logs can provide valuable insights into function behavior and help fine-tune performance.</li>
      </ul>

      <p><strong>Conclusion:</strong> The cold start issue is a significant limitation of AWS Lambda functions running in private VPCs, impacting performance, scalability, and cost-effectiveness. By understanding the factors contributing to this limitation and implementing appropriate mitigation strategies, users can optimize their serverless applications for improved reliability and efficiency in private VPC environments.</p>
    </div>
  </details>

- As a senior cloud engineer, explain the limitation of AWS Lambdas running in private VPCs that causes the cold start issue as context:

  <details style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
    <summary style="color: #00AEEF; cursor: pointer;">Click to expand</summary>
    <div style="padding: 10px;">
      <p>As a Senior Cloud Engineer, I can provide insight into the limitation of AWS Lambda functions running within private VPCs that leads to the cold start issue:</p>

      <p>When AWS Lambda functions are configured to run within a Virtual Private Cloud (VPC), they gain access to resources and services within that VPC, providing enhanced security and enabling interaction with private resources. However, this configuration introduces a significant limitation known as the cold start issue.</p>

      <p>The cold start issue occurs due to several factors inherent in the setup and initialization process of Lambda functions within a private VPC:</p>

      <ul>
        <li><strong>Networking Configuration Complexity:</strong></li>
        <ul>
          <li>Running Lambda functions within a VPC requires additional networking configurations, such as subnet associations, security group assignments, and routing table entries.</li>
          <li>Each Lambda function invocation within the VPC necessitates the setup and configuration of networking components, including network interfaces and routing rules.</li>
          <li>The complexity of these networking configurations can contribute to longer cold start times, as AWS must ensure proper connectivity and isolation within the VPC environment before the function can execute.</li>
        </ul>

        <li><strong>Resource Provisioning Overhead:</strong></li>
        <ul>
          <li>Provisioning resources for Lambda function execution within a private VPC involves coordination with the VPC's networking infrastructure.</li>
          <li>AWS must allocate compute capacity, networking resources, and potentially additional IP addresses from the VPC's pool to accommodate the function's execution requirements.</li>
          <li>This provisioning process incurs overhead, particularly during cold starts, as AWS needs to allocate and configure resources within the VPC before the function can begin execution.</li>
        </ul>

        <li><strong>Security Checks and Compliance:</strong></li>
        <ul>
          <li>Security is paramount in VPC environments, and Lambda functions running within a VPC are subject to additional security checks and compliance requirements.</li>
          <li>AWS performs security checks to ensure that the Lambda function has the necessary permissions and access to resources within the VPC while maintaining isolation from other VPCs and external networks.</li>
          <li>These security checks add to the initialization time of Lambda functions, especially during cold starts, as AWS verifies IAM roles, applies security group rules, and enforces network access controls before allowing the function to execute.</li>
        </ul>
      </ul>

      <p><strong>Implications:</strong></p>

      <ul>
        <li>The cold start issue can result in delays in the execution of Lambda functions, impacting application responsiveness and user experience, particularly during periods of low or intermittent traffic.</li>
        <li>Applications with stringent latency requirements or unpredictable workload patterns may experience performance degradation and variability in response times due to cold starts.</li>
        <li>Mitigation strategies such as keeping Lambda functions warm through scheduled invocations or using Provisioned Concurrency can help alleviate the cold start issue but may incur additional costs and operational complexity.</li>
      </ul>

      <p>In summary, the limitation of AWS Lambda functions running in private VPCs that causes the cold start issue stems from the inherent complexity of networking configuration, resource provisioning overhead, and security checks associated with VPC environments. As a Senior Cloud Engineer, understanding these factors is essential for optimizing the performance, scalability, and reliability of serverless applications deployed within private VPC environments.</p>
    </div>
  </details>

  - As a senior cloud engineer, explain the limitation of AWS Lambdas running in private VPCs that causes the cold start issue as context, and be brief about it:
  <details style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
    <summary style="color: #00AEEF; cursor: pointer;">Click to expand</summary>
    <div style="padding: 10px;">
      <p>Certainly!</p>

      <p>When AWS Lambda functions are deployed within a private Virtual Private Cloud (VPC), they experience a cold start issue due to the additional networking setup and resource provisioning required before execution. This complexity in networking configuration, including subnet associations and security group assignments, along with the overhead of resource allocation within the VPC, contributes to longer initialization times. Additionally, stringent security checks and compliance measures further extend the cold start duration. As a Senior Cloud Engineer, addressing these factors is crucial to optimize the performance and responsiveness of serverless applications deployed in private VPC environments.</p>
    </div>
  </details>

  - As a senior cloud engineer, explain the limitation of AWS Lambdas running in private VPCs that causes the cold start issue as context, and be brief about it: make it two lines:
  <details style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
    <summary style="color: #00AEEF; cursor: pointer;">Click to expand</summary>
    <div style="padding: 10px;">
      <p>When AWS Lambda functions operate within private VPCs, the cold start issue arises due to the additional networking complexities and resource provisioning required, leading to longer initialization times. This includes configuring networking components, allocating resources within the VPC, and enforcing stringent security checks, all of which contribute to delays in function execution.</p>
    </div>
  </details>

If you are going to wade through a lot of filler just to get to the essential point of a document, that is a problem. Going deep into a topic is fine, but be aware of who you are writing for. Is this a "From Zero to Hero" course or a document people will skim in a pinch?

You should not need to go into full Prompt Engineering mode just to get a clean paragraph. A few things worth trying:

- Rewrite X text for clarity.
- Suggest alternatives to X line.
- Rewrite this more politely.
- Alternative expressions for X phrase.

If you only need a grammar check, Grammarly is worth it. The paid version saves a lot of proofreading time, and the rewrite suggestions are genuinely useful when you are stuck on a sentence.

## Prompts for Editing Your Own Work

Where AI tools actually save time is in the small, repetitive edits, the kind where you know something is off but do not want to rewrite the whole thing from scratch. The key is being specific about what you want to preserve.

### Keeping the Tone

Use these when the content is good but the phrasing needs work, and you do not want it coming back sounding like a press release.

- `Fix the grammar and spelling in this paragraph without changing the tone or wording: [text]`
- `This is written in a casual, direct tone. Correct any errors but do not make it sound more formal: [text]`
- `I wrote this. Clean it up without making it sound like someone else wrote it: [text]`

The last one sounds obvious but it is the most useful. It tells the model that the voice is intentional and should be preserved.

### Trimming Without Losing the Point

Use these when a paragraph is doing too much and you need it to breathe.

- `Shorten this to two sentences. Keep the main point and nothing else: [text]`
- `Remove filler words and redundant phrases from this without changing the meaning: [text]`
- `This is too long. Cut it in half, prioritizing clarity over completeness: [text]`

The difference between these and a generic "summarize" prompt is that you are giving it permission to cut, not just compress.

### Adjusting Formality

Use these when the audience changes and the text needs to follow.

- `Rewrite this to sound professional without being stiff or corporate: [text]`
- `Make this less formal. The audience is technical but not executives: [text]`
- `This reads too casual for a stakeholder update. Adjust the tone, keep the content: [text]`

### Surgical Edits

Use these when most of the text is fine and you only need one part fixed.

- `The opening sentence of this paragraph is weak. Suggest three alternatives: [text]`
- `This sentence is awkward. Rewrite it without changing the meaning: [sentence]`
- `Rewrite only the conclusion of this paragraph to land harder: [text]`

Scoping the instruction to one part of the text is often more useful than asking for a full rewrite. It gives you something concrete to compare rather than a new version you have to evaluate from scratch.

### Matching Tone Across Sections

Use this when you have written two sections at different times and they feel like they were written by different people, because they were.

- `These two paragraphs need to sound like they were written by the same person in the same mood. Adjust the second to match the tone of the first: [paragraph 1] / [paragraph 2]`
- `I want my writing to sound consistent throughout. Here is my original style: [example]. Now rewrite this section to match it: [text]`

### Removing the AI Voice

Use these when something you wrote, or something a tool generated, that sounds too polished, too structured, or just a bit hollow.

- `Rewrite this without using corporate buzzwords, filler transitions like "in conclusion" or "it is worth noting", or bullet points: [text]`
- `This sounds like it was written by AI. Rewrite it to sound like a person: [text]`
- `Remove hedging phrases like "it is important to note" or "this is crucial" and say the thing directly: [text]`

---

None of these replace actually knowing what you want to say. But if the thought is there and the sentence is not cooperating, one of these will usually unstick it faster than staring at the screen.

## Advice for the Young at Heart

Adding more text does not improve a document. It usually makes it harder to read. ChatGPT tends to target a certain length to sound thorough and engaging, but clarity and conciseness beat length every time.

ChatGPT is useful, but it is like using Mahoraga. It depends entirely on how you wield it.
