// Table of Contents Generator
// Generates TOC from H2 and H3 headings in the article

(function() {
  'use strict';

  function generateTOC() {
    const article = document.querySelector('article');
    const tocContainer = document.getElementById('toc');
    const tocWrapper = document.getElementById('toc-container');

    if (!article || !tocContainer || !tocWrapper) return;

    // Find all H2 and H3 headings in the article
    const headings = article.querySelectorAll('h2, h3');

    if (headings.length < 3) {
      // Hide TOC if there are fewer than 3 headings
      tocWrapper.style.display = 'none';
      return;
    }

    let currentH2Item = null;
    let tocHTML = '';

    headings.forEach((heading, index) => {
      const level = heading.tagName.toLowerCase();
      const text = heading.textContent.trim();

      // Create ID for heading if it doesn't have one
      if (!heading.id) {
        heading.id = 'heading-' + index;
      }

      if (level === 'h2') {
        tocHTML += `<div class="mb-2">
          <a href="#${heading.id}" class="toc-link block py-1 text-gray-700 hover:text-amber-600 font-medium transition-colors" data-target="${heading.id}">
            ${text}
          </a>
        </div>`;
      } else if (level === 'h3') {
        tocHTML += `<a href="#${heading.id}" class="toc-link block py-1 pl-4 text-sm text-gray-600 hover:text-amber-600 transition-colors" data-target="${heading.id}">
          ${text}
        </a>`;
      }
    });

    tocContainer.innerHTML = tocHTML;

    // Scroll spy - highlight current section
    const tocLinks = tocContainer.querySelectorAll('.toc-link');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const tocLink = tocContainer.querySelector(`a[data-target="${id}"]`);

          if (entry.isIntersecting) {
            // Remove active class from all links
            tocLinks.forEach(link => {
              link.classList.remove('text-amber-600', 'font-bold');
              link.classList.add('text-gray-700');
            });
            // Add active class to current link
            if (tocLink) {
              tocLink.classList.remove('text-gray-700', 'text-gray-600');
              tocLink.classList.add('text-amber-600', 'font-bold');
            }
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
        threshold: 1.0
      }
    );

    // Observe all headings
    headings.forEach((heading) => {
      observer.observe(heading);
    });

    // Smooth scroll
    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateTOC);
  } else {
    generateTOC();
  }
})();
