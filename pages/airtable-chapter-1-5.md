---
layout: custom
title: Airtable - Chapter 1.5
description: Formula Examples & Use Cases
book: airtable
chapter: 1.5
status: red
category: educational
---

{% include chapter-nav.html position="top" %}


---

<br>

# Formula Examples & Use Cases

This chapter provides practical examples of common Airtable formulas to help you understand their real-world applications.

<br>

## Text Manipulation Examples

These formulas help you work with text fields:

```airtable
// Combine first and last name with proper spacing
CONCATENATE({First Name}, " ", {Last Name})

// Get first 3 characters of a product code
LEFT({Product Code}, 3)

// Get file extension from filename
RIGHT({Filename}, 4) // returns ".pdf", ".jpg", etc.

// Find if an email is from Gmail
IF(
    FIND("@gmail.com", LOWER({Email})) > 0,
    "Gmail User",
    "Other Email"
)

// Replace spaces with dashes for URL slugs
SUBSTITUTE({Title}, " ", "-")
```

<br>

## Numerical Examples

Common calculations and number formatting:

```airtable
// Calculate total cost with tax
ROUND(SUM({Price} * 1.21), 2)

// Round price to nearest dollar
CEILING({Raw Price}, 1)

// Find highest performing sales person
MAX({Sales Team Totals})
```

<br>

## Logical Examples

### Basic Conditions

```airtable
// Simple IF for status colors
IF({Status} = "Complete", "green", "red")

// Multiple conditions for task priority
AND({Due Date} < TODAY(), {Status} != "Complete")
```

### SWITCH Statement Magic

The SWITCH formula is a powerful alternative to nested IF statements. Here are two ways to use it:

1. Traditional Case Statement:
```airtable
// Progress status with emojis
SWITCH(
    {Progress},
    100, "✅ Complete",
    75, "🏃 Almost there",
    50, "👨‍💻 Halfway",
    25, "🌱 Just started",
    "📝 Not started"
)
```

2. Multiple Conditions (using TRUE()):
```airtable
// More flexible progress status
SWITCH(
    TRUE(),
    {Progress} = 100, "Complete",
    AND({Progress} >= 75, {Progress} < 100), "Final Stretch",
    AND({Progress} >= 25, {Progress} < 75), "In Progress",
    {Progress} > 0, "Just Started",
    "Not Started Yet"
)
```

### Real-World Example: Deal Classification

Here's a practical example using SWITCH to categorize deals:

```airtable
SWITCH(
    TRUE(),
    {Deal Value} >= 100000, "🐋 Whale",
    {Deal Value} >= 50000, "🐠 Big Fish",
    {Deal Value} >= 10000, "🐟 Fish",
    "🦐 Small Fish"
)
```

This is much more readable and maintainable than nested IF statements!

<br>

### Fiscal Year and Quarter

In the following Formula, we assume that your date table is called "Date" and there is extra logic to account for the the Fiscal Year Starting on October.

```
IF(
  {Date},
  "FY" &
  DATETIME_FORMAT(
    DATEADD({Date}, IF(MONTH({Date}) >= 10, 1, 0), "year"),
    "YY"
  ) &
  "Q" &
  SWITCH(
    MONTH({Date}),
    10, 1,
    11, 1,
    12, 1,
    1, 2,
    2, 2,
    3, 2,
    4, 3,
    5, 3,
    6, 3,
    7, 4,
    8, 4,
    9, 4
  )
)
```


## Pro Tips

1. Use SWITCH with TRUE() when you need multiple conditions
2. Add emojis to make your statuses more visual
3. Combine formulas for more complex operations
4. Remember that SWITCH can have a default value (last parameter)
5. Use comments to document complex formulas

<br>

---

{% include chapter-nav.html %}
