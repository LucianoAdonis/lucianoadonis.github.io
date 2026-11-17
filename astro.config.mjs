// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://minibooks.lucianoadonis.com',
  // Every chapter has lived at /pages/<slug> since 2024 and those links were
  // pasted into chats; `file` keeps emitting pages/<slug>.html, which GitHub
  // Pages serves at the extensionless URL.
  build: { format: 'file' },
  trailingSlash: 'never',
  markdown: {
    processor: satteri({
      features: {
        // Curly quotes and ellipses, but never convert -- or --- into dashes:
        // the house style bans the em dash, and code-ish prose uses --flags.
        smartPunctuation: { quotes: true, dashes: false, ellipses: true },
      },
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
