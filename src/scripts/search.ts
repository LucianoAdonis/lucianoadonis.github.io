/**
 * Pagefind wiring for the search popover. The index is written by
 * `pagefind --site dist` after the Astro build, so in `astro dev` the import
 * fails and the panel says how to get it.
 */
type PagefindResult = { url: string; excerpt: string; meta: Record<string, string> };
type Pagefind = {
  options: (o: Record<string, unknown>) => Promise<void>;
  init: () => Promise<void>;
  debouncedSearch: (q: string, o?: unknown, ms?: number) => Promise<{ results: { data: () => Promise<PagefindResult> }[] } | null>;
};

let pagefind: Pagefind | null | undefined;

async function load(): Promise<Pagefind | null> {
  if (pagefind !== undefined) return pagefind;
  try {
    const url = '/pagefind/pagefind.js';
    pagefind = (await import(/* @vite-ignore */ url)) as Pagefind;
    await pagefind.options({ excerptLength: 26 });
    await pagefind.init();
  } catch {
    pagefind = null;
  }
  return pagefind;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function initSearch() {
  const panel = document.getElementById('search') as HTMLElement | null;
  const input = document.getElementById('search-input') as HTMLInputElement | null;
  const list = panel?.querySelector<HTMLOListElement>('.search-results');
  const status = panel?.querySelector<HTMLParagraphElement>('.search-status');
  if (!panel || !input || !list || !status) return;

  input.form?.addEventListener('submit', (event) => event.preventDefault());

  panel.addEventListener('toggle', (event) => {
    if ((event as ToggleEvent).newState === 'open') {
      input.focus();
      input.select();
      void load();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target as HTMLElement;
    if (target.closest('input, textarea, select, [contenteditable="true"]')) return;
    event.preventDefault();
    panel.showPopover();
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
      status.textContent = 'Search runs on the built site: npm run build, then npm run preview.';
      return;
    }
    const search = await engine.debouncedSearch(query, {}, 180);
    if (!search || ticket !== latest) return;
    const results = await Promise.all(search.results.slice(0, 8).map((r) => r.data()));
    if (ticket !== latest) return;
    status.textContent = results.length ? '' : `Nothing on the shelves matches "${query}".`;
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
  });
}
