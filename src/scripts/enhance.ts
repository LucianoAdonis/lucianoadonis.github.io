/**
 * Progressive enhancements. Everything here is optional: without JavaScript the
 * text, images, tables and code all still read; these make them easier to use.
 */

const prose = document.querySelectorAll<HTMLElement>('.prose');

// Wide tables scroll inside their own box instead of pushing the page sideways.
for (const table of document.querySelectorAll<HTMLTableElement>('.prose table')) {
  const box = document.createElement('div');
  box.className = 'table-scroll';
  table.replaceWith(box);
  box.append(table);
  if (box.scrollWidth > box.clientWidth + 1) {
    box.tabIndex = 0;
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', 'Table, scrolls sideways');
  }
}

// Copy buttons on code blocks.
for (const pre of document.querySelectorAll<HTMLPreElement>('.prose pre')) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-code';
  button.textContent = 'Copy';
  button.addEventListener('click', async () => {
    const text = pre.querySelector('code')?.innerText ?? pre.innerText;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied';
    } catch {
      button.textContent = 'Press Ctrl+C';
    }
    window.setTimeout(() => (button.textContent = 'Copy'), 1600);
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
function offerWider(img: HTMLImageElement) {
  const holder = img.parentElement;
  if (!holder || img.closest('button, a, .peek-figure')) return;
  if (img.naturalWidth < img.clientWidth * 1.2) return;
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
  for (const img of root.querySelectorAll<HTMLImageElement>('p > img:only-child, p > img')) {
    if (img.complete && img.naturalWidth) offerWider(img);
    else img.addEventListener('load', () => offerWider(img), { once: true });
  }
}

// Keep a spine's hover slip on screen near the right edge of a row.
for (const spine of document.querySelectorAll<HTMLElement>('.spine')) {
  const place = () => {
    const rect = spine.getBoundingClientRect();
    const slip = Math.min(288, window.innerWidth * 0.8);
    spine.dataset.edge = rect.left + slip > document.documentElement.clientWidth - 12 ? 'end' : 'start';
  };
  spine.addEventListener('pointerenter', place);
  spine.addEventListener('focus', place);
}

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
