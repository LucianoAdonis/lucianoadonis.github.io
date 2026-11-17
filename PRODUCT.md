# Product

## Register

brand

## Users

- **Colleagues the author sends a link to.** Someone new asks how something works and gets a link in Slack or Teams instead of a re-explanation. They read on a laptop at their desk, between meetings, usually one chapter, sometimes the chapter they were sent to and nothing else.
- **The author, later.** "The version of me who has forgotten everything": back to look up a method, a template, or an argument already worked out once.
- **Working technical people more broadly.** Cloud, infrastructure and development folks, some new managers. Busy, skeptical, and gone the moment something reads like a corporate memo or a marketing page.

## Product Purpose

A personal library of mini-books: short, structured, finishable collections of chapters, one topic each (work tools, interviews, a hiring theory, mentoring, troubleshooting, writing), written by one person from 2024 on and still changing. It exists to give a team a shared baseline and to give the author a link to send.

Success: a reader lands from a pasted link, reads the chapter they were sent to, and can see where the rest of the book is, how finished it is, and when it last changed. The author can add or revise a book by writing Markdown, without touching layout code.

## Brand Personality

Bookish, wry, practical. One person talking to a colleague over lunch: first person, honest about what is unfinished, funny by contrast and by analogy (Dark Souls, chess, Star Wars, LEGO), never corporate.

The site should feel like a shelf of well-made pocket paperbacks belonging to someone who reads a lot and plays games: warm, tactile, playful in the details, serious about reading comfort. The emotional goal is "this person actually knows this and is not selling me anything."

## Anti-references

- The site it replaces: the leap-day theme's blue gradient header, yellow banner bar and dark photo cards.
- Medium and Substack clones: a centered feed, avatar bylines, claps, newsletter pop-ups.
- Docs-site chrome (GitBook, Docusaurus): a left sidebar tree, version pickers, "edit this page" scaffolding. These are books, not API references.
- SaaS landing pages: a hero metric, gradient text, identical icon-and-heading card grids.
- Editorial-magazine affectation: italic display serif, drop caps, tracked mono labels above every section.

## Design Principles

1. **Reading first.** The chapter page is the product. Everything else exists to get a reader to a chapter and back.
2. **Honest status.** Every book shows how finished it is and when it last changed. Unfinished work is labeled, not hidden.
3. **Each book is an object.** A book has its own color and cover, so a shelf of twenty reads as twenty things, not one template repeated.
4. **The writing carries the jokes.** The interface stays quiet so the author's voice and references can be loud.
5. **Links are forever.** Every URL that was ever pasted into a chat keeps working.

## Accessibility & Inclusion

- WCAG 2.2 AA. Body text at least 4.5:1 on the paper tone; every book color checked against the text that sits on it.
- Status never relies on color alone: it always carries a word.
- Respects `prefers-reduced-motion` and `prefers-color-scheme`.
- Full keyboard path: skip link, visible focus, search reachable without a mouse.
- Real alt text on content images (a filename or a source URL is not alt text); decorative images are marked decorative.
- Readable at 200% zoom and at 320px width without horizontal scrolling.
