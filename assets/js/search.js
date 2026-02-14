// Client-side search functionality

(function() {
  'use strict';

  let searchIndex = [];
  let searchInput;
  let searchResults;

  function initSearch() {
    searchInput = document.getElementById('site-search');
    searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    // Load search index
    fetch('/search-index.json')
      .then(response => response.json())
      .then(data => {
        searchIndex = data;
      })
      .catch(error => {
        console.error('Failed to load search index:', error);
      });

    // Search on input
    searchInput.addEventListener('input', handleSearch);

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        hideResults();
      }
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', handleKeydown);
  }

  function handleSearch(e) {
    const query = e.target.value.trim().toLowerCase();

    if (query.length < 2) {
      hideResults();
      return;
    }

    const results = searchIndex.filter(page => {
      const titleMatch = page.title && page.title.toLowerCase().includes(query);
      const descMatch = page.description && page.description.toLowerCase().includes(query);
      return titleMatch || descMatch;
    }).slice(0, 8); // Limit to 8 results

    displayResults(results, query);
  }

  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div style="padding: 1rem; text-align: center; color: #737373; font-size: 14px;">No results found</div>';
      searchResults.classList.remove('hidden');
      return;
    }

    const resultsHTML = results.map(page => {
      const titleHighlighted = highlightMatch(page.title, query);
      const descHighlighted = page.description ? highlightMatch(page.description, query) : '';

      return `
        <a href="${page.url}">
          <div style="font-weight: 600; color: #0A0A0A; margin-bottom: 4px;">${titleHighlighted}</div>
          ${descHighlighted ? `<div style="font-size: 13px; color: #737373;">${descHighlighted}</div>` : ''}
        </a>
      `;
    }).join('');

    searchResults.innerHTML = resultsHTML;
    searchResults.classList.remove('hidden');
  }

  function highlightMatch(text, query) {
    if (!text) return '';
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<strong style="background: rgba(249, 115, 22, 0.2); color: #EA580C; padding: 2px 4px; border-radius: 3px;">$1</strong>');
  }

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function hideResults() {
    searchResults.classList.add('hidden');
  }

  function handleKeydown(e) {
    // ESC to close
    if (e.key === 'Escape') {
      hideResults();
      searchInput.blur();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }
})();
