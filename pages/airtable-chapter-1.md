---
layout: custom
title: Chapter 1
description: Basics Above Else
book: airtable
chapter: 1
status: red
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
- Search in airtable.

With these foundations in place, we'll be ready to dive into the real fun.

<br>

# Layers

Data
Logic
Interface

# Core Concepts

Airtable is like a spreadsheet on steroids. Here's what makes it special:

- **Base**: Your main workspace
    - Like an Excel workbook, but smarter
    - Can have multiple tables (sheets) that talk to each other
    - Everything in your project lives here

- **Table**: Where your data lives
    - Looks like a spreadsheet but acts like a database
    - Each column (field) has a specific type (text, number, date, etc.)
    - Can link data between tables (like a database)

- **Fields**: Your columns, but smarter
    - Each field has a specific type (text, number, date, etc.)
    - Can include attachments, links, and rich content
    - Can have formulas and rules

- **Views**: Different ways to see your data
    - Grid: Classic spreadsheet view
    - Kanban: Like Trello boards
    - Calendar: For dates
    - Gallery: For pictures
    - Form: For data entry
    - Gantt: For projects

- **Automation**: Make things happen automatically
    - Send notifications when data changes
    - Update records automatically
    - Connect with other tools

- **Interfaces**: Share your data beautifully
    - Create custom dashboards
    - Build forms for data entry
    - Control who sees what

The big difference from Excel/Google Sheets:
- Tables can talk to each other (like a database)
- More ways to view and organize data
- Built-in automation and apps
- Better for teams and complex projects

<br>

# Automation Approaches

There are integrations and plenty of things. But saddly, I haven't use a lot from those, as at the moment of writing this I was focused (at least at the beginning) on JIRA automation.

<br>

## Sync Tables

An interesting feature to get data from other tables outside of your base.

## API Sync

This is an endpoint configuration that allows you to make updates to a page associated with it. Once created from the integrations menu, it will give you a query like this:

```
curl -X POST "https://api.airtable.com/v0/{baseId}/{tableIdOrName}/sync/{apiEndpointSyncId}" \
-H "Authorization: Bearer YOUR_TOKEN" \
-H "Content-Type: text/csv" \
--data 'column1,column2
row1-column1,row1-column2
row2-column1,row2-column2'
```

That endpoint will be public.

### API Tutorial

One would expect to have an option to provide a way to upload a file, but no.

- [Create Tokens](https://airtable.com/create/tokens)
- [Post Sync API Endpoint](https://airtable.com/developers/web/api/post-sync-api-endpoint): 
- [Sync Integration API Details](https://support.airtable.com/docs/airtable-sync-integration-sync-api)

My workaround was to cat the CSV file:

```
curl -X POST "https://api.airtable.com/v0/{baseId}/{tableIdOrName}/sync/{apiEndpointSyncId}" \
-H "Authorization: Bearer YOURAWESOMETOKENHERE" \
-H "Content-Type: text/csv" \
--data "$(cat myspreedsheet.csv)"
```


And yes, because of this I had to export the table as CSV, but without the descriptions or descriptions updates, as it breaks the format...

But that wasn't the full extend of the problem! 5 days for us, it's about 118 records, were more than what it could handle. In theory it was 10.000 characters, I first I fought it was "ah 10K rows"


# Working With Data

Rather than rehashing the docs, I'll only add notes to stuff that's worth mentioning. Let's dive in!

## Data Cell Types

The core!

- **Text & Numbers**:
    - Single Line Text.
    - Long Text: you can enable Markdown, which can greatly impact the way that you have fields in <span class="highlight">Interfaces</span>, like formated links.
    - Number.
    - Currency.
    - Percent: this is one of the fields that you probably have seen before! You have an option that allows to display this information as a progress bar.
    - Rating: 5 stars, what else could I say?

- **Date & Time**:
    - Date
    - Date & Time
    - Duration

- **Structured Data**:
    - Single Select
    - Multiple Select
    - Checkbox
    - Attachments: this is where you place your images!
    - Link to Record: this will allow you to link to another table.
        - Or to records in the same spreadsheet. This will be a key element to generate charts with <span class="highlight">integrations</span>  like the Charts from Airtable.

## Common Formulas

- **Text Manipulation**:
    - `CONCATENATE()`: Joins text strings
    - `LEFT()`, `RIGHT()`: Extract characters
    - `FIND()`: Locate substrings
    - `SUBSTITUTE()`: Replace text
- **Numerical**:
    - `SUM()`, `AVERAGE()`: Basic calculations
    - `ROUND()`, `FLOOR()`, `CEILING()`: Number formatting
    - `MAX()`, `MIN()`: Value comparison
- **Logical**:
    - `IF()`: Conditional operations
    - `AND()`, `OR()`: Multiple conditions
    - `SWITCH()`: Multiple case handling

- **[Blank](https://support.airtable.com/docs/identifying-blank-values)**: if empty or 0.

## Advanced Formula Examples

 - Date & Time Calculations
    ```
    // Get working days between dates (excluding weekends)
    WORKDAY_DIFF({Start Date}, {End Date})

    // Add business days to a date
    WORKDAY_ADD({Start Date}, 10)

    // Format date as custom string
    DATETIME_FORMAT({Date Field}, 'MMMM D, YYYY')
    ```

 - Complex Text Processing

    ```
    // Extract domain from email
    REGEX_EXTRACT({Email}, '@(.+)$')

    // Create slug from title
    LOWER(
        SUBSTITUTE(
            REGEX_REPLACE({Title}, '[^a-zA-Z0-9\\s]', ''),
            ' ',
            '-'
        )
    )

    // Concatenate with conditional formatting
    IF(
        {Status} = 'Urgent',
        CONCATENATE('🚨 ', {Task Name}),
        {Task Name}
    )
    ```

- Lookup & Calculations
    ```
    // Weighted average calculation
    (SUM({Score} * {Weight})) / SUM({Weight})

    // Running total with conditions
    ROUND(
        SUM(
            IF(
                {Date} <= TODAY(),
                {Amount},
                0
            )
        ),
        2
    )
    ```

- Advanced Conditional Logic
    ```
    // Status based on multiple conditions
    SWITCH(
        TRUE(),
        {Progress} = 100, 'Complete',
        {Progress} >= 75, 'Almost Done',
        {Progress} >= 25, 'In Progress',
        {Progress} > 0, 'Just Started',
        'Not Started'
    )

    // Dynamic color coding
    IF(
        AND({Status} = 'Active', {Days Remaining} < 7),
        'red',
        IF(
            AND({Status} = 'Active', {Days Remaining} < 14),
            'yellow',
            'green'
        )
    )
    ```

- Array Operations
    ```
    // Unique values from linked records
    ARRAYUNIQUE(
        ARRAYFLATTEN(
            VALUES({Linked Records})
        )
    )

    // Count items matching criteria
    COUNTIF(
        SPLIT({Tags}, ','),
        'priority'
    )
    ```

- Array Operations
    ```
    # if empty use another field, otherwise use original
    IF(
        OR({Primary Field} = '', {Primary Field} = BLANK()),
        {Backup Field},
        {Primary Field}
    )
    ```

## Known Limitations & Workarounds

- **Data**:
    - Combining fields from a multiple or single select will result in repeated elements.
        - This may be fixed by using the <span class="highlight">Rollout</span> feature. This will filter along with the "ARRAY" formula.

# Premium vs Free Tier

If you ever consider this for personal use, then you need to keep the following in mind:

- Team:
    - Share publicly interfaces.
- Business:
    - Interface: filter elements from view

<br>

---

{% include chapter-nav.html %}
