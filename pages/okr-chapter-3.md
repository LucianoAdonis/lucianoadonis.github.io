---
layout: custom
title: Visualizing Work Through Jira and Confluence - Chapter 3
description: Making the connection between epics and results visible
book: okr
chapter: 3
status: orange
category: educational
---

{% include chapter-nav.html position="top" %}

---

<img class="myImg" src="../images/headers/yellow-okr.png" alt="yellow-okr" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

# Why This Matters

The goal is to make reporting upward require zero writing. When a stakeholder asks "how are we tracking against the reliability OKR?", the answer should be a link, not a paragraph you compose from memory.

The way to get there is to make the Objective → Key Result → Epic chain visible in your tools. Chapter 1 described the chain. This chapter covers how to wire it in Jira and surface it in Confluence.

<br>

# Structuring Epics for Reporting

Every Epic in Jira that contributes to an OKR should say so in its description. A simple format that works:

```
OKR: [Objective name]
Key Result: [KR text and target]
What this Epic does: [one sentence]
```

This is not bureaucracy. It is the difference between being able to answer "why does this Epic exist?" in a meeting and having to go find the person who created it.

When Epics reference their Key Results, you can query them in Jira by searching for the KR text in Epic descriptions, or by using a label or custom field if your team sets that up. Either way, pulling a report of "all Epics contributing to KR2" becomes a search rather than a memory exercise.

<br>

# Confluence: Surfacing the Work

With Jira and Confluence linked, you can pull live Jira data directly into a Confluence page using the Jira Issues macro. The result is a page that updates automatically as work progresses, without anyone maintaining it manually.

## Adding the Jira Issues Macro

- Open the Confluence page where you want to display progress.
- In the editor, click the "+" icon and select "Other macros."
- Search for "Jira Issues" and select it.
- Configure the macro using a JQL query to filter the specific Epics or issues you want to show.

## Writing the JQL Query

JQL lets you filter exactly which issues appear. Some useful queries for OKR reporting:

Show all Epics in a project with a specific label:
```
project = "MYPROJECT" AND issuetype = Epic AND labels = "okr-reliability-q3"
```

Show open issues assigned to your team under a specific Epic:
```
"Epic Link" = PROJ-42 AND status != Done ORDER BY priority DESC
```

Show everything updated in the last 7 days in a project:
```
project = "MYPROJECT" AND updated >= -7d ORDER BY updated DESC
```

The most useful pattern for OKR reporting is to label every Epic with a tag that identifies the Key Result it contributes to, then query by that label in Confluence. One Confluence page per OKR, each showing the live status of its contributing Epics.

## Saving and Embedding the Query

- Paste your JQL into the macro's query field.
- Test it in Jira first to confirm it returns the right results.
- Save the macro. The page will display the matching issues as a live table.

When you refresh the Confluence page during a review meeting, the data is current without anyone having prepared a report. That is the point.

<br>

# The Reporting Chain in Practice

A complete setup looks like this:

1. Company sets Objectives and Key Results for the quarter.
2. Team creates Epics in Jira, each referencing the Key Result it moves.
3. Epics are labeled for easy querying (`okr-[kr-slug]`).
4. A Confluence page per OKR uses the Jira Issues macro to show all contributing Epics and their status.
5. At review time: open the Confluence page, see the current state, report the number.

The effort is upfront in the setup. After that, the tools do the tracking.

---

{% include chapter-nav.html %}
