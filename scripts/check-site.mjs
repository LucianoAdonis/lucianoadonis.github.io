#!/usr/bin/env node
// Structural checks over the built site in dist/. Run after `npm run build`.
//
//   legacy   every URL in scripts/legacy-urls.txt still resolves
//   links    every root-relative or relative href/src resolves, and #anchors exist
//   h1       every page has exactly one <h1>
//   leak     no raw Markdown (fences, links, images, table rules) in visible text
//
// Exit 0 clean, 1 findings, 2 nothing to check (never report that as clean).
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
if (!existsSync(join(dist, 'index.html'))) {
  console.error('check-site: dist/index.html missing, run `npm run build` first');
  process.exit(2);
}

const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== 'pagefind' && name !== '_astro') walk(p);
    } else if (name.endsWith('.html')) pages.push(p);
  }
})(dist);

const findings = [];
const add = (check, where, what) => findings.push(`${check.padEnd(6)} ${where}  ${what}`);

// Resolve a URL path to a file in dist, the way GitHub Pages does:
// exact file, then <path>.html, then <path>/index.html.
function resolveTarget(urlPath) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  const candidates = clean.endsWith('/')
    ? [join(dist, clean, 'index.html')]
    : [join(dist, clean), join(dist, clean + '.html'), join(dist, clean, 'index.html')];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile());
}

const idCache = new Map();
function idsOf(file) {
  if (!idCache.has(file)) {
    const html = readFileSync(file, 'utf8');
    idCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idCache.get(file);
}

// legacy
const legacy = readFileSync(join(root, 'scripts/legacy-urls.txt'), 'utf8')
  .split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
for (const url of legacy) {
  const target = url === '/' ? join(dist, 'index.html') : resolveTarget(url);
  if (!target || !existsSync(target)) add('legacy', url, 'no longer resolves');
}

const visibleText = (html) =>
  html
    .replace(/<(pre|code|script|style|template)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');

for (const file of pages) {
  const rel = '/' + relative(dist, file);
  // Inline scripts carry template strings like href="${x}"; only real markup counts.
  const html = readFileSync(file, 'utf8').replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, '');

  // links
  for (const m of html.matchAll(/\s(href|src)="([^"]*)"/g)) {
    const url = m[2];
    if (!url || /^(https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(url)) continue;
    if (url.startsWith('#')) {
      const id = decodeURIComponent(url.slice(1));
      if (id && !idsOf(file).has(id)) add('links', rel, `anchor ${url} has no target`);
      continue;
    }
    const abs = url.startsWith('/') ? url : '/' + relative(dist, join(dirname(file), url));
    const target = resolveTarget(abs);
    if (!target) { add('links', rel, `${m[1]}="${url}" does not resolve`); continue; }
    const hash = url.includes('#') ? decodeURIComponent(url.split('#')[1]) : '';
    if (hash && extname(target) === '.html' && !idsOf(target).has(hash)) add('links', rel, `${url}: anchor missing on target`);
  }

  // h1
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) add('h1', rel, `${h1} <h1> elements`);

  // leak
  const text = visibleText(html);
  for (const [name, re] of [['fence', /```/], ['md-link', /\]\(/], ['md-image', /!\[/], ['md-table', /\|\s*-{3,}/]]) {
    const hit = text.match(re);
    if (hit) add('leak', rel, `${name}: …${text.slice(Math.max(0, hit.index - 30), hit.index + 30).replace(/\s+/g, ' ')}…`);
  }
}

if (!pages.length) { console.error('check-site: no pages found in dist/'); process.exit(2); }
for (const f of findings) console.log(f);
console.log(`check-site: ${pages.length} pages, ${legacy.length} legacy URLs, ${findings.length} findings`);
process.exit(findings.length ? 1 : 0);
