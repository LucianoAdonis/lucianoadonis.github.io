---
title: Chapter 3
description: Formulas and Integrations
status: red
started: 2025-03-31
revised: 2026-02-21
book: airtable
chapter: 3
---

## Formulas

In the last chapter, we noticied that we were missing the image attachment, which is understandable. But we need it! Trust me!

![pagelayout-example-2](../../assets/images/airtable/tutorial-00-airtable-interface-image-0a.png)

Right Click into the image and let's see what we get:

```
https://www.brickeconomy.com/resources/images/sets/21123-1_large-3.jpg
```

An URL... yeiii, which takes us to the image:

![pagelayout-example-2](../../assets/images/airtable/tutorial-00-airtable-interface-image-0b.png)

### Formula Field

Okay, what now?

![pagelayout-example-2](../../assets/images/airtable/tutorial-00-airtable-interface-image-1.png)

```
https://www.brickeconomy.com/resources/images/sets/ + product_id + 'larger-3.jpg'
```

![pagelayout-example-2](../../assets/images/airtable/tutorial-00-airtable-interface-image-2.png)

![pagelayout-example-2](../../assets/images/airtable/tutorial-00-airtable-interface-image-3.png)

After checking I realized that not all pictures responded to the "larger-3", so I went with "larger".

## Image Generation

There are 500+ records, we definitely won't get each image manually... so we need to automate getting the main image for our interface.

![pagelayout-example-2](../../assets/images/airtable/tutorial-00-airtable-interface-image-0.png)

There are three ways (at least) to accomplish this:

1. Airtable Scripting: most straightforward, requires Team plan.
2. MiniExtensions: can import images but you have to trigger the extension manually for each image... unless you pay the basic license (49 USD Monthly, a big nono)
3. Make: more of the same. I think this is more useful for refined workflows, so we will skip this.

But before doing that, we will need to find out the image path.

### Image From URL

Specially if you are getting data from an API, you won't get the image directly, but there are ways to obtain them!

![pagelayout-example-1](../../assets/images/airtable/tutorial-03-airtable-scripting-0.png)

- [Convert URLs to attachments](https://airtable.com/marketplace/scrkPFUb7UtqFRXSP/convert-urls-to-attachments): This script will download all attachments from a URL into an attachment field. The source field can be a URL field or any text field containing a URL. If your URL field contains multiple URLs, each URL should be on its own line

![pagelayout-example-1](../../assets/images/airtable/tutorial-03-airtable-scripting-1.png)

![pagelayout-example-1](../../assets/images/airtable/tutorial-03-airtable-scripting-2.png)

---
