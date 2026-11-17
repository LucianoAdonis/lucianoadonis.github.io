---
title: Script Limitations
description: Same-table backlinks, and other scripts.
status: red
started: 2025-04-06
revised: 2026-03-04
book: airtable
chapter: 3.9
---

## Limitations

<div data-review="new">

I'm still writing this part.

</div>

### Backlinks in the same table

https://builtonair.com/script/same-table-linked-records-backlinks/

>When you link one person to another, Airtable currently doesn’t show the backlink to who the “children” are to that “parent” person. With this script, it automatically within the same table generate those links for you. It will show you who the “children” are to that “parent”.

<details class="code-block">
  <summary>Same Table Backlinks Script</summary>

```js
/*****
 * Title: Same Table Backlinks
 * License: MIT
 * Author: Openside (Team behind On2Air products and BuiltOnAir community)
 * Sites:
 * https://openside.com - Openside Consulting Services
 * https://openside.com/#products - On2Air Products
 * https://builtonair.com - All things Airtable Community
 * 
 * Reach out for all your Airtable needs
 * 
 * Explainer Video: https://www.loom.com/share/9f90bb7bf95b4581a12a9750edb3a376
 * 
 * Description: Typically when creating a Linked Records to another table,
 * it will auto-create a field on the other table holding the backlinks back to the current table.
 * However, when creating links within the same table, it does not generate the 2nd backlink field.
 * 
 * This script will do that for you.  This is useful to see where a single table linked record field
 * is in use within the same field.
 * 
 * Instructions: Configure the links array below with the information to generate the links.
 * If no links are configured, it will ask for user input, so its ok to leave blank.
 * 
 * The 3 configuration items are:
 * table: The table name containing the linked record
 * view: (Optional) if set, then will filter records to check based on the view
 * source: The field name that is a linked record to the same table that is what
 * you are already updating. This field does not get modified.
 * dest: The destination field that will determine all the places each record is used as a source.
 * This field will get replaced each time script is ran
 * 
 */

//-------------START CONFIGURATION ------------------//

let links = [
    // {
    //     table:"Family Tree",
    //     view: '',
    //     source:"Parents",
    //     dest:"Children"
    // },
    // {
    //     table:"Family Tree 2",
    //     source:"Parents",
    //     dest:"Children"
    // }
]
//-------------END CONFIGURATION ------------------//

if(!links || !links.length){
    output.markdown("## Select Your Settings to Setup Children Links")
    let table = await input.tableAsync("Select The table")
    let source = await input.fieldAsync("Select The Source Field",table.id)
    let dest = await input.fieldAsync("Select The Destination Field",table.id)
    links.push({table:table.id,source:source.name,dest:dest.name})
}


const syncLinks = async( tableId, source, dest, viewName = '' ) => {
    
    let table = base.getTable(tableId)
    output.markdown(`#### Syncing - '${table.name}': '${source}' -> '${dest}'`)
    let view = viewName ? table.getView(viewName) : null
    let recordsFull = view ? await view.selectRecordsAsync() : await table.selectRecordsAsync()
    let records = recordsFull.records
    let len = records.length



    const findChildren = async() => {
        let tree = {}
        const setTree = ( parent, kid) => {
            if(!tree[parent])tree[parent] = []
            tree[parent].push({id:kid})
        }
        for(let t=0;t<records.length;t++){
            let rec = records[t]
            let parents = rec.getCellValue(source)
            
            if(parents && parents.length){
                for(let p=0; p<parents.length; p++){
                    
                    setTree(parents[p].id, rec.id)

                }
            }
        }
        output.text("------------------------------------")
        let parentKeys = Object.keys(tree)
        let queue = []
        for(let i=0; i<parentKeys.length; i++){
            let pKey = parentKeys[i]
            let kids = tree[pKey]
            queue.push({id:pKey,fields:{[dest]: kids}})
            if(queue.length === 50){
                await table.updateRecordsAsync(queue)
                output.text("... "+(i+1))
                queue = []
            }
        }
        if(queue.length){
            await table.updateRecordsAsync(queue)
            output.text("... "+ parentKeys.length)
            queue = []
        }

    }
    await findChildren()

}

output.clear()
output.markdown("## Table Syncing Starting....")
for(let l=0; l<links.length;l++){
    let link = links[l]
    await syncLinks( link.table, link.source, link.dest, link.view || '' )
}
output.markdown("### Syncing Completed.")



//THIS WAS FOR GENERATING THE PARENT LINKS//TESTING ONLY//
// const getRandomInt = (max) => {
// return Math.floor(Math.random() * Math.floor(max));
// }
// const setParents = async() => {
//     for(let t=0;t<records.length;t++){
//         let rec = records[t]
//         let parents = []
//         let otherParent = -1
//         while(parents.length < 2){
//             let pIndex = getRandomInt(len)
//             if(pIndex != t && pIndex !== otherParent){//cant be your own parent or have 2 of same
//                 parents.push({id:records[pIndex].id})
//                 otherParent = pIndex
//             }
//         }
//         await table.updateRecordAsync(rec.id,{
//             [SOURCE_FIELD]:parents
//         })
//     }
// }
// //await setParents()
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

---
