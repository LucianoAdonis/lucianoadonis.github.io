// Header collapse functionality
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const banner = document.getElementById('banner');
    const section = document.querySelector('section');
    const nav = document.querySelector('nav');
    const scrollThreshold = 25; // Start collapsing much earlier
    const navHideThreshold = 25; // Start hiding navigation even earlier
    const scrollBuffer = 5; // Smaller buffer for smoother transitions
    
    // Create a wrapper for header and banner if it doesn't exist
    if (header && banner && !header.parentElement.classList.contains('header-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'header-wrapper';
        header.parentNode.insertBefore(wrapper, header);
        wrapper.appendChild(header);
        wrapper.appendChild(banner);
    }
    
    const headerWrapper = document.querySelector('.header-wrapper');
    
    // Debug: Check if elements are found
    console.log('Header found:', header);
    console.log('Banner found:', banner);
    console.log('Header wrapper found:', headerWrapper);
    console.log('Section found:', section);
    console.log('Navigation found:', nav);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Check if we've scrolled past the threshold
        if (scrollTop > scrollThreshold) {
            // Scrolling down - collapse header
            if (scrollTop > lastScrollTop) {
                if (headerWrapper) {
                    headerWrapper.classList.add('collapsed');
                }
                // Always apply to individual elements as backup
                header.classList.add('collapsed');
                banner.classList.add('collapsed');
                section.classList.add('header-collapsed');
                console.log('Collapsing - Wrapper classes:', headerWrapper ? headerWrapper.classList.toString() : 'No wrapper');
            } else {
                // Scrolling up - expand header only if we're close to the top
                if (scrollTop <= scrollThreshold + scrollBuffer) {
                    if (headerWrapper) {
                        headerWrapper.classList.remove('collapsed');
                    }
                    // Always apply to individual elements as backup
                    header.classList.remove('collapsed');
                    banner.classList.remove('collapsed');
                    section.classList.remove('header-collapsed');
                    console.log('Expanding - Wrapper classes:', headerWrapper ? headerWrapper.classList.toString() : 'No wrapper');
                }
            }
        } else {
            // At the top - always show header
            if (headerWrapper) {
                headerWrapper.classList.remove('collapsed');
            }
            // Always apply to individual elements as backup
            header.classList.remove('collapsed');
            banner.classList.remove('collapsed');
            section.classList.remove('header-collapsed');
        }
        
        // Handle navigation hiding separately for smoother effect
        if (scrollTop > navHideThreshold) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down - hide navigation
                if (nav) nav.classList.add('header-collapsed');
            } else {
                // Scrolling up - show navigation
                if (nav) nav.classList.remove('header-collapsed');
            }
        } else {
            // At the top - always show navigation
            if (nav) nav.classList.remove('header-collapsed');
        }
        
        lastScrollTop = scrollTop;
    });
}); 