---
title: JQL
description: Like Magic, Without the Wonder
status: red
started: 2025-02-18
revised: 2026-02-21
book: jira
chapter: 0
plate: ../../assets/images/headers/cian-chess-board.png
plateAlt: A row of chess pieces on a light blue background, a knight and a bishop worth 3 each, a rook worth 5, a queen worth 9, a king, and a document icon marked minus and plus
---

I normally would want to skip this, but it may be useful to understand some workarounds before diving into the reports!

## JQL

The Jira Query Language is used in advanced searches. It allows you to get more detailed results. Normally it would be overkill, especially when the basic search is quite useful. But when you're searching for details or comparing multiple specific fields to filter out results, then it's not as useful.

<!-- source: 2026 batch (8126bde), restored -->
It also lets you filter across projects or save queries you can reuse in reports.

The [Atlassian docs](https://community.atlassian.com/t5/Jira-articles/Introduction-to-JQL-Standard-amp-advanced-search-in-Jira/ba-p/1707966) have good examples. Here are two to start:

- Unresolved, overdue issues: `duedate < now() AND status NOT IN (closed, resolved)`
- Issues in a closed sprint: `sprint in closedSprints()`

Now think that you have to check 40+ people across more than 20 projects, and those small nuggets of information don't help that much.

### Concepts

JQL queries follow the structure `FIELD OPERATOR VALUE`.

- [Fields](https://amoeboids.com/blog/a-quickstart-guide-to-jira-query-language-jql#:~:text=learn%20more%20about%20the%20JQL%20fields%20here): the thing you're filtering on, like `assignee`, `status`, `project`, `duedate`
- **Values**: what you're comparing against, like `"In Progress"`, `Done`, a user (account ID or display name works), or a function like `currentUser()`.
- [Operators](https://support.atlassian.com/jira-software-cloud/docs/jql-operators/): how you compare field to value. `=` for exact match, `IN` for lists, `>` and `<` for dates and numbers, `~` for text contains.
- [Keywords](https://support.atlassian.com/jira-software-cloud/docs/jql-keywords/): `AND`, `OR`, `NOT`, `ORDER BY` for combining and sorting results
- [Functions](https://amoeboids.com/blog/a-quickstart-guide-to-jira-query-language-jql/#:~:text=quite%20lengthy%20%26%20is-,available%20here,-.%C2%A0): built-in helpers like `currentUser()`, `openSprints()`, `startOfWeek()`

### Basic Examples

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
