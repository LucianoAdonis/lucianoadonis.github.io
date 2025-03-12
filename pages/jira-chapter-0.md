---
layout: custom
title: JQL
description: Like Magic, Without the Wonder
---

<div class="nav-buttons">
  <a href="/pages/jira" class="custom-button right"><strong>Menu</strong></a>
  <a href="/pages/jira-chapter-2" class="custom-button left"><strong>Chapter 2</strong></a>
</div>

---

<img class="myImg" src="../images/headers/cian-chess-board.png" alt="cian-chess-board" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

I normally would want to skip this, but it may be useful to understand some workarounds!

# JQL

The Jira Query Language is used in the advanced searches, it allows you to get more detailed results. Normally it would be overkill, speicially when the basic search it's quite useful. But when searching for details or comparing multiple specific fields to filter out results, then it's not as useful.

The [documentation](https://community.atlassian.com/t5/Jira-articles/Introduction-to-JQL-Standard-amp-advanced-search-in-Jira/ba-p/1707966) contains a few good examples of what you can do, in short it's like the following:


- Unresolved, overdue issues: `duedate < now() AND status NOT IN (closed, resolved)`
- Issues belonging to a closed sprint: `sprint in closedSprints()`

Now think that you have to check +40 people across more than 20 projects and it may not seem that much help those small nuggets of information.


## Concepts

- [Fields](https://amoeboids.com/blog/a-quickstart-guide-to-jira-query-language-jql#:~:text=learn%20more%20about%20the%20JQL%20fields%20here)
- [Values]
- [Operators](https://support.atlassian.com/jira-software-cloud/docs/jql-operators/)
- [Keywords](https://support.atlassian.com/jira-software-cloud/docs/jql-keywords/)
- [Functions](https://amoeboids.com/blog/a-quickstart-guide-to-jira-query-language-jql/#:~:text=quite%20lengthy%20%26%20is-,available%20here,-.%C2%A0)

https://amoeboids.com/blog/a-quickstart-guide-to-jira-query-language-jql/

<br>

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

<div class="nav-buttons">
  <a href="/pages/jira" class="custom-button right"><strong>Menu</strong></a>
</div>
<a href="/pages/jira-chapter-2" class="custom-button right"><strong>Chapter 2</strong></a>
