#!/usr/bin/env node
// Lint content against the ```lint block at the end of VOICE.md.
//
//   ban /regex/ reason        any match is a violation, reported as file:line
//   cap N /regex/ reason      more than N matches in one file is a violation
//
// Front matter, fenced code and HTML comments are skipped; inline `code` is not.
// Patterns are Perl-flavoured as written in VOICE.md: runs of \xHH byte escapes are
// decoded as UTF-8 (so \xE2\x80\x94 is the em dash) before compiling.
//
// Usage: node scripts/voice-lint.mjs [files...]   (default: src/content/pages/**/*.md)
// Exit 0 clean, 1 violations, 2 the lint itself could not run (never a pass).
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const voicePath = join(root, 'VOICE.md');
if (!existsSync(voicePath)) { console.error('voice-lint: VOICE.md not found'); process.exit(2); }

const block = readFileSync(voicePath, 'utf8').match(/```lint\n([\s\S]*?)\n```/);
if (!block) { console.error('voice-lint: VOICE.md has no ```lint block'); process.exit(2); }

const decodeBytes = (src) =>
  src.replace(/(?:\\x[0-9A-Fa-f]{2})+/g, (run) => {
    const bytes = Buffer.from(run.split('\\x').filter(Boolean).map((h) => parseInt(h, 16)));
    return bytes.toString('utf8').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  });

const rules = [];
for (const line of block[1].split('\n')) {
  const m = line.match(/^(ban|cap (\d+))\s+\/(.+)\/\s+(.*)$/);
  if (!m) { if (line.trim()) { console.error(`voice-lint: cannot parse rule: ${line}`); process.exit(2); } continue; }
  try {
    rules.push({ kind: m[2] ? 'cap' : 'ban', limit: m[2] ? Number(m[2]) : 0, re: new RegExp(decodeBytes(m[3]), 'gm'), source: m[3], reason: m[4] });
  } catch (e) { console.error(`voice-lint: bad regex /${m[3]}/: ${e.message}`); process.exit(2); }
}
if (!rules.length) { console.error('voice-lint: the lint block has no rules'); process.exit(2); }

let files = process.argv.slice(2);
if (!files.length) {
  (function walk(dir) {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name.endsWith('.md') && !name.startsWith('_')) files.push(p);
    }
  })(join(root, 'src/content/pages'));
}
if (!files.length) { console.error('voice-lint: no files to lint'); process.exit(2); }

// Blank out skipped regions but keep line numbers stable.
const blank = (s) => s.replace(/[^\n]/g, ' ');
const prose = (text) =>
  text
    .replace(/^---\n[\s\S]*?\n---\n/, blank)
    .replace(/^(```|~~~)[\s\S]*?^\1[^\n]*$/gm, blank)
    .replace(/<!--[\s\S]*?-->/g, blank);

let violations = 0;
for (const file of files.sort()) {
  const text = prose(readFileSync(file, 'utf8'));
  const rel = relative(root, resolve(file));
  for (const rule of rules) {
    const hits = [...text.matchAll(rule.re)];
    if (rule.kind === 'ban') {
      for (const h of hits) {
        const line = text.slice(0, h.index).split('\n').length;
        console.log(`${rel}:${line}  ban  ${JSON.stringify(h[0])}  ${rule.reason}`);
        violations++;
      }
    } else if (hits.length > rule.limit) {
      console.log(`${rel}  cap ${rule.limit}  found ${hits.length}  /${rule.source}/  ${rule.reason}`);
      violations++;
    }
  }
}
console.log(`voice-lint: ${files.length} files, ${rules.length} rules, ${violations} violations`);
process.exit(violations ? 1 : 0);
