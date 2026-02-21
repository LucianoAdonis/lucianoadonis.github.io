---
layout: custom
title: JQL
description: Like Magic, Without the Wonder
book: jira
chapter: 0
status: red
category: educational
---

{% include chapter-nav.html position="top" %}

---

<img class="myImg" src="../images/headers/cian-chess-board.png" alt="cian-chess-board" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

I normally would want to skip this, but it is useful to understand some workarounds before diving into the reports.

# JQL

The Jira Query Language is used in advanced searches. It lets you get more specific results than the basic search UI allows. For most day-to-day use, the basic search is fine. But when you need to compare multiple fields, filter across projects, or build reusable queries for reports, JQL is the tool.

The [Atlassian docs](https://community.atlassian.com/t5/Jira-articles/Introduction-to-JQL-Standard-amp-advanced-search-in-Jira/ba-p/1707966) have good examples. Here are two to start:

- Unresolved, overdue issues: `duedate < now() AND status NOT IN (closed, resolved)`
- Issues in a closed sprint: `sprint in closedSprints()`

Those look manageable until you need to check 40+ people across 20+ projects, at which point single-condition queries stop being enough.

## Concepts

JQL queries follow the structure `FIELD OPERATOR VALUE`. Understanding each piece makes it easier to build queries from scratch rather than copying examples blindly.

- [Fields](https://amoeboids.com/blog/a-quickstart-guide-to-jira-query-language-jql#:~:text=learn%20more%20about%20the%20JQL%20fields%20here): the thing you are filtering on, like `assignee`, `status`, `project`, `duedate`
- **Values**: what you are comparing against. Values are usually text strings, dates, or special functions. Status values look like `"In Progress"` or `Done`. User values use the account ID or display name. Some fields accept functions like `currentUser()` instead of a literal value.
- [Operators](https://support.atlassian.com/jira-software-cloud/docs/jql-operators/): how you compare field to value. `=` for exact match, `IN` for lists, `>` and `<` for dates and numbers, `~` for text contains.
- [Keywords](https://support.atlassian.com/jira-software-cloud/docs/jql-keywords/): `AND`, `OR`, `NOT`, `ORDER BY` for combining and sorting results
- [Functions](https://amoeboids.com/blog/a-quickstart-guide-to-jira-query-language-jql/#:~:text=quite%20lengthy%20%26%20is-,available%20here,-.%C2%A0): built-in helpers like `currentUser()`, `openSprints()`, `startOfWeek()`

## Basic Examples

```
sprint IN openSprints()
```

```
updated >= -7d
ORDER BY updated DESC
```

```
project = "CAP" AND
sprint IN closedSprints() AND
status = "Open" AND
updated >= -15d
ORDER BY priority DESC
```

---

{% include chapter-nav.html %}
