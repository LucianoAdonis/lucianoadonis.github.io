// Header collapse functionality — header+banner move as one unit
document.addEventListener('DOMContentLoaded', function() {
    var lastScrollTop = 0;
    var header = document.querySelector('header');
    var banner = document.getElementById('banner');
    var section = document.querySelector('section');
    var scrollThreshold = 25;
    var scrollBuffer = 5;

    // Wrap header and banner in a single div so they collapse together
    if (header && banner && !header.parentElement.classList.contains('header-wrapper')) {
        var wrapper = document.createElement('div');
        wrapper.className = 'header-wrapper';
        header.parentNode.insertBefore(wrapper, header);
        wrapper.appendChild(header);
        wrapper.appendChild(banner);
    }

    var headerWrapper = document.querySelector('.header-wrapper');
    if (!headerWrapper) return;

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > scrollThreshold) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down — collapse
                headerWrapper.classList.add('collapsed');
                if (section) section.classList.add('header-collapsed');
            } else {
                // Scrolling up — only expand near the top
                if (scrollTop <= scrollThreshold + scrollBuffer) {
                    headerWrapper.classList.remove('collapsed');
                    if (section) section.classList.remove('header-collapsed');
                }
            }
        } else {
            // At the top — always show
            headerWrapper.classList.remove('collapsed');
            if (section) section.classList.remove('header-collapsed');
        }

        lastScrollTop = scrollTop;
    });
});
