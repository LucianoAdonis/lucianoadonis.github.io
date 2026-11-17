// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// Alegreya superfamily (Huerta Tipografica, Argentina), self-hosted at build time.
// Text face for reading, the sans for covers and headings, the small caps for
// spines and labels. Subsets cover English and Spanish.
/** @type {[string, ...string[]]} */
const subsets = ['latin', 'latin-ext'];

export default defineConfig({
  site: 'https://minibooks.lucianoadonis.com',
  // Every chapter has lived at /pages/<slug> since 2024 and those links were
  // pasted into chats; `file` keeps emitting pages/<slug>.html, which GitHub
  // Pages serves at the extensionless URL.
  build: { format: 'file' },
  trailingSlash: 'never',
  fonts: [
    {
      name: 'Alegreya',
      cssVariable: '--font-text',
      provider: fontProviders.fontsource(),
      weights: ['400 900'],
      styles: ['normal', 'italic'],
      subsets,
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Alegreya Sans',
      cssVariable: '--font-display',
      provider: fontProviders.fontsource(),
      weights: [500, 700, 800],
      styles: ['normal'],
      subsets,
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Alegreya Sans SC',
      cssVariable: '--font-caps',
      provider: fontProviders.fontsource(),
      weights: [500, 700],
      styles: ['normal'],
      subsets,
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
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
