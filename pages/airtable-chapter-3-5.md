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

# Scripting

Airtable scripting allows you to automate tasks and extend the functionality of your bases using JavaScript. Whether you need to perform complex calculations, integrate with external services, or create custom workflows, scripts can help you achieve these goals.

<br>

## Getting Started

[Content will go here]

<br>

# Scripts

[Content will go here]

<br>

## Automation Scripting Examples

<br>

## Extension Scripting Examples

<details class="code-block">
  <summary>Calculate Total Table Usage</summary>
  <div class="code-container">
    <button class="copy-button" onclick="copyCode(this)">📋</button>
    <pre><code>let total = 0;
let tables = base.tables;

for (let table of tables) {
    let query = await table.selectRecordsAsync();
    total += query.records.length;
    output.text(`${table.name}: ${query.records.length} records`);
}

output.text(`\nTotal records across all tables: ${total}`);</code></pre>
  </div>
</details>

<details class="code-block">
  <summary>Total Usage with Estimations</summary>
  <div class="code-container">
    <button class="copy-button" onclick="copyCode(this)">📋</button>
    <pre><code>// === CONFIG ===
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
output.markdown(`**🕒 Days until limit:** ${daysLeft} days`);</code></pre>
  </div>
</details>

<details class="code-block">
  <summary>Export Tables Fields and Details in Markdown Format</summary>
  <div class="code-container">
    <button class="copy-button" onclick="copyCode(this)">📋</button>
    <pre><code>let tables = base.tables;

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
output.text(markdownOutput);</code></pre>
  </div>
</details>

<br>

# Best Practices and Tips

[Content will go here]

<br>

---

<div class="nav-buttons">
  <a href="/pages/airtable-chapter-2" class="custom-button left"><strong>Previous Chapter</strong></a>
  <a href="/pages/airtable-chapter-3" class="custom-button right"><strong>Next Chapter</strong></a>
</div>

<style>
.code-block {
  background-color: #f6f8fa;
  color: #000000;
  border-radius: 6px;
  margin: 1.5em 0;
  padding: 1em;
}

.code-container {
  position: relative;
  margin-top: 1em;
}

.copy-button {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  padding: 0.3em 0.6em;
  background-color: #FFCC01;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.2s;
}

.copy-button:hover {
  background-color: #FFE788;
}

.code-block pre {
  margin: 0;
  padding: 1em;
  overflow-x: auto;
  background-color: #000000;
  border-radius: 4px;
}

.code-block code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
  line-height: 1.4;
  display: block;
  background-color: #000000;
}

.code-block summary {
  font-weight: bold;
  cursor: pointer;
  color: #333;
  padding: 0.5em 0;
}

.code-block summary:hover {
  color: #000;
}
</style>

<script>
function copyCode(button) {
  const codeElement = button.parentElement.querySelector('code');
  const text = codeElement.textContent;
  
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.textContent;
    button.textContent = '✓';
    setTimeout(() => {
      button.textContent = '📋';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text:', err);
    button.textContent = '❌';
    setTimeout(() => {
      button.textContent = '📋';
    }, 2000);
  });
}
</script>