---
title: Obsidian
description: Okay, It's Worth It
status: orange
started: 2024-09-02
revised: 2026-02-21
shelf: tools
spine:
  hue: 280
  glyph: gem
plate: ../../assets/images/headers/grey-obsidian-graph-view-version-two.png
plateAlt: Obsidian graph view on a dark grey background, with colored dots linked by thin lines into clusters around a few bigger hub notes and a few small loose groups at the edges
---

Taking notes has always been a problem to solve for me, until the algorithm surfaced Obsidian and its neuron-like way of displaying links between "ideas".

It really takes a weight off my shoulders. A lot of information, a lot of plans, and even if you think you don't have them, you may, you just aren't aware.

A folder structure doesn't show you that. The graph shows what connects to what, so you start to see patterns in your thinking that a list hides. That information and those plans were scattered all over the place with no way to see the relationships, and that's the thing Obsidian fixes.

---

## Plugins

### Start With the Core Ones

Obsidian ships with built-in plugins, and they're off by default. Go to **Settings → Core plugins** and enable:

- **Graph view**: the node-link display that shows how your notes connect. More on this below.
- **Templates**: lets you define reusable note structures. Useful for meeting notes, project pages, or daily logs.
- **Daily notes**: creates a new note for each day with a single command. Good for capture and journaling.
- **Backlinks**: shows every note that links to the one you're reading. Helps you discover connections you forgot you made.
- **Outgoing links**: the reverse, shows what the current note points to. Useful when reviewing old notes.
- **Tags**: adds a tag pane to the sidebar for browsing notes by tag.

### Community Plugins Worth Adding

Go to **Settings → Community plugins → Browse**. A few that change how the tool works:

- **Dataview**: query your notes like a database. You can ask things like "show me all notes tagged `#project` created this week" and get a live table. Steep learning curve, high ceiling.
- **Templater**: more powerful version of the core Templates plugin. Supports dynamic values like current date, prompts, and JavaScript snippets.
- **Calendar**: adds a small calendar to the sidebar. Each day links to that day's daily note. Simple and very useful.
- **Obsidian Git**: automatically commits and pushes your vault to a GitHub repository. Free backup with version history, no subscription.
- **QuickAdd**: fast capture. One hotkey to create a note from a template or append a line to an existing note without leaving what you're doing.
- **Tasks**: adds task management across notes. You can query all open tasks across the entire vault regardless of which note they live in.

---

## Organizing Your Vault

There are two main philosophies and both work. The trap is trying to find the "right" one before you have any notes.

**Folder-based**: organize by topic, project, or status. The PARA method (Projects, Areas, Resources, Archives) by Tiago Forte maps well here. Easy to understand, and familiar from any file system.

**Link-based**: use a mostly flat structure and rely on links between notes to create organization. This is the Zettelkasten approach. Notes end up organized by relationship rather than by location.

Most people land on a hybrid. A few top-level folders for broad categories, and within them, notes connected to each other rather than sorted into subfolders.

One pattern worth trying is the **Map of Content (MOC)**: a note that serves as an index for a topic. Instead of a folder called `Work`, you have a note called `Work` that links to every work-related note. You can still have the folder, but the MOC is the real entry point, easier to maintain and it shows relationships a folder can't.

Don't over-engineer the folder structure early. Obsidian's search and graph make notes findable even when the filing is messy.

---

## Tags and Links

### Internal links

```
[[Note name]]               link to a note
[[Note name|Display text]]  link with a custom label
[[Note name#Heading]]       link to a specific heading
![[Note name]]              embed the full note inline
![[image.png]]              embed an image
```

Type `[[` anywhere in a note to trigger autocomplete. Obsidian searches your vault as you type.

### Tags

Add tags anywhere in the note body with `#tagname`. You can also declare them in the frontmatter:

```yaml
---
tags: [work, project, q1]
---
```

Nested tags work with a slash: `#work/project` or `#area/health`. This lets you browse by parent category in the tag pane without creating a long flat list.

A few conventions that help:

- Use tags for type or status: `#draft`, `#reference`, `#person`, `#project`
- Use links for relationships: link to a note about a project rather than tagging everything with the project name

### Aliases

If you want to link to a note by a different name, add aliases in the frontmatter:

```yaml
---
aliases: [Q1 planning, planning doc]
---
```

Typing `[[Q1 planning]]` will resolve to the note even if the actual filename is something else. Useful when a concept has multiple common names.

---

## The Graph View

Open it with **Cmd+G** on Mac or **Ctrl+G** on Windows, or click the graph icon in the left sidebar.

Every note is a dot and every link is a line, and notes with more connections show up bigger. Notes with no links sit alone at the edges, and that's how you spot the orphans.

**Local graph**: while inside a note, right-click the graph icon and choose "Open local graph." This shows only the current note and its immediate connections. More useful day-to-day than staring at the full vault.

**Filtering**: in the graph controls panel (top-right corner of the graph view) you can filter by tag, folder, or file path. Useful for focusing on one project without the rest of the vault cluttering the view.

**Groups**: color-code nodes by tag or folder. Open graph controls and add a group with a query like `tag:#project`. Each group gets its own color. With a few groups the graph gets a lot easier to read.

Expect the graph to be most useful for finding unexpected connections and spotting orphaned notes. Watching it grow over months is also satisfying.

---

## Other Things Worth Using

**Canvas**: built into Obsidian since version 1.1, no plugin required. A free-form board where you can place notes, images, cards, and web pages, then draw connections between them. Good for planning, brainstorming and mapping out relationships that don't fit into linear notes.

**Callouts**: native syntax for highlighted blocks, no plugin needed:

```markdown
> [!note]
> A standard note callout.

> [!warning]
> Something to be careful about.

> [!tip]
> Other types: info, success, question, danger, example, quote.
```

**Quick switcher**: **Cmd+O** on Mac or **Ctrl+O** on Windows. Fuzzy search across all note titles. Faster than the file explorer once you have more than a handful of notes.

**Mermaid diagrams**: Obsidian renders Mermaid natively inside fenced code blocks:

````markdown
```mermaid
graph TD
    A[Problem] --> B[Reproduce it]
    B --> C[Identify cause]
    C --> D[Fix and verify]
```
````

**Themes**: **Settings → Appearance → Themes**. The default is clean. Minimal and Things are probably the popular community themes if you want something different. Themes only change the looks, nothing functional.

**Sync options**: Obsidian Sync is the official paid option and probably the smoothest. Free alternatives: iCloud works well on Apple devices, and Obsidian Git works on any platform with a GitHub account. The vault is just a folder of plain text files, so any cloud sync service works at the most basic level.
