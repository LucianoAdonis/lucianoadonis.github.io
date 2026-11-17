import { getCollection, type CollectionEntry } from 'astro:content';
import { revisedOf } from './dates';

export type Page = CollectionEntry<'pages'>;
export type Status = Page['data']['status'];
export type ShelfId = NonNullable<Page['data']['shelf']>;

/** The author's own status words and their 2025 explanations, kept verbatim. */
export const STATUS: Record<Status, { label: string; note: string; fill: number }> = {
  green: { label: 'Nearly Done', note: 'Almost complete, polishing underway.', fill: 1 },
  yellow: { label: 'Draft', note: 'Work in progress, feedback welcomed!', fill: 0.75 },
  orange: { label: 'Jottings', note: 'Initial ideas and thoughts.', fill: 0.5 },
  red: { label: 'Barely Started', note: 'Structure in place, content coming.', fill: 0.25 },
};

export const SHELVES: { id: ShelfId; label: string }[] = [
  { id: 'tools', label: 'Work Tools' },
  { id: 'people', label: 'People and Teams' },
  { id: 'career', label: 'Career' },
  { id: 'theories', label: 'Theories' },
  { id: 'life', label: 'Life Admin' },
  { id: 'odds', label: 'Meta' },
];
export const shelfLabel = (id: ShelfId) => SHELVES.find((s) => s.id === id)?.label ?? id;

export function countWords(markdown: string | undefined): number {
  if (!markdown) return 0;
  const text = markdown
    .replace(/^(```|~~~)[\s\S]*?^\1[^\n]*$/gm, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ');
  return (text.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length;
}

/** The old site's rule: 200 words a minute, never less than one. */
export const minutesFor = (words: number) => Math.max(1, Math.round(words / 200));

export function chapterLabel(page: Page): string {
  if (page.data.label) return page.data.label;
  return page.data.chapter === undefined ? '' : `Chapter ${page.data.chapter}`;
}

export type Book = {
  page: Page;
  id: string;
  title: string;
  description: string;
  status: Status;
  shelf: ShelfId;
  hue: number;
  glyph: string;
  theme?: 'ds';
  chapters: Page[];
  words: number;
  minutes: number;
  started: Date;
  revised: Date;
};

type Library = {
  all: Page[];
  byId: Map<string, Page>;
  books: Book[];
  bookById: Map<string, Book>;
  loose: Page[];
};

let cached: Promise<Library> | undefined;

export function library(): Promise<Library> {
  cached ??= build();
  return cached;
}

async function build(): Promise<Library> {
  const all = await getCollection('pages');
  const byId = new Map(all.map((p) => [p.id, p]));

  const chaptersOf = new Map<string, Page[]>();
  for (const p of all) {
    if (!p.data.book || p.data.draft) continue;
    const list = chaptersOf.get(p.data.book.id) ?? [];
    list.push(p);
    chaptersOf.set(p.data.book.id, list);
  }
  for (const list of chaptersOf.values()) list.sort((a, b) => (a.data.chapter ?? 0) - (b.data.chapter ?? 0));

  const books: Book[] = all
    .filter((p) => p.data.shelf && p.data.spine && !p.data.draft)
    .map((p) => {
      const chapters = chaptersOf.get(p.id) ?? [];
      const parts = [p, ...chapters];
      const words = parts.reduce((n, part) => n + countWords(part.body), 0);
      return {
        page: p,
        id: p.id,
        title: p.data.title,
        description: p.data.description,
        status: p.data.status,
        shelf: p.data.shelf!,
        hue: p.data.spine!.hue,
        glyph: p.data.spine!.glyph,
        theme: p.data.theme,
        chapters,
        words,
        minutes: minutesFor(words),
        started: new Date(Math.min(...parts.map((x) => x.data.started.getTime()))),
        revised: new Date(Math.max(...parts.map((x) => revisedOf(x).getTime()))),
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const loose = all
    .filter((p) => !p.data.shelf && !p.data.book && !p.data.draft && !p.data.movedTo)
    .sort((a, b) => a.data.title.localeCompare(b.data.title));

  return { all, byId, books, bookById: new Map(books.map((b) => [b.id, b])), loose };
}
