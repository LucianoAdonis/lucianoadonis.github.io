---
layout: custom
title: Confluence and You
description: I Would Marry Confluence
---

>"To plant a garden is to believe in tomorrow." – Audrey Hepburn

Based on my experience, when you facilitate the patterns and tools to make the process of documenting less taxing, people will be more willing to cooperate and improve things. When they see the value it provides, it is easier to invest time knowing that it will be helpful to someone, even if that person is yourself in the future.

The thing is, unless you have read or seen good examples, you probably don't know how to get to that point or what tools to use to get there or at least closer, so this mini-book tries to solve that!

I'll try to be as structured as possible when building from scratch rather than trying to jump into complex topics like Dynamic Documentation—oh yes, it gets better.


# Page Layout

Often overlooked, [Page Layouts, Columns and Sections](https://confluence.atlassian.com/doc/page-layouts-columns-and-sections-275188613.html) can significantly improve how you display content and help you to accentuate key points.

Instead of scrolling through a vertical monolith of text, you can use the page space to create a more dynamic and engaging structure.

The following page, which is a dummy (thanks, ChatGPT), would be your run-of-the-mill page in Confluence. Let's see it!

<img class="myImg" src="../images/confluence/pagelayout-example-1.png" alt="pagelayout-example-1" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

- It doesn't have cohesion.
- It feels awkward.
- It looks like some jotted-down pointers from the new hire.

I'm not mean. It is just Digital Feng Shui. Now let's continue with an "arranged" version of it:

<img class="myImg" src="../images/confluence/pagelayout-example-2.png" alt="pagelayout-example-2" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

- Could be improved! But it feels more natural and structured. Like they know what they are doing.
- Some extra colors may do some good, but let's keep it simple.

So, what happened? A few slight changes to the layout:

<img class="myImg" src="../images/confluence/pagelayout-example-2-explanation.png" alt="pagelayout-example-2-explanation" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">


1. The title was adjusted to Level 3 to avoid distracting the reader from the content.
2. A section was defined for only that item so it doesn't collide with others.
3. Moved the text to make for a lengthy introduction.
4. The logo is displayed on the side, in the same size.
5. The Livesearch macro will now have a text to display, and it's kept under the logo.
6. The double section is distributed in 2/3 to have more space for text.
7. The difference with this section is that it has three columns. Whatever works for you!
8. Sometimes, having a section acting as a separator is more straightforward than adding many new lines to persist the separation.

# Templates

One of the biggest problems that I have seen regarding people documentating is a lack of structure, so basically they expend more time wondering about how to do structure the page rather than sitting down to write.
By using a template you can reduce the scope of doing that and have a limited scope of what they need to provide, so instead of making something from nothing, they just have to fill with the proper information.

## Simple Documents


## Complex Documents


# Macros

Macros are plugins that enhance Confluence's functionality. A wide variety is available, from official options to community-created tools. While some are premium and offer advanced features, there are plenty of free options to explore.

You are probably already familiar with common plugins like [Code Block](https://confluence.atlassian.com/doc/code-block-macro-139390.html) and [Page Index](https://confluence.atlassian.com/doc/page-index-macro-182682092.html) macros.

But there are a lot more combinations that you can make from them. The following section will include a list of amazing Macros worth checking out. 
There will be examples of a few combinations and how to make the most of them.


## Amazing Macros 

I wouldn't suggest you going and trying all of them, instead go to the [next section](#simple-combination) to start learning simple combinations and go from there.

- [Multiexcerpt](https://confluence.atlassian.com/conf719/excerpt-macro-1157466743.html): Reuse text and images across pages by naming them.
- [Multiexcerpt Include](https://confluence.atlassian.com/conf719/excerpt-include-macro-1157466741.html): Import selected multiexcerpts from specified pages.
- [Table Excerpt](https://docs.stiltsoft.com/tfac/dc-server/how-to-use-table-excerpt-and-table-excerpt-include-macros-42241623.html): Reuse tables from one page to another.
- [Table Include](https://docs.stiltsoft.com/tfac/dc-server/how-to-use-table-excerpt-and-table-excerpt-include-macros-42241623.html): Import specific tables from other pages.
- [Table Filter](https://docs.stiltsoft.com/tfac/cloud/how-to-use-table-filter-macro-42239756.html): Query data across multiple pages.
- [Live Search](https://confluence.atlassian.com/conf719/livesearch-macro-1157466803.html): Add a search bar with predefined parameters.
- [Contributor Summary](https://confluence.atlassian.com/conf719/contributors-summary-macro-1157466730.html): Display recent updates from a page and its subpages.  
- [Expand Macro](https://confluence.atlassian.com/conf719/expand-macro-1157466749.html): Hide content, such as memes, within expandable sections.
- [Page Properties Report](https://support.atlassian.com/confluence-cloud/docs/insert-the-page-properties-report-macro/): Create reports from multiple pages using the Page Properties macro.
- [Definition List](https://www.smartics.eu/confluence/display/CONFMAC/Definition+List+Macro): Render terms and definitions in a list format.
- [Panel](https://confluence.atlassian.com/conf719/panel-macro-1157466870.html): Add a customizable colored panel to format text.
- [Page Properties](https://confluence.atlassian.com/conf719/page-properties-macro-1157466835.html): Combine with Page Properties Report to create a table of information from multiple pages.
- [Excerpt](https://confluence.atlassian.com/conf719/excerpt-macro-1157466743.html): Define a snippet of content for reuse on another page.
- [Live Search](https://confluence.atlassian.com/conf719/livesearch-macro-1157466803.html): Add a customizable search field to a page.
- [Table of Contents](https://confluence.atlassian.com/conf719/table-of-contents-macro-1157466923.html): Help readers navigate directly to specific sections of a page.
- [Background Color](https://docs.adaptavist.com/cfm4cs/latest/content-formatting-macros/background-color): Change the background color of a page.
- [Include Page](https://confluence.atlassian.com/conf85/include-page-macro-1283360210.html): Display content from another page or blog post.
- [Form](https://docs.adaptavist.com/f4cs/latest/usage/adding-a-form-to-a-page): Add a text box and submit button for creating a new page, with options for templates or parent pages.
- [Content Report Table](https://confluence.atlassian.com/conf85/content-report-table-macro-1283360159.html): Generate a content report in table format based on labels.
- [ChildTabs](https://docs.bitvoodoo.app/navitabs-tabs-for-confluence-data-center/?utm_source=bv-app&utm_medium=Editor&utm_campaign=Navitabs%20Child%20Tabs%20Macro): Navigate between pages easily; view content from child pages without opening multiple tabs.
- [Expand](https://confluence.atlassian.com/doc/expand-macro-223222352.html): Add expandable/collapsible sections to your page.
- [Alert](https://confluence.atlassian.com/doc/expand-macro-223222352.html): Create customizable alerts that display when a page loads.


## Simple Combination

If you’ve only got the mental bandwidth for a few Macros, prioritize the following macros to get quick results:

* [Multiexcerpt](https://confluence.atlassian.com/conf719/excerpt-macro-1157466743.html): I consider [Multiexcerpt Include](https://confluence.atlassian.com/conf719/excerpt-include-macro-1157466741.html) to be part of it, so it counts as one. This will allow you to reuse content in other pages. Like coding!
* [Table Filter](https://docs.stiltsoft.com/tfac/cloud/how-to-use-table-filter-macro-42239756.html): There are such great things that you can do with filters and queries. It's sad that you have to but at least is not painful!
- [ChildTabs](https://docs.bitvoodoo.app/navitabs-tabs-for-confluence-data-center/?utm_source=bv-app&utm_medium=Editor&utm_campaign=Navitabs%20Child%20Tabs%20Macro): For when you’ve got a bunch of subpages—this helps you keep it all organized without endless tabs.

In the following example, the main page "Macros Example" displays two results with the ChildTabs that are the pages under it. The context behind those pages will be explained in the Datasource Page's [example](#example-1), but for know you need two know that those are separated pages loaded simultaneously and quickly accessible through the parent page.

The cross reference between those is not limitated by location but just for simplicity.

<img class="myImg" src="../images/confluence/childtabs-macro-content-side-by-side.png" alt="childtabs-macro-content-side-by-side" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">


# Datasource Pages

Just like it sounds, a Datasource Page is where you consolidate information. With Macros like [Multiexcerpt](https://confluence.atlassian.com/conf719/excerpt-macro-1157466743.html) and [Table Include](https://docs.stiltsoft.com/tfac/dc-server/how-to-use-table-excerpt-and-table-excerpt-include-macros-42241623.html), you can save yourself a ton of headaches by keeping your source of truth and attached pages in sync.

If you ever change the name or something on the datasource page, it won’t break the pages that depend on it—it updates automatically. So go ahead, get creative!

## Structure

## Example
The reusable content can be anything that you can place in that box, so be either text or image it can be there. Of course, with the exception of tables which have their own macro to do that.

<img class="myImg" src="../images/confluence/multiexcerpt-example.png" alt="multiexcerpt-example" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

To include something you have to use the multiexcerpt include macro which will display you the available options in the page and a small preview of the content retrieved:

<img class="myImg" src="../images/confluence/multiexcerpt-include-macro-menu.png" alt="multiexcerpt-include-macro-menu" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

From the edition menu will look like this:

<img class="myImg" src="../images/confluence/multiexcerpt-include-macro-example.png" alt="multiexcerpt-include-macro-example" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

# Tagging

[Live Search](https://confluence.atlassian.com/conf719/livesearch-macro-1157466803.html) gets even better when you’re using proper tagging, so take the time to tag your content wisely.

[Go to Types of Pages](#types-of-pages) for more inspiration.

# Security & Limitations

Not much to say, just to complain.  

- There are not granular controls over the documentation by default. Basically an exclusive list or allow all. There is a solution sold by Confluence to have more visibility over everything for each type of implementation:
  - On-Prem: Tower.
  - Cloud: Guard.
- Page Ownership is only available in Cloud Version.


<!-- Single Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

<!-- CSS for Modal -->
<style>
.modal {
  display: none; /* Ensure the modal is hidden by default */
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.9); 
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
  align-items: flex-end; /* Align the content to the bottom */
  padding-bottom: 50px; /* Adjust this value to move the modal higher or lower from the bottom */
}

.modal-content {
  margin: auto;
  display: block;
  width: 95%; /* Increased width */
  max-width: 1200px; /* Increased max-width */
  height: auto; /* Ensure the height adjusts automatically */
  max-height: 80vh; /* Ensure it doesn't exceed 80% of the viewport height */
  object-fit: contain; /* Ensure the image scales properly */
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
</style>

<!-- JavaScript for Modal Functionality -->
<script>// Get the modal
var modal = document.getElementById("myModal");

// Get the modal image element
var modalImg = document.getElementById("img01");

// Ensure the modal is hidden on page load
window.onload = function() {
  modal.style.display = "none";
};

// Get all images with class "myImg" and loop through them to add the click event
var images = document.getElementsByClassName("myImg");
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "flex"; // Ensure the modal is displayed using flexbox
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Close the modal when clicking outside of the image
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Close the modal when pressing the "Esc" key
document.onkeydown = function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
}
