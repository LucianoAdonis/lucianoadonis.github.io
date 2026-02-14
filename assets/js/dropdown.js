// Header dropdown functionality

(function() {
  'use strict';

  function initDropdown() {
    const dropdownToggle = document.getElementById('explore-dropdown');
    const dropdownMenu = document.getElementById('explore-menu');

    if (!dropdownToggle || !dropdownMenu) return;

    // Toggle dropdown
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('active');
      dropdownToggle.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
        dropdownToggle.classList.remove('active');
      }
    });

    // Close dropdown when clicking a link
    const dropdownLinks = dropdownMenu.querySelectorAll('a');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
        dropdownToggle.classList.remove('active');
      });
    });

    // Close dropdown on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active');
        dropdownToggle.classList.remove('active');
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDropdown);
  } else {
    initDropdown();
  }
})();
