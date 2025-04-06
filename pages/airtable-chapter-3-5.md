---
layout: custom
title: Airtable Scripting
description: Automating Tasks with Scripts
---

<div class="nav-buttons">
  <a href="/pages/airtable-chapter-2" class="custom-button left"><strong>Previous Chapter</strong></a>
  <a href="/pages/airtable-chapter-3" class="custom-button right"><strong>Next Chapter</strong></a>
</div>

---

<br>

# Introduction to Airtable Scripting

Airtable scripting allows you to automate tasks and extend the functionality of your bases using JavaScript. Whether you need to perform complex calculations, integrate with external services, or create custom workflows, scripts can help you achieve these goals.

<br>

# Getting Started with Scripts

[Content will go here]

<br>

# Basic Script Structure

[Content will go here]

<br>

# Script Examples

## Calculate Total Table Usage

```
let total = 0;
let tables = base.tables;

for (let table of tables) {
    let query = await table.selectRecordsAsync();
    total += query.records.length;
    output.text(`${table.name}: ${query.records.length} records`);
}

output.text(`\nTotal records across all tables: ${total}`);
```

## Total Usage with Estimations

```
// === CONFIG ===
let estimatedDailyGrowth = 50; // 👈 Change this to your average daily new rows
let maxRowsAllowed = 50000;    // 👈 Change based on your Airtable plan

// === COUNT RECORDS ===
let total = 0;
let tables = base.tables;
output.markdown("### 📋 Rows by Table");

for (let table of tables) {
    let query = await table.selectRecordsAsync();
    output.text(`${table.name}: ${query.records.length} records`);
    total += query.records.length;
}

output.markdown(`\n**🧮 Total rows:** ${total} / ${maxRowsAllowed}`);

let remaining = maxRowsAllowed - total;
let daysLeft = estimatedDailyGrowth > 0 ? Math.floor(remaining / estimatedDailyGrowth) : '∞';

output.markdown(`**📈 Est. daily growth:** ${estimatedDailyGrowth} rows/day`);
output.markdown(`**🕒 Days until limit:** ${daysLeft} days`);
```

## Export Tables Fields and Details in Markdown Format

```
let tables = base.tables;

let markdownOutput = '## Airtable Schema Overview\n\n';

for (let table of tables) {
    markdownOutput += `### 📄 Table: ${table.name}\n\n`;
    markdownOutput += '| Field Name | Type | Description | Default Value | Options |\n';
    markdownOutput += '|------------|------|-------------|---------------|---------|\n';

    for (let field of table.fields) {
        let options = '';

        if (field.type === "singleSelect" || field.type === "multipleSelects") {
            options = field.options?.choices ? field.options.choices.map(opt => opt.name).join(", ") : '';
        }

        let description = field.description ? field.description : 'N/A';
        let defaultValue = field.defaultValue ? field.defaultValue : 'N/A';

        markdownOutput += `| ${field.name} | ${field.type} | ${description} | ${defaultValue} | ${options} |\n`;
    }

    markdownOutput += '\n---\n';
}

// Output the result
output.text(markdownOutput);
```

<br>

# Best Practices and Tips

[Content will go here]

<br>

---

<div class="nav-buttons">
  <a href="/pages/airtable-chapter-2" class="custom-button left"><strong>Previous Chapter</strong></a>
  <a href="/pages/airtable-chapter-3" class="custom-button right"><strong>Next Chapter</strong></a>
</div>