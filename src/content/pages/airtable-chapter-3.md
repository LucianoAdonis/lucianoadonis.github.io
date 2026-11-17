---
title: Formulas and Integrations
description: Where the missing images come from, and how to get them.
status: orange
started: 2025-03-31
revised: 2026-02-21
book: airtable
chapter: 3
---

## Formulas

In the last chapter, we noticed that we were missing the image attachment, which is understandable. But we need it! Trust me!

![The BrickEconomy set page with the right-click menu open over the set photo and "Copiar dirección de imagen" (copy image address) outlined in red](../../assets/images/airtable/tutorial-00-airtable-interface-image-0a.png)

Right click on the image and let's see what we get:

```
https://www.brickeconomy.com/resources/images/sets/21123-1_large-3.jpg
```

A URL... yeiii, which takes us to the image:

![The LEGO Minecraft Iron Golem set photo opened on its own, floating on a black background](../../assets/images/airtable/tutorial-00-airtable-interface-image-0b.png)

### Formula Field

Okay, what now?

![Airtable's new field dialog, an Image URL formula field holding the image address typed in by hand, next to the table with its URL column](../../assets/images/airtable/tutorial-00-airtable-interface-image-1.png)

```
https://www.brickeconomy.com/resources/images/sets/ + product_id + 'larger-3.jpg'
```

![The Image URL formula field now built with CONCATENATE, joining the base address, the Number field and the file ending, with a live preview below](../../assets/images/airtable/tutorial-00-airtable-interface-image-2.png)

![The table with a new Image URL column filled in for every row, each link ending in large-3.jpg](../../assets/images/airtable/tutorial-00-airtable-interface-image-3.png)

After checking I realized that not all pictures responded to the "larger-3", so I went with "larger".

## Image Generation

There are 500+ records, we definitely won't get each image manually, so we need to automate getting the main image for our interface.

![The BrickEconomy page for set 21123 LEGO Minecraft The Iron Golem, with its photo, a value chart and a Set Details panel](../../assets/images/airtable/tutorial-00-airtable-interface-image-0.png)

There are three ways (at least) to accomplish this:

1. Airtable Scripting: most straightforward, requires Team plan.
2. MiniExtensions: can import images but you have to trigger the extension manually for each image... unless you pay the basic license (49 USD Monthly, a big nono)
3. Make: more of the same. I think this is more useful for refined workflows, so we will skip this.

But before doing that, we will need to find out the image path.

### Image From URL

Especially if you are getting data from an API, you won't get the image directly, but there are ways to obtain them!

![The Scripting extension page in Airtable's marketplace, with an Add extension button and a list of what scripts can do](../../assets/images/airtable/tutorial-03-airtable-scripting-0.png)

- [Convert URLs to attachments](https://airtable.com/marketplace/scrkPFUb7UtqFRXSP/convert-urls-to-attachments): This script will download all attachments from a URL into an attachment field. The source field can be a URL field or any text field containing a URL. If your URL field contains multiple URLs, each URL should be on its own line

![The Convert URLs to attachments script open in the editor, with its settings asking for a table, a URL field and an attachment field](../../assets/images/airtable/tutorial-03-airtable-scripting-1.png)

![The table after running the script, with an Image column showing a small thumbnail of each LEGO set next to its Image URL](../../assets/images/airtable/tutorial-03-airtable-scripting-2.png)

---
