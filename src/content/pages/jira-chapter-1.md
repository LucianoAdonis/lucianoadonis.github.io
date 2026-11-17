---
title: The Case
description: How Complicated Can Be?
status: red
started: 2025-02-18
revised: 2026-02-21
book: jira
chapter: 1
plate: ../../assets/images/headers/cian-chess-board.png
plateAlt: cian-chess-board
---

Okay! The mission is simple, get multiple of reports that are mostly handling manually and you need to talk with people to understand in an automated fashion.

This ideally should cover things that we would want to know, like:

- Distribution of Engineers within Projects
- Current Load and what we would want to know as expected.
- Projections.
- And of course! The Reports!

End game would be a platform that allows us to manipulate the data and share it securely... like Airtable... but let's

### JIRA

### JIRA Sheets

#### Columns

Regardless of the size don't forget to get the following columns:

- System Fields
  - Labels
  - Project
  - Project key
  - Epic name
  - Epic link

  - Parent
  - Sub-tasks

  - Issue URL
  - Story Points

- Smart Columns
  - Project type *
  - Time since first comment
  - Date of first comment
  - Assignee(s) - Number of values

- History Columns
  - Time with assignee
  - Number of assignee changes
  - Date of status
  - Date of status change
  - Time since status
  - Time since status changed
  - Time in status
  - Time between statuses
  - Resolved date
  - Time since resolved
  - Time since created
  - Time since updated
  - Last updated by user
  - Last update action
  - Number of updates
  - Last viewed date
  - Create date
  - Update date

- Previous Status

You can get a lot from it, especially using the smart columns.

Values useful for metrics and references:

- Project
- Project key
- Assignee
- Status
- Sprint

You can import Jira data in Excel format, especially when you need to bring in a lot of detail columns at once. From there, Airtable is a good destination for manipulating and presenting the data.

---
