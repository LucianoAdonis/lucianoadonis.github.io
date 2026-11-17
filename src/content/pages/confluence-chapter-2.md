---
title: Page Structure
description: Structure Above Else
status: yellow
started: 2024-08-19
revised: 2026-03-04
book: confluence
chapter: 2
---

## Page Layouts

Often overlooked, [Page Layouts, Columns, and Sections](https://confluence.atlassian.com/doc/page-layouts-columns-and-sections-275188613.html) can significantly improve how you display content and help you to accentuate key points.

Instead of presenting a dense wall of text, you can break the page into columns, panels, and sections that guide the reader's eye.

### Making the Difference

The following page, a dummy (thanks, ChatGPT), would be your run-of-the-mill page in Confluence. Let's see it!

![A plain Confluence page for the Gotta Go Fast team: one long column with a big Sonic-style logo, a search box and headings for Mission, What We Do, Why Choose Us, How We Work, Meet the Team and How to Engage Us](../../assets/images/confluence/pagelayout-example-1.png)

- It doesn't have cohesion.
- It feels awkward.
- It looks like some jotted-down pointers from the new hire.

I'm not mean. It's just Digital Feng Shui. Now let's continue with an "arranged" version of it:

![The same page rearranged: intro text on the left, logo and search box on the right, Mission across the top, and What We Do, Why Choose Us and How We Work in three columns](../../assets/images/confluence/pagelayout-example-2.png)

- It could be improved! But it feels more natural and structured. They know what they are doing.
- Some extra colors may do some good, but let's keep it simple.

So, what happened? A few slight changes to the layout:

![The rearranged page in edit mode with eight red numbered markers on the heading, the section borders, the intro text, the logo, the Livesearch macro and the three-column section](../../assets/images/confluence/pagelayout-example-2-explanation.png)

1. The title was adjusted to Level 3 to avoid distracting the reader from the content.
2. A section was defined for only that item so it doesn't collide with others.
3. Moved the text to make for a lengthy introduction.
4. The logo is displayed on the side, in the same size.
5. The Livesearch macro will now have a text to display, and it's kept under the logo.
6. The double section is distributed in 2/3 to have more space for text.
7. The difference with this section is that it has three columns. Whatever works for you.
8. Sometimes, having a section acting as a separator is more straightforward than adding many new lines to persist the separation.

You may say that it looks good, but it lacks personality as it may work as a page for documentation but not for a team presentation. If that's the case, you can skip right to the [Panels, Cards, Sections, and Layouts](/pages/confluence-chapter-3#panels-cards-sections-and-layouts) section to see a more colorful example.

## Template Magic

One of the biggest problems that I have seen regarding people documenting is a lack of structure, so basically they expend more time wondering how to structure the page rather than sitting down to write.

By using a template you can limit the scope of the work, so instead of making something from nothing, they just have to fill the document with the proper information.

Before diving in types of structures, we have to discuss ways to make the Template more obvious to the casual Confluence User.

### Facilitate the Usage

Instead of creating a normal page by clicking the 'Create' button, you have to select the three dots at the side. If you or your admin promoted the template, it will appear in the first options, and you can select it and finally have the format.

There are more straightforward ways to achieve this, but you may understand why people always miss this.

[Add Page via Form](https://apps-docs.servicerocket.com/x/mglb?utm_medium=confluence&utm_source=macro_editor). In later sections, we will cover more Macros, but by now, this is what lets you define a button to create a page based on a defined template or Live Templates.

The Live Templates must be discussed separately, which can quickly get tricky.

### Complex Documents

An [Architecture Decision Record (ADR)](/pages/adrs) is a decent example of that. By "Complex" I'm referring to the length and the things that the page has to cover.

In short, a document that gets you information relevant to how things were, what were the options, what was proposed and how changes were applied. I can't state how helpful it is to have that for both onboarding (as context) and for internal agreements.

![A blank ADR-style template in edit mode with nine red numbered markers: the page tags icon, an In Review status badge, a comment, a Table of Contents macro, the Problem Statement title, a Warning macro, guiding comments, an Option 1 subtitle and a Code Block macro](../../assets/images/confluence/templates-example-1.png)

1. Page <span class="ui">Tags</span> can be part of the <span class="ui">template</span>! Make sure to set them.
2. The <span class="ui">Badge</span> Macro can help visualize the status.
3. This is a <span class="ui">Comment</span> you will be seeing a lot.
4. I have seen people trying to make an index manually. To avoid that awkwardness, the <span class="ui">Table of Contents</span> will take care of it. So they only focus on writing.
5. You'll find <span class="ui">Titles</span> already defined with the proper level, saving you time and effort.
6. A <span class="ui">Warning</span> shouldn't be used like that. But in this case it's enough to make something clear and have it as a reference that the macros exist.
7. The <span class="ui">Comments</span> can be helpful in clarifying the objectives of sections or other things to consider.
8. Example <span class="ui">Subtitle</span> with a <span class="ui">Comment</span> of the same level.
9. It's helpful to have some macros already in place, such as the <span class="ui">Code Block</span>, to convey the message that 'hey, this is possible and we've got you covered.'

### Simple Documents

After seeing the example of a Complex Document, you may wonder if you need much noise for everything. The answer is NO!

Where I'm currently working, we have two main patterns: for **Procedures** and **Troubleshooting**. Those can be summarized in:

- Predefined titles.
- Import of predefined requirements from a Datasource page.
- Short comments to guide the person's writing.
- Guidelines on how to format a few things:
  - Code: If the code/text in the block is lengthy, set it to "Expandable."
  - Images: size limited to a certain width and a border.

### Cloud Templates

The Cloud version has the advantage to have more variety and freedom to provide [Templates](https://www.atlassian.com/software/confluence/templates/categories/recommended).

From that link I picked just a few examples:

1. [Brainstorming](https://www.atlassian.com/software/confluence/templates/brainstorming)
![The Cloud Brainstorming template in edit mode, a table with moderator, participants, date and video call link, a contents list with emoji and a Planning section](../../assets/images/confluence/cloud-template-example-1.png)
    - In my opinion, the Cloud version seems to take more pride in using emojis, while Data Center docs often feel like they're trying to turn into RFCs or some other clunky format.

2. [Project Plan](https://www.atlassian.com/software/confluence/templates/project-plan):
![The Cloud Project Plan template in edit mode, a table of owner, approver, objective and status, then Problem statement and Scope sections with emoji headings](../../assets/images/confluence/cloud-template-example-2.png)
  - Besides Emojis and adding more colors, the main titles start at two, which is a good approach to avoid getting dizzy for the transition of a higher case to a paragraph type.
  <video class="clip" controls muted loop playsinline preload="none" width="760" height="110" poster="/media/confluence/cloud-template-example-2a.jpg" aria-label="Animation of the Brainstorming template planning section, a heading with an hourglass emoji over a table of objectives and method"><source src="/media/confluence/cloud-template-example-2a.mp4" type="video/mp4"></video>
  - Scrolling down there is a Macro that I haven't seen before:
  ![A Timeline section in the Cloud template with a planner roadmap, two swim lanes holding Feature 1, Feature 2, Feature 3, an iOS app and an Android app](../../assets/images/confluence/cloud-template-example-2b.png)
    - Quite handy if you ever need it.

While these templates are great and can save time, **remember that not everything that shines is gold**. You should look beyond predefined templates and customize your workflow. Don't feel constrained by the structure. Use these templates as a starting point, but have the insight to choose the right tools and create something unique.

The idea is not to go and reinvent the wheel but to have the insights to pick the right tools and come up with something interesting.

---
