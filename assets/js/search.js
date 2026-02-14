// Client-side search functionality
// Searches through all pages using a pre-generated JSON index

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
      searchResults.innerHTML = '<div class="p-4 text-sm text-gray-500">No results found</div>';
      searchResults.classList.remove('hidden');
      return;
    }

    const resultsHTML = results.map(page => {
      const titleHighlighted = highlightMatch(page.title, query);
      const descHighlighted = page.description ? highlightMatch(page.description, query) : '';

      return `
        <a href="${page.url}" class="block p-3 hover:bg-amber-50 border-b border-gray-100 last:border-0 transition-colors">
          <div class="font-medium text-gray-900">${titleHighlighted}</div>
          ${descHighlighted ? `<div class="text-sm text-gray-600 mt-1 line-clamp-2">${descHighlighted}</div>` : ''}
        </a>
      `;
    }).join('');

    searchResults.innerHTML = resultsHTML;
    searchResults.classList.remove('hidden');
  }

  function highlightMatch(text, query) {
    if (!text) return '';
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark class="bg-amber-200 text-gray-900 px-0.5 rounded">$1</mark>');
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
