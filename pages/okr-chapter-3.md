---
layout: custom
title: Visualizing Work Through Jira and Confluence - Chapter 3
description: Effective Tools for Tracking and Reporting
---

<div class="nav-buttons">
  <a href="/pages/okr-chapter-2" class="custom-button right"><strong>Chapter 3</strong></a>
  <a href="/pages/okr" class="custom-button left"><strong>Menu</strong></a>
</div>

---

<img class="myImg" src="../images/lsp/teen-titans-get-serious-lsp.png" alt="teen-titans-get-serious" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

<br>

# Confluence

With Jira's Confluence integration, you can use macros to run queries that reveal who is involved in a task, what has been accomplished, and the current status. This setup allows for detailed tracking and reporting of both direct and indirect contributions to OKRs.

<br>

## Insert Jira Issues Macro in Confluence
Once the applications are linked, you can use the Jira Issues macro to display issues directly on a Confluence page.

- Open the Confluence page where you want to display Jira issues.
- Click on 'Insert more content' (the "+" icon) in the editor toolbar, then select 'Other macros'.
- Type 'Jira' in the search box and select the 'Jira Issues' macro.
- Configure the macro to display the specific issues you want. You can use JQL (Jira Query Language) to filter issues.

<br>

## Create a Jira Query Using JQL
JQL allows you to specify exactly which issues you want to display in Confluence.

- Determine the criteria for the issues you want to show. For example, issues from a specific project, issues assigned to a particular user, or issues with a certain status.
- Open Jira and go to the 'Issues' menu.
- Select 'Search for issues'.
- Use the JQL field to enter your query. Here’s an example query:
  ```project = "MYPROJECT" AND status = "Open" AND assignee = currentUser() ORDER BY created DESC```
- Test the query in Jira to make sure it returns the expected results.

<br>

## Insert the JQL into the Jira Issues Macro in Confluence
After crafting your JQL, insert it into the Jira Issues macro in Confluence.

- Go back to your Confluence page where the Jira Issues macro is placed.
- Click on the macro to edit it, and paste your JQL in the appropriate field.
- Save the macro settings.


<br>


---

<div class="nav-buttons">
  <a href="/pages/okr-chapter-2" class="custom-button right"><strong>Chapter 3</strong></a>
  <a href="/pages/okr" class="custom-button left"><strong>Menu</strong></a>
</div>
