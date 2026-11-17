/**
 * Progressive enhancements. Everything here is optional: without JavaScript the
 * text, images, tables and code all still read; these make them easier to use.
 */

const prose = document.querySelectorAll<HTMLElement>('.prose');

// One polite status line per page, for results that only change a button's text.
const statusLine = document.createElement('p');
statusLine.className = 'vh';
statusLine.setAttribute('role', 'status');
document.body.append(statusLine);
const announce = (text: string) => {
  statusLine.textContent = '';
  window.setTimeout(() => (statusLine.textContent = text), 50);
};

// The nearest heading above an element, to name things after the section they sit in.
function sectionName(el: Element): string {
  for (let node: Element | null = el; node && !node.matches('.prose'); node = node.parentElement) {
    for (let prev = node.previousElementSibling; prev; prev = prev.previousElementSibling) {
      if (/^H[2-4]$/.test(prev.tagName)) return prev.textContent?.trim() ?? '';
    }
  }
  return '';
}

// Wide tables scroll inside their own box instead of pushing the page sideways.
for (const table of document.querySelectorAll<HTMLTableElement>('.prose table')) {
  const box = document.createElement('div');
  box.className = 'table-scroll';
  table.replaceWith(box);
  box.append(table);
  if (box.scrollWidth > box.clientWidth + 1) {
    const where = table.caption?.textContent?.trim() || sectionName(box);
    box.tabIndex = 0;
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', where ? `${where}, table, scrolls sideways` : 'Table, scrolls sideways');
  }
}

// Copy buttons on code blocks.
for (const pre of document.querySelectorAll<HTMLPreElement>('.prose pre')) {
  const code = pre.querySelector('code') ?? pre;
  const lang = pre.dataset.language;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-code';
  button.textContent = 'Copy';
  button.setAttribute('aria-label', lang && lang !== 'plaintext' ? `Copy ${lang} code` : 'Copy code');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent ?? '');
      button.textContent = 'Copied';
      announce('Copied to the clipboard');
    } catch {
      // No clipboard access: select the code so the reader's own copy works.
      window.getSelection()?.selectAllChildren(code);
      button.textContent = 'Selected';
      announce('Code selected, copy it with your usual shortcut');
    }
    window.setTimeout(() => (button.textContent = 'Copy'), 1800);
  });
  pre.append(button);
}

// The old site's hover previews ("peeks"), as buttons that show the picture
// inline, so they work with a keyboard and on a phone.
document.querySelectorAll<HTMLElement>('.prose span.peek[data-image]').forEach((span, i) => {
  const id = `peek-${i}`;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'peek';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', id);
  button.innerHTML = span.innerHTML;

  const figure = document.createElement('figure');
  figure.className = 'peek-figure';
  figure.id = id;
  figure.hidden = true;
  const img = document.createElement('img');
  img.alt = span.textContent?.trim() ?? '';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.src = span.dataset.image!;
  figure.append(img);

  span.replaceWith(button);
  const host = button.closest('li, td, th');
  if (host) host.append(figure);
  else (button.closest('p') ?? button).after(figure);

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    figure.hidden = open;
  });
});

// Screenshots wider than the column can open out to full width, in place.
// The width attribute is the source's own width; with srcset, naturalWidth is
// only the candidate the browser picked.
function offerWider(img: HTMLImageElement) {
  const holder = img.parentElement;
  if (!holder || img.closest('button, a, .peek-figure')) return;
  const sourceWidth = Number(img.getAttribute('width')) || img.naturalWidth;
  if (sourceWidth < img.clientWidth * 1.2) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'widen';
  button.setAttribute('aria-pressed', 'false');
  button.setAttribute('aria-label', `Show wider: ${img.alt || 'image'}`);
  img.replaceWith(button);
  button.append(img);
  button.addEventListener('click', () => {
    const wide = holder.classList.toggle('is-wide');
    button.setAttribute('aria-pressed', String(wide));
  });
}
for (const root of prose) {
  for (const img of root.querySelectorAll<HTMLImageElement>('p > img')) {
    if (img.complete && img.clientWidth) offerWider(img);
    else img.addEventListener('load', () => offerWider(img), { once: true });
  }
}

// Spine slips: open on the side with room, and close on Escape (WCAG 1.4.13).
const spines = document.querySelectorAll<HTMLElement>('.spine');
for (const spine of spines) {
  const place = () => {
    const rect = spine.getBoundingClientRect();
    const slip = Math.min(288, window.innerWidth * 0.8);
    spine.dataset.edge = rect.right + 12 + slip > document.documentElement.clientWidth - 8 ? 'end' : 'start';
  };
  const reset = () => delete spine.dataset.slip;
  // A new hover is a new request: a slip dismissed with Escape may show again.
  spine.addEventListener('pointerenter', () => (reset(), place()));
  spine.addEventListener('focus', place);
  spine.addEventListener('pointerleave', reset);
  spine.addEventListener('blur', reset);
}
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  for (const spine of spines) {
    if (spine.matches(':hover, :focus-visible')) spine.dataset.slip = 'off';
  }
});

// Mark the section being read in the chapter's "In this chapter" list.
const tocLinks = new Map<string, HTMLAnchorElement>();
for (const a of document.querySelectorAll<HTMLAnchorElement>('.toc a[href^="#"]')) {
  tocLinks.set(decodeURIComponent(a.hash.slice(1)), a);
}
if (tocLinks.size) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const a of tocLinks.values()) a.removeAttribute('aria-current');
        tocLinks.get(entry.target.id)?.setAttribute('aria-current', 'location');
      }
    },
    { rootMargin: '0px 0px -70% 0px' }
  );
  for (const id of tocLinks.keys()) {
    const heading = document.getElementById(id);
    if (heading) observer.observe(heading);
  }
}
