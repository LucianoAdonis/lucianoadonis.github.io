---
title: JQL - Examples
description: Enough Tickets to Drown Myself In
status: red
started: 2025-02-18
revised: 2026-02-21
book: jira
chapter: 1.5
plate: ../../assets/images/headers/cian-chess-board.png
plateAlt: A row of chess pieces on a light blue background, a knight and a bishop worth 3 each, a rook worth 5, a queen worth 9, a king, and a document icon marked minus and plus
---

## In Progress Tickets

This would be useful to get what you're currently working on:

```
PROJECT = "EHQ" AND assignee IN ("luciano@ehq.cl") AND status = "In Progress" ORDER BY status DESC, updated DESC      
```

But it could be improved by adding a limiter based on the updates:

This could prevent getting results that are not getting actively updated.

## Work that hasn't been completed yet

```
PROJECT = EHQ AND assignee IN ("luciano.ehq.cl") AND status NOT IN (Closed, Done, "In Progress", "Resolved", "Withdrawn") ORDER BY status DESC, updated DESC
```

```
(status = "In Progress" AND updated >= -7d) OR (status = "In Progress" AND updated < -7d)  
ORDER BY updated DESC
```

```
(status IN ("To Do", "In Progress", "Open"))  
OR  
(updated >= -7d)  
ORDER BY updated DESC
```

```
project = "EHQ" AND ((status IN ("To Do", "In Progress", "Open"))  
OR  
(status IN ("Closed", "Done", "Withdrawn", "Resolved") AND updated <= -7d))  
ORDER BY updated DESC
```

## Real Queries

The thing is, that this won't cut it. I was getting over 100 projects and enough tickets to drown myself in.

The issue was in the structure, the proper patterns should be between parentheses

```
project IN (LONG, LIST, PROJECTS)  
AND ((assignee IN (LONG, LIST, MEMBERS)) OR (labels IN (LABELS, LIST)))  
AND updated >= startOfDay(-1y)  
AND updated < startOfDay()
```

But I had to remove the labels, as it caused some issues with the results, as tickets labeled assigned to other people, weren't appearing.

Regardless, I got what I needed:

```
project IN ("LONG", "PROJECT", "LIST")
AND ((assignee in ("LONG", "USER", "LIST")))
AND updated >= "2024-02-26"
AND updated < "2025-02-26"
```

---
