---
title: Setting Up the Base
description: Data & Base, from a BrickEconomy CSV to a first Interface.
status: orange
started: 2025-03-31
revised: 2026-02-21
book: airtable
chapter: 2
---

## Data Source

By default, selecting the demo example will generate data and interfaces automatically, but that's boring! Let's try something different from scratch. I have an interesting use case that will provide us with engaging data to work with: BrickEconomy. If you're not familiar, it's a site that lets you track your LEGO inventory as if the pieces were stocks...

![The BrickEconomy home page, with its menu, a search box and a stats panel counting LEGO sets tracked and their combined value](../../assets/images/airtable/tutorial-00-brickeconomy.png)

There are several sites that help you manage your inventory and track prices. I've read that BrickEconomy's prices tend to be more optimistic compared to BrickLink. But this tutorial isn't about LEGO, at least not yet!

What makes this site valuable for our purposes is that we can export our product inventory as a CSV file, which we can then import into Airtable to explore most of its functionalities.

If you have faced a problem of keeping track of your things in spreadsheets you will know what could be the benefits. If you don't I'm glad that you are a healthy person.

### Importing the Data

By default this is how a base table will look:

![A new Airtable base called LEGO Base showing an empty Table 1 with Name, Notes, Assignee and Status fields and three blank rows, in the Spanish interface](../../assets/images/airtable/tutorial-00-brickeconomy-csv-import-0.png)

The first time that you are importing data it will display this menu:

![The Airtable import dialog previewing the BrickEconomy CSV, with columns like Number, Name, Theme, Subtheme, Year, Pieces and Minifigs](../../assets/images/airtable/tutorial-00-brickeconomy-csv-import-2.png)

- This menu will allow you to correct or recategorize fields.

### Considerations

<div data-review="new">

I'm still writing this part.

</div>

## Interface

### Creation

![The top bar of LEGO Base with the Interfaces tab highlighted by a yellow box](../../assets/images/airtable/tutorial-00-airtable-interface-0.png)

![The dialog that asks you to name your interface, with LEGO Base typed in and an icon picker below](../../assets/images/airtable/tutorial-00-airtable-interface-1.png)

![The page layout picker listing List, Gallery, Kanban, Calendar, Timeline, Form and Dashboard, with a Video tracker preview](../../assets/images/airtable/tutorial-00-airtable-interface-2.png)

![The same layout picker scrolled down, with Record review selected and an Employees preview on the right](../../assets/images/airtable/tutorial-00-airtable-interface-3.png)

![The Connect to a table step with the imported table selected and no filter, sort or group, previewing a list of sets and a detail panel for 7990-1](../../assets/images/airtable/tutorial-00-airtable-interface-4.png)

![The Connect to a table step again, now sorted and grouped by Theme so the list starts with the Minecraft sets](../../assets/images/airtable/tutorial-00-airtable-interface-4a.png)

![The Select elements step, a list of fields such as ReleasedDate, Retail, Paid, Value and Growth with toggles to show them](../../assets/images/airtable/tutorial-00-airtable-interface-4b.png)

![The Set a name step with Themes typed in as the name of the list](../../assets/images/airtable/tutorial-00-airtable-interface-4c.png)

### Small Optimizations

![The interface editor showing the Themes list grouped by theme on the left and the 21123-1 record on the right, with record settings in the side panel](../../assets/images/airtable/tutorial-00-airtable-interface-4d.png)

![The interface editor with the record list selected and outlined in red, and its data settings in the side panel](../../assets/images/airtable/tutorial-00-airtable-interface-4da.png)

![The record list settings, where the title field is Name and the fields below it are Subtheme and Number](../../assets/images/airtable/tutorial-00-airtable-interface-4db.png)

![The interface with a Theme dropdown filter added above the list, and the Group toggle left on](../../assets/images/airtable/tutorial-00-airtable-interface-4e.png)

### What's Next?

It looks decent, but is that all that we get?

![The BrickEconomy page for set 21123 LEGO Minecraft The Iron Golem, with its photo, a value chart and a Set Details panel](../../assets/images/airtable/tutorial-00-airtable-interface-image-0.png)

And the answer is no! We also have images! But where? That's what we're going to solve in the next chapter.

---
