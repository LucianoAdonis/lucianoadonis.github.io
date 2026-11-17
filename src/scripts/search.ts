/**
 * Pagefind wiring for the search popover. The index is written by
 * `pagefind --site dist` after the Astro build, so in `astro dev` it does not
 * exist yet and the panel says search isn't available.
 *
 * Shortcut: Cmd+K on Apple devices, Ctrl+K elsewhere. A single-character
 * shortcut like "/" would fail WCAG 2.1.4; one with a modifier does not.
 */
type PagefindResult = { url: string; excerpt: string; meta: Record<string, string> };
type Pagefind = {
  options: (o: Record<string, unknown>) => Promise<void>;
  init: () => Promise<void>;
  debouncedSearch: (q: string, o?: unknown, ms?: number) => Promise<{ results: { data: () => Promise<PagefindResult> }[] } | null>;
};

// One shared initialization: every keystroke awaits the same promise, so no search
// runs against a module whose options() and init() have not finished yet.
let loading: Promise<Pagefind | null> | undefined;

function load(): Promise<Pagefind | null> {
  loading ??= (async () => {
    try {
      const url = '/pagefind/pagefind.js';
      const engine = (await import(/* @vite-ignore */ url)) as Pagefind;
      await engine.options({ excerptLength: 26 });
      await engine.init();
      return engine;
    } catch {
      if (import.meta.env.DEV) console.info('Search index missing: run `make build`, then `make preview`.');
      return null;
    }
  })();
  return loading;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const isApple = () => /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);

/**
 * Pagefind falls back to prefix matches, so a nonsense query still "matches" a
 * lone letter somewhere. Keep a result only if it highlights a word that shares
 * at least three letters (or the whole query, if shorter) with a query word.
 */
function relevant(result: PagefindResult, query: string): boolean {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const marks = [...result.excerpt.matchAll(/<mark>(.*?)<\/mark>/g)].map((m) => m[1].toLowerCase());
  return marks.some((mark) =>
    words.some((w) => {
      const need = Math.min(3, w.length);
      return mark.slice(0, need) === w.slice(0, need) && mark.length >= need;
    })
  );
}

export function initSearch() {
  const panel = document.getElementById('search') as HTMLElement | null;
  const input = document.getElementById('search-input') as HTMLInputElement | null;
  const list = panel?.querySelector<HTMLOListElement>('.search-results');
  const status = panel?.querySelector<HTMLParagraphElement>('.search-status');
  if (!panel || !input || !list || !status) return;

  input.form?.addEventListener('submit', (event) => event.preventDefault());
  // Name the shortcut that works on this device: Cmd+K on Apple, Ctrl+K elsewhere.
  for (const kbd of document.querySelectorAll('[data-shortcut]')) if (isApple()) kbd.textContent = '⌘K';
  for (const btn of document.querySelectorAll('[aria-keyshortcuts]')) btn.setAttribute('aria-keyshortcuts', isApple() ? 'Meta+K' : 'Control+K');

  panel.addEventListener('toggle', (event) => {
    if ((event as ToggleEvent).newState === 'open') {
      // Opened by the button: focus and select. Opened by the shortcut: focus is
      // already there and the reader may have typed, so don't select over it.
      if (document.activeElement !== input) {
        input.focus();
        input.select();
      }
      void load();
    }
  });

  document.addEventListener('keydown', (event) => {
    const modifier = isApple() ? event.metaKey : event.ctrlKey;
    if (!modifier || event.altKey || event.shiftKey || event.key.toLowerCase() !== 'k') return;
    event.preventDefault();
    if (panel.matches(':popover-open')) {
      panel.hidePopover();
    } else {
      panel.showPopover();
      // Focus now, not in the async toggle event, or quick typing lands on the page.
      input.focus();
    }
  });

  let latest = 0;
  input.addEventListener('input', async () => {
    const query = input.value.trim();
    const ticket = ++latest;
    if (!query) {
      list.replaceChildren();
      status.textContent = '';
      return;
    }
    const engine = await load();
    if (ticket !== latest) return;
    if (!engine) {
      list.replaceChildren();
      status.textContent = "Search didn't load. Try again in a moment, or browse the shelf.";
      return;
    }
    const search = await engine.debouncedSearch(query, {}, 180);
    if (!search || ticket !== latest) return;
    const all = await Promise.all(search.results.slice(0, 16).map((r) => r.data()));
    if (ticket !== latest) return;
    const results = all.filter((r) => relevant(r, query)).slice(0, 8);
    status.textContent = results.length
      ? `${results.length} ${results.length === 1 ? 'page' : 'pages'} found`
      : `Nothing on the shelves matches "${query}".`;
    list.replaceChildren(
      ...results.map((r) => {
        const li = document.createElement('li');
        const href = r.url.replace(/\.html$/, '');
        const book = r.meta.book ? `<span class="result-book label">${escapeHtml(r.meta.book)}</span>` : '';
        // Pagefind escapes the page text in excerpts and only adds <mark>.
        li.innerHTML = `<a href="${escapeHtml(href)}">${book}<span class="result-title">${escapeHtml(r.meta.title ?? href)}</span><span class="result-excerpt">${r.excerpt}</span></a>`;
        return li;
      })
    );
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const first = list.querySelector('a');
      if (first) first.click();
    }
    // A search field's native Escape only clears the text; close the panel instead.
    if (event.key === 'Escape') {
      event.preventDefault();
      panel.hidePopover();
    }
  });

  // Give focus back to where the reader was when the panel closes.
  let opener: HTMLElement | null = null;
  panel.addEventListener('beforetoggle', (event) => {
    if ((event as ToggleEvent).newState === 'open') {
      const active = document.activeElement as HTMLElement | null;
      opener = active && active !== document.body && !panel.contains(active) ? active : document.querySelector<HTMLElement>('.search-open');
    }
  });
  panel.addEventListener('toggle', (event) => {
    if ((event as ToggleEvent).newState === 'closed') {
      const active = document.activeElement;
      if ((!active || active === document.body || panel.contains(active)) && opener?.isConnected) opener.focus();
    }
  });
}
