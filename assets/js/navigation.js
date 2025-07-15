// Navigation functionality for back/home button
document.addEventListener('DOMContentLoaded', function() {
    // Create back button element
    const backButton = document.createElement('a');
    backButton.className = 'back-button';
    backButton.href = '#';
    
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/' || 
                      window.location.pathname === '/index.html' ||
                      window.location.pathname.endsWith('lucianoadonis.github.io/');
    
    // Add appropriate class to body
    if (isHomePage) {
        document.body.classList.add('home-page');
    }
    
    // Determine button text and action
    if (document.referrer && !isHomePage) {
        // If there's a referrer, show "Back" button
        backButton.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back
        `;
        backButton.onclick = function(e) {
            e.preventDefault();
            window.history.back();
        };
    } else if (!isHomePage) {
        // If no referrer and not on home page, show "Home" button
        backButton.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Home
        `;
        backButton.href = '/';
    }
    
    // Add button to page (only if not on home page)
    if (!isHomePage) {
        document.body.appendChild(backButton);
    }
    
    // Handle scroll behavior for button visibility
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide button
            backButton.style.transform = 'translateY(100px)';
        } else {
            // Scrolling up - show button
            backButton.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
});
