// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/' ||
                      window.location.pathname === '/index.html' ||
                      window.location.pathname.endsWith('lucianoadonis.github.io/');

    // Add appropriate class to body
    if (isHomePage) {
        document.body.classList.add('home-page');
    }
});
