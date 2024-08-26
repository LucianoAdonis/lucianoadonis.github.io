---
layout: custom
title: Confluence
description: Style Above Else
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


You may say that it looks good, but it lacks personality as it may work as a page for documentation but not for a team presentation. If that's the case, you can skip right to the [Panels and Layout](#panels-cards-sections-and-layouts) section to see a more colorful example.


# Templates

One of the biggest problems that I have seen regarding people documentating is a lack of structure, so basically they expend more time wondering about how to do structure the page rather than sitting down to write.
By using a template you can reduce the scope of doing that and have a limited scope of what they need to provide, so instead of making something from nothing, they just have to fill with the proper information.

## Complex Documents

An [Architecture Decision Record (ADR)](./pages/adrs.md) is a decent example of that! By "Complex" I'm referring to the lenght and the things that the page has to aboard.

In short, a document that get's you information relevant of how things where, what where the options, what was proposed and how changes were applied. I cannot state how helpful is to have that for both onboarding (as context) and for internal agreedments.

<img class="myImg" src="../images/confluence/templates-example-1.png" alt="templates-example-1" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

1. Page tags can be part of the template! Make sure to set them.
2. The Badge Macro can help visualize the status. 
3. This is a comment you will be seeing a lot.
4. I have seen people trying to make an index manually. To avoid that awkwardness, we can leave it there, so they need only the basics.
5. You'll find titles already defined with the proper level, saving you time and effort.
6. A warning shouldn't be used like that, but enough to make something clear and have it as a reference that the macros exist.
7. The comments can be helpful in clarifying the objectives of sections or other things to consider.
8. Example subtitle with a comment of the same level.
9. It's helpful to have some macros already in place, such as the table of contents, to convey the message that 'hey, this is possible and we've got you covered!'


## Simple Documents

After seeing the example of a Complex Document, you may wonder if you need much noise for everything. The answer is NO!

Where I'm currently working, we have two main patterns: for **Procedures** and **Troubleshooting**. Those can be summarized in:

- Predefined titles.
- Import of predefined requirements from a Datasource page.
- Short comments to guide the person's writing.
- Guidelines on how to format a few things:
  - Code: If the code/text in the block is lengthy, set it to "Expandable."
  - Images: size limited to a certain width and a border.


# Macros

Macros are plugins that enhance Confluence's functionality. A wide variety is available, from official options to community-created tools. While some are premium and offer advanced features, there are plenty of free options to explore.

You are probably already familiar with common plugins like:
- [Code Block](https://confluence.atlassian.com/doc/code-block-macro-139390.html)
- [Page Index](https://confluence.atlassian.com/doc/page-index-macro-182682092.html)
- [Status](https://confluence.atlassian.com/doc/status-macro-223222355.html)
- [Info, Tip, Note, and Warning](https://confluence.atlassian.com/doc/info-tip-note-and-warning-macros-51872369.html)

But there are a lot more combinations that you can make from them. The following section will include a list of amazing Macros worth checking out. 
There will be examples of a few combinations and how to make the most of them.


## Amazing Macros 

I wouldn't suggest you going and trying all of them, instead go to the [next section](#simple-combination) to start learning simple combinations and go from there.

- [Multiexcerpt](https://confluence.atlassian.com/conf719/excerpt-macro-1157466743.html): Export multiple elements like text and images across Spaces and Pages, and reuse them with the [Multiexcerpt Include](https://confluence.atlassian.com/conf719/excerpt-include-macro-1157466741.html).
- [Table Excerpt](https://docs.stiltsoft.com/tfac/dc-server/how-to-use-table-excerpt-and-table-excerpt-include-macros-42241623.html): Reuse tables from one page to another by using the [Table Include](https://docs.stiltsoft.com/tfac/dc-server/how-to-use-table-excerpt-and-table-excerpt-include-macros-42241623.html) macro.
- [Table Filter](https://docs.stiltsoft.com/tfac/cloud/how-to-use-table-filter-macro-42239756.html): Query data across multiple pages.
- [Live Search](https://confluence.atlassian.com/conf719/livesearch-macro-1157466803.html): Add a search bar with predefined parameters.
- [Contributor Summary](https://confluence.atlassian.com/conf719/contributors-summary-macro-1157466730.html): Display recent updates from a page and its subpages.  
- [Expand Macro](https://confluence.atlassian.com/conf719/expand-macro-1157466749.html): Hide content, such as memes, within expandable sections.
- [Page Properties Report](https://support.atlassian.com/confluence-cloud/docs/insert-the-page-properties-report-macro/): Create reports from multiple pages using the Page Properties macro.
- [Definition List](https://www.smartics.eu/confluence/display/CONFMAC/Definition+List+Macro): Render terms and definitions in a list format.
- [Panel](https://confluence.atlassian.com/conf719/panel-macro-1157466870.html): Add a customizable colored panel to format text.
- [Deck of Cards](https://appfire.atlassian.net/wiki/spaces/CTFCSM/pages/471176665/Deck+of+Cards): tabs for multiple tabs made by individual [Cards](https://appfire.atlassian.net/wiki/spaces/CTFCSM/pages/471176639/Card).
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


# Macro Combinations

I would compare the Macros with Terraform functions. It is good to know that there are easier ways to do something, but you don't really make the most of the tool unless you have to push the boundaries and combine multiple functions on in this case Macros with a clear purpose.


## Quick Results

If you’ve only got the mental bandwidth for a few Macros, prioritize the following macros to get ahead of multiple documentations:

* [Multiexcerpt](https://confluence.atlassian.com/conf719/excerpt-macro-1157466743.html): I consider [Multiexcerpt Include](https://confluence.atlassian.com/conf719/excerpt-include-macro-1157466741.html) to be part of it, so it counts as one. This will allow you to reuse content in other pages. Like coding!
* [Table Filter](https://docs.stiltsoft.com/tfac/cloud/how-to-use-table-filter-macro-42239756.html): There are such great things that you can do with filters and queries. It's sad that you have to but at least is not painful!
- [ChildTabs](https://docs.bitvoodoo.app/navitabs-tabs-for-confluence-data-center/?utm_source=bv-app&utm_medium=Editor&utm_campaign=Navitabs%20Child%20Tabs%20Macro): For when you’ve got a bunch of subpages—this helps you keep it all organized without endless tabs.

In the following example, the main page "Macros Example" displays two results with the ChildTabs that are the pages under it. The context behind those pages will be explained in the Datasource Page's [example](#example-1), but for know you need two know that those are separated pages loaded simultaneously and quickly accessible through the parent page.

The cross reference between those is not limitated by location but just for simplicity.

<img class="myImg" src="../images/confluence/childtabs-macro-content-side-by-side.png" alt="childtabs-macro-content-side-by-side" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">


## Panels, Cards, Sections, and Layouts

The [Panel](https://confluence.atlassian.com/conf719/panel-macro-1157466870.html) allows to create a section with colored background, but you can get more creative and do more by also using it with [Deck of Cards](https://appfire.atlassian.net/wiki/spaces/CTFCSM/pages/471176665/Deck+of+Cards)

Let's begin with a new page example, the 'Cloud Guardians' team:
<img class="myImg" src="../images/confluence/panel-example-final-result.png" alt="panel-example-final-result" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

Compared to the first example of the 'Gotta Go Fast' team, it looks more imposing, even though it seems similar there are a lot of changes, but for now let's focus on the main ones:

- The page contains a logo with a background.
- Titles are in red color to match the theme.
- The content table is at the side with a slightly different color (baby powder to be specific).
- There is a section with tabs and cards containing information about products.

It may look that is not much different to configure but it has its nuances. Staring from the title:

<img class="myImg" src="../images/confluence/panel-example-configuration-1.png" alt="panel-example-configuration-1" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

- A <span style="color:blue">*Panel*</span> sets the background to match set the color. 
  - Knuckles SEGA logo remains the same but above.
  - The image for the title was generated with the [Font SpaceTech](https://www.fontspace.com/) site, using the Tech Headlines Font.
    - It looks invisible as I change it with the macOS image editor to be white and be compatible with the background.
- A simple line made with the [Horizontal Rule]() macro separates the contents from the logo.
  - No really much thought put into it, it felt right.
- Next section is divided with a layout of 2/3 
  - Titles start at level 2 with red color. This make it less weird the transition while reading from huge L1 text to normal size paragraph. 
  - We use the Panel macro with a background of #FAFFFD (Baby Powder color) to highlight the content section.
    - We make sure the content section contains the rule to start at level 2 otherwise it will have a weird indentation.



<img class="myImg" src="../images/confluence/panel-example-configuration-2.png" alt="panel-example-configuration-2" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">


Oh boy, this gets interesting. I removed one section from the first Card to display how it looks:

<img class="myImg" src="../images/confluence/panel-example-first-attempt.png" alt="panel-example-first-attempt" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">




<img class="myImg" src="../images/confluence/panel-example-nested-panels.png" alt="panel-example-nested-panels" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

<img class="myImg" src="../images/confluence/panel-example-bad-ending.png" alt="panel-example-bad-ending" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

<img class="myImg" src="../images/confluence/panel-example-palette.png" alt="panel-example-palette" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

<img class="myImg" src="../images/confluence/panel-sections-wcolors-example.gif" alt="panel-sections-wcolors-example" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

1. The color didn't felt right, for that purpose 


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
  - [Crowd (On-Prem)](https://www.atlassian.com/software/crowd).
  - [Guard (Cloud)](https://www.atlassian.com/software/access/capabilities).
- Someone could dump everything.
- Page Ownership is only available in Cloud Version.

# References

There isn't much from Confluence but there are a few sources that are worth looking:

- That YouTube Channel.
- Stuff.

{% raw %}
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
<script>
  // Get the modal
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
</script>
{% endraw %}
