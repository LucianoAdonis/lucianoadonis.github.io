---
title: Visualizing Work Through Jira and Confluence
description: Getting your OKR report down to a link.
status: orange
started: 2024-12-25
revised: 2026-02-21
book: okr
chapter: 3
plate: ../../assets/images/headers/yellow-okr.png
plateAlt: '"OKR" in dark letters on three wooden cubes, standing on a glossy yellow surface'
---

## Why This Matters

<!-- source: 2026 batch (8126bde), restored -->
You want reporting upward to take zero writing. When a stakeholder asks "how are we tracking against the reliability OKR?", the answer should be a link, not a paragraph you write from memory.

For that, the Objective, Key Result and Epic chain has to be visible in your tools. [Chapter 1](/pages/okr-chapter-1) described the chain. This chapter wires it in Jira and shows it in Confluence.

---

## Confluence

With the Jira and Confluence integration, macros run queries that show who's involved in a task, what's done and the current status. That covers direct and indirect contributions to OKRs.

First, make every Epic that feeds an OKR say so in its description. A simple format:

```
OKR: [Objective name]
Key Result: [KR text and target]
What this Epic does: [one sentence]
```

That's how you answer "why does this Epic exist?" without hunting for whoever created it.

<!-- source: 2026 batch (8126bde), restored -->
Once Epics reference their Key Results, you can find them in Jira by searching for the KR text in the descriptions, or by using a label or custom field if your team sets that up. Either way, pulling "all Epics contributing to KR2" becomes a search.

---

## Insert Jira Issues Macro in Confluence

Once the applications are linked, the Jira Issues macro displays issues directly on a Confluence page.

- Open the Confluence page where you want to display Jira issues.
- Click "Insert more content" (the "+" icon) in the editor toolbar, then select "Other macros".
- Type "Jira" in the search box and select the "Jira Issues" macro.
- Configure the macro to show the issues you want, filtering with JQL (Jira Query Language).

---

## Create a Jira Query Using JQL

JQL lets you say exactly which issues you want.

- Decide the criteria, for example a specific project, a particular user or a certain status.
- Open Jira, go to the "Issues" menu and select "Search for issues".
- Enter your query in the JQL field. For example:

```
project = "MYPROJECT" AND status = "Open" AND assignee = currentUser() ORDER BY created DESC
```

- Test it in Jira to make sure it returns what you expect.

The most useful pattern for OKR reporting is to label every Epic with a tag for its Key Result and query by that label. One Confluence page per OKR, each showing its contributing Epics:

```
project = "MYPROJECT" AND issuetype = Epic AND labels = "okr-reliability-q3"
```

<!-- source: 2026 batch (8126bde), restored -->
Two more that come in handy. Open issues assigned to your team under a specific Epic:

```
"Epic Link" = PROJ-42 AND status != Done ORDER BY priority DESC
```

Everything updated in the last 7 days in a project:

```
project = "MYPROJECT" AND updated >= -7d ORDER BY updated DESC
```

---

## Insert the JQL into the Jira Issues Macro

- Go back to your Confluence page where the macro is placed.
- Click the macro to edit it and paste your JQL in the query field.
- Save the macro settings.

Now the page shows the matching issues as a live table, and refreshing it in a review meeting gives you current data without anyone preparing a report.

---
