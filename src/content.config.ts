import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One flat collection, one file per URL: src/content/pages/<slug>.md is served
 * at /pages/<slug>. A file is one of three things, decided by its front matter:
 *
 *   book landing  has `shelf` and `spine`        (appears on the home shelf)
 *   chapter       has `book` and `chapter`       (belongs to a book)
 *   loose page    has neither                    (listed under "odds and ends")
 */

export const SHELVES = ['tools', 'people', 'career', 'theories', 'life', 'odds'] as const;
export const STATUSES = ['green', 'yellow', 'orange', 'red'] as const;

const pages = defineCollection({
  loader: glob({
    base: './src/content/pages',
    pattern: ['**/*.md', '!**/_*.md'],
    // The default id generator slugifies, which turns `chapter-2.5` into
    // `chapter-25` and breaks URLs that have been shared since 2024.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1),
        description: z.string().min(1),
        status: z.enum(STATUSES),
        // Baked from git history at the migration (2026-11-17). The build shows the
        // later of `revised` and the newest content commit, so new edits need no bump.
        started: z.coerce.date(),
        revised: z.coerce.date(),

        // Book landing pages.
        shelf: z.enum(SHELVES).optional(),
        spine: z
          .object({
            hue: z.number().min(0).max(360),
            glyph: z.string().min(1),
          })
          .optional(),
        theme: z.enum(['ds']).optional(),

        // Chapters.
        book: reference('pages').optional(),
        chapter: z.number().optional(),
        label: z.string().optional(), // shown instead of "Chapter N", e.g. "References"

        // Any page.
        plate: image().optional(), // the opening image, shown under the title
        plateAlt: z.string().optional(),
        elsewhere: z
          .object({
            name: z.string(),
            url: z.url(),
            relation: z.enum(['superseded', 'related']),
            note: z.string(),
          })
          .optional(),
        draft: z.boolean().default(false),
      })
      .superRefine((d, ctx) => {
        const issue = (message: string, path: string) =>
          ctx.addIssue({ code: 'custom', message, path: [path] });
        if (d.book && d.chapter === undefined) issue('a chapter needs a `chapter` number', 'chapter');
        if (d.chapter !== undefined && !d.book) issue('`chapter` needs the `book` it belongs to', 'book');
        if (d.shelf && d.book) issue('a page is a book landing or a chapter, not both', 'shelf');
        if (d.shelf && !d.spine) issue('a book landing needs a `spine` (hue and glyph)', 'spine');
        if (d.plate && !d.plateAlt) issue('`plate` needs `plateAlt`', 'plateAlt');
        if (d.revised < d.started) issue('`revised` is earlier than `started`', 'revised');
      }),
});

export const collections = { pages };
