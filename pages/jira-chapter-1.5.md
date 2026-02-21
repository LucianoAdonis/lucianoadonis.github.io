---
layout: custom
title: JQL - Examples
description: Like Magic, Without the Wonder
book: jira
chapter: 1.5
status: red
category: educational
---

{% include chapter-nav.html position="top" %}


---

<img class="myImg" src="../images/headers/cian-chess-board.png" alt="cian-chess-board" style="border: 1px solid #000; border-radius: 1px; padding: 0px; cursor: pointer;">

---

# JQL General



# In Progress Tickets

This would be useful to get what you currently are working:

```
PROJECT = "EHQ" AND assignee IN ("luciano@ehq.cl") AND status = "In Progress" ORDER BY status DESC, updated DESC      
```

But it could be improved by adding a limiter based on the updates:


This could prevent getting results that are not getting actively updated.




# Work that hasn't been completed yet



```
PROJECT = EHQ AND assignee IN ("luciano.ehq.cl") AND status NOT IN (Closed, Done, "In Progress", "Resolved", "Withdrawn") ORDER BY status DESC, updated DESC
```


## 

```
(status = "In Progress" AND updated >= -7d) OR (status = "In Progress" AND updated < -7d)  
ORDER BY updated DESC
```

##

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

# Real Queries

The thing is, that this won't cut it. I was getting over 100+ projects and enough tickets to drown myself into.

The issue was in the structure, the proper patterns should be between parentesis 

```
project IN (LONG, LIST, PROJECTS)  
AND ((assignee IN (LONG, LIST, MEMBERS)) OR (labels IN (LABELS, LIST)))  
AND updated >= startOfDay(-1y)  
AND updated < startOfDay()
```

But I had to remove the labels, as it caused some issues with the results, as tickets labeled assigned to other people, weren't not appearing.

Regardless I got what I needed

```
project IN ("LONG", "PROJECT", "LIST")
AND ((assignee in ("LONG", "USER", "LIST")))
AND updated >= "2024-02-26"
AND updated < "2025-02-26"
```



<br>


---

{% include chapter-nav.html %}
