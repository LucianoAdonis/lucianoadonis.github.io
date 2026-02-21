---
layout: custom
title: Confluence - Chapter 1
description: Basics Above Else
book: confluence
chapter: 1
status: green
category: educational
---

{% include chapter-nav.html position="top" %}


---

<br>

# Getting Started

In this chapter, we'll cover the basics to help you:

- Learn the sad difference between Cloud and Data Center versions.
- Understand how pages are organized.
- Get familiar with the Layout feature.
- Explore how to use Macros effectively.
- Search in Confluence.

With these foundations in place, we'll be ready to dive into the real fun.

<br>

## Cloud is Not the Same as Data Center

If you've heard about a cool new feature in Confluence but are using the Data Center version, chances are even if you're lucky, you won't see it soon.

One feature not available at the time of writing is the ability to change a page's owner. The user who creates the page is the owner, while others who edit or update it appear in the history as the last person to make changes to the page. There is no way to replace the owner other than recreate the document.

Now, imagine that you search for information, find a document, and have questions about it. Naturally, you'd reach out to the original author, but guess what? They don't work at the company anymore.

That feature is convenient, especially in teams with high rotation. It prevents you from being unnecessarily contacted about something you're no longer responsible for or from having to act as a go-between to the correct person.

There are workarounds, like using a macro to make people who have edited the document appear as contributors at the end of the page, which we'll cover later in the advanced topics.

This difference extends beyond features—integrations, performance improvements, and even the user interface can differ. Cloud gets more frequent updates, while Data Center tends to get behind to be more stable. 

## Page Distribution

When you create a new page, it will automatically be nested under **the page you were viewing** when you pressed the "Create" button. If you want your new page to be a child of a specific parent page, you must navigate to that page before creating it.

It's a common mistake that people often create pages without realizing where they are at the top level of the space, which can lead to drafts floating around at the top level. Not a huge problem, but it can make things messy very quickly.

To keep your space organized, double-check your location before you create a page. It's a quick step that can save you from having to clean up later.

// You can also create pages in your personal space.

### Cloud Differences

In the Cloud version it allows you to quickly add new pages directly from the side menu rather than relying solely on the "Create" button.

<img class="myImg" src="../images/confluence/basics-cloud-page-creation.gif" alt="basics-cloud-page-creation" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

Even though I was initially on the "Team Information" page, because I clicked the button to create a page from the "POCs" page, the new page was created, and I was automatically moved to the empty page under "POCs".

<br>

## Layouts

The Layout settings are often overlooked, as you can only see the menu after clicking the button highlighted in red:

<img class="myImg" src="../images/confluence/basics-layout-example-1.png" alt="pagelayout-example-1" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

The first time you click this button, it will add existing content to a single section. If you have a lot of content, there isn't a way around it; you must add more sections and separate them manually.

<img class="myImg" src="../images/confluence/basics-layout-example-2.png" alt="pagelayout-example-1" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

From left to right:
1. This first section will allow you to include rows, by default when you add a new one, this will be placed below the one that you are currently placed.
2. This section will allow you to set the distribution of the section row.

### Cloud Differences

The base layout doesn't cover the entire page but applies to just one section, and you can add more as needed. The options remain the same, though it's likely designed this way to be more responsive.

<br>

## Macros

The magic behind Confluence.

<img class="myImg" src="../images/confluence/basics-macro-menu-example-1.png" alt="pagelayout-example-1" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

1. The plus button will open the menu where we can see standard macros.
2. Horizontal rule
3. Table of Contents.
4. Other macros: this last one will display the menu with the rest of the available macros installed.

For the following example we are going to search for the <span class="highlight">Code Block</span> macro.

<img class="myImg" src="../images/confluence/basics-macro-menu-example-2.png" alt="pagelayout-example-1" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

1. Using the search menu you can filter the results.
2. Click the macro.

For most macros, if not all, clicking it will open an insert menu for customization. Don't worry, you can always return to this menu by clicking 'edit' on the macro.

<img class="myImg" src="../images/confluence/basics-macro-menu-example-3.png" alt="pagelayout-example-1" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

Things to make clear about this section are:

The options will depend on the macro, but they are worth checking. In some cases, they are a bit complex and may require additional knowledge.
- The preview menu lets you see how your changes will be reflected.

In most cases, you will first need to include content to appreciate how it changes, so in the next section, we will do that.

<img class="myImg" src="../images/confluence/basics-macro-customization.gif" alt="pagelayout-example-1" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

For this example, we are setting properties.

- Those will be reflected in the after the macro name.

<br>

## Search

It is not a skill issue, it really sucks. But there are ways to get better results.

When using the search keep in mind the following:
  - Limit the scope:
    - Filter by Space
    - Filter by User
  - Add tags:

Most of these little improvements can be optimized.

## Permissions

// Explain certain limitations to take actions.

<br>

---

{% include chapter-nav.html %}
