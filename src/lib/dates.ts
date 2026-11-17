import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

/**
 * A page's "revised" date is the later of the date baked into its front matter
 * (its history before the move to Astro) and its newest content commit since.
 * Commits listed in .git-blame-ignore-revs (the migration, formatting sweeps)
 * do not count as revisions. CI must check out full history (fetch-depth: 0);
 * with a shallow clone this quietly falls back to the baked date.
 */

const ignored: Set<string> = (() => {
  try {
    return new Set(
      readFileSync('.git-blame-ignore-revs', 'utf8')
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l && !l.startsWith('#'))
    );
  } catch {
    return new Set();
  }
})();

const cache = new Map<string, Date | undefined>();

export function lastContentCommit(filePath: string): Date | undefined {
  if (cache.has(filePath)) return cache.get(filePath);
  let found: Date | undefined;
  try {
    const log = execFileSync('git', ['log', '--format=%H %cs', '--', filePath], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    for (const line of log.split('\n')) {
      const [hash, day] = line.split(' ');
      if (hash && day && !ignored.has(hash)) {
        found = new Date(`${day}T00:00:00Z`);
        break;
      }
    }
  } catch {
    found = undefined;
  }
  cache.set(filePath, found);
  return found;
}

export function revisedOf(entry: { filePath?: string; data: { revised: Date } }): Date {
  const fromGit = entry.filePath ? lastContentCommit(entry.filePath) : undefined;
  return fromGit && fromGit > entry.data.revised ? fromGit : entry.data.revised;
}

const monthYearFmt = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
const longFmt = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

export const monthYear = (d: Date) => monthYearFmt.format(d);
export const monthYearLong = (d: Date) => longFmt.format(d);
export const isoDay = (d: Date) => d.toISOString().slice(0, 10);
