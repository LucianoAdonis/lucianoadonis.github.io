// Sidebar mobile toggle functionality

(function() {
  'use strict';

  function initSidebar() {
    const toggleButton = document.getElementById('mobile-menu-toggle');
    const closeButton = document.getElementById('sidebar-close');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    if (!toggleButton || !sidebar || !backdrop) return;

    // Toggle sidebar
    function toggleSidebar() {
      sidebar.classList.toggle('active');
      backdrop.classList.toggle('active');
      document.body.classList.toggle('overflow-hidden');
    }

    // Close sidebar
    function closeSidebar() {
      sidebar.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.classList.remove('overflow-hidden');
    }

    // Open sidebar when clicking hamburger
    toggleButton.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking close button
    if (closeButton) {
      closeButton.addEventListener('click', closeSidebar);
    }

    // Close sidebar when clicking backdrop
    backdrop.addEventListener('click', closeSidebar);

    // Close sidebar when clicking a link (mobile only)
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) { // lg breakpoint
          closeSidebar();
        }
      });
    });

    // Close sidebar on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebar);
  } else {
    initSidebar();
  }
})();
