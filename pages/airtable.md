---
layout: custom
title: Airtable
description: Do you like documentation and standarization?
---

<div class="nav-buttons">
  <a href="/pages/confluence" class="custom-button right"><strong>Menu</strong></a>
  <a href="/pages/confluence-chapter-1" class="custom-button left"><strong>Chapter 1</strong></a>
</div>

---

Is the new Manager Meta using AirTable?

Well, kinda it is, it's cool and it has a lot of new features that lets you appear organized and professional, but what else?

One of the few phrases that I been hearing for the past year at the moment of writing this, is that all things must be imported to Airtable, but what does it even mean?

Still finding the meaning behind those words...

But as now, I can tell you that one of it's biggest features are the <span class="highlight">Interfaces</span> which to put it simple, it's the front end for your data. If you start from scratch, it may see simple, but if you select an example you will see that it has potential to become an inventory tool with submenus and all!

And this is the story of how micromonagement v2 started.


# Information Sync

## Sync Tables



## API Sync

Bsically an endpoint that allows you to make updates to a page associated with it. Once created from the integrations menu, it will give you a query like this, but without the data part:

```
curl -X POST "https://api.airtable.com/v0/{baseId}/{tableIdOrName}/sync/{apiEndpointSyncId}" \
-H "Authorization: Bearer YOUR_TOKEN" \
-H "Content-Type: text/csv" \
--data 'column1,column2
row1-column1,row1-column2
row2-column1,row2-column2'
```

## API Tutorial
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