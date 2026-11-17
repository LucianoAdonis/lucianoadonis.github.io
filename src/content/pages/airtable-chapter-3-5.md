---
title: Advanced Scripting
description: Taking your formulas to the next level.
status: red
started: 2025-04-06
revised: 2026-03-04
book: airtable
chapter: 3.5
---

## Scripting

Airtable scripting lets you automate tasks in your bases with JavaScript.

<div data-review="new">

I'm still writing this part.

</div>

### Extension Scripting Examples

<details class="code-block">
  <summary>Basic Filter</summary>

```js
let table = base.getTable("Tasks");
let query = await table.selectRecordsAsync();

// Filter by status
let filtered = query.records.filter(record => record.getCellValue("Status") === "Open");

for (let record of filtered) {
    output.text(`Open Task: ${record.name}`);
}
```

</details>

<details class="code-block">
  <summary>Keyword Search</summary>

```js
let table = base.getTable("Projects");
let searchTerm = await input.textAsync("Enter a keyword to search:");
let records = await table.selectRecordsAsync();

let matched = records.records.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase())
);

if (matched.length === 0) {
    output.text("No matches found.");
} else {
    matched.forEach(rec => output.text(`Found: ${rec.name}`));
}
```

</details>

<details class="code-block">
  <summary>Prompt with Continue / Abort</summary>

```js
// Place logic here
output.text("Plan to execute...");
let confirmed = await input.buttonsAsync("Do you want to proceed?", ["Continue", "Abort"]);
if (confirmed === "Abort") {
    output.text("Script aborted.");
    return;
}

// Place logic here
output.text("Continuing the script...");
```

</details>

<details class="code-block">
  <summary>Create New Record with Input</summary>

```js
let table = base.getTable("Ideas");

let ideaName = await input.textAsync("Enter the idea name:");
let category = await input.textAsync("Enter category:");

await table.createRecordAsync({
    "Name": ideaName,
    "Category": category
});

output.text("Idea submitted!");
```

</details>

<details class="code-block">
  <summary>Calculate Total Table Usage</summary>

```js
let total = 0;
let tables = base.tables;

for (let table of tables) {
    let query = await table.selectRecordsAsync();
    total += query.records.length;
    output.text(`${table.name}: ${query.records.length} records`);
}

output.text(`\nTotal records across all tables: ${total}`);
```

</details>

<details class="code-block">
  <summary>Total Usage with Estimations</summary>

```js
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

</details>

<details class="code-block">
  <summary>Export Tables Fields and Details in Markdown Format</summary>

```js
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

</details>

## Best Practices and Tips

<div data-review="new">

I'm still writing this part.

</div>

---
