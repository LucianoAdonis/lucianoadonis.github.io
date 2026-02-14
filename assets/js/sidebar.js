// Sidebar mobile toggle functionality

(function() {
  'use strict';

  function initSidebar() {
    const toggleButton = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    if (!toggleButton || !sidebar || !backdrop) return;

    // Toggle sidebar
    function toggleSidebar() {
      sidebar.classList.toggle('-translate-x-full');
      backdrop.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    }

    // Open sidebar
    toggleButton.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking backdrop
    backdrop.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking a link (mobile only)
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) { // lg breakpoint
          toggleSidebar();
        }
      });
    });

    // Close sidebar on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !sidebar.classList.contains('-translate-x-full')) {
        toggleSidebar();
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
