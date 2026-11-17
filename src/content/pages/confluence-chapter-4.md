---
title: A New Hope
description: Random trivia that might be useful on a date to break the ice.
status: orange
started: 2024-09-02
revised: 2026-02-21
book: confluence
chapter: 4
---

## Datasource Pages

Just like it sounds, a Datasource Page is where you consolidate information. With Macros like [Multiexcerpt](https://confluence.atlassian.com/conf719/excerpt-macro-1157466743.html) and [Table Include](https://docs.stiltsoft.com/tfac/dc-server/how-to-use-table-excerpt-and-table-excerpt-include-macros-42241623.html), you can save yourself a ton of headaches by keeping your source of truth and attached pages in sync.

If you ever change the name or something on the datasource page, it won't break the pages that depend on it, it updates automatically. So go ahead, get creative!

### Structure

<div data-review="new">

[Pending to add... how to structure a datasource page.]

</div>

### Example
The reusable content can be anything that you can place in that box, so whether it's text or an image, it can be there. Of course, with the exception of tables which have their own macro to do that.

![The Datasource Page in edit mode, a Multiexcerpt macro named cloud-experience wrapping the Old Man Yells at Cloud picture](../../assets/images/confluence/multiexcerpt-example.png)

To include something you have to use the multiexcerpt include macro which will show you the available options in the page and a small preview of the content retrieved:

![The Insert Multiexcerpt include dialog, with the page Datasource Page and the excerpt cloud-experience selected, and the picture shown in the preview](../../assets/images/confluence/multiexcerpt-include-macro-menu.png)

From the edit menu it will look like this:

![The Consumer Page in edit mode, a Multiexcerpt include macro pointing at the datasource page, followed by the text Blah Blah, relevant text](../../assets/images/confluence/multiexcerpt-include-macro-example.png)

## Tagging

[Live Search](https://confluence.atlassian.com/conf719/livesearch-macro-1157466803.html) gets even better when you're using proper tagging, so take the time to tag your content wisely.

[Go to Template Magic](/pages/confluence-chapter-2#template-magic) for more inspiration.

## Security & Limitations

Not much to say, just to complain.

- There aren't granular controls over the documentation by default. Basically an exclusive list or allow all. There is a solution sold by Confluence to have more visibility over everything for each type of implementation:
  - [Crowd (Data Center)](https://www.atlassian.com/software/crowd).
  - [Guard (Cloud)](https://www.atlassian.com/software/access/capabilities).
- Someone could dump everything.
- Page Ownership is only available in Cloud Version.

## References

There isn't much from Confluence but there are a few sources that are worth looking:

- That YouTube Channel.
- Stuff.

---
