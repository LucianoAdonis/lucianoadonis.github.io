// Floating table of contents sidebar (left side)
document.addEventListener('DOMContentLoaded', function() {
    var headings = document.querySelectorAll('section h1, section h2, section h3');
    if (headings.length < 3) return;

    // Build TOC container
    var toc = document.createElement('div');
    toc.className = 'toc-sidebar';
    toc.innerHTML = '<div class="toc-header">Contents</div><ul class="toc-list"></ul>';

    var list = toc.querySelector('.toc-list');

    headings.forEach(function(heading, i) {
        if (!heading.id) {
            heading.id = 'heading-' + i;
        }

        var li = document.createElement('li');
        li.className = 'toc-item';
        if (heading.tagName === 'H2') {
            li.classList.add('toc-sub');
        } else if (heading.tagName === 'H3') {
            li.classList.add('toc-sub2');
        }

        var a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        a.className = 'toc-link';
        a.addEventListener('click', function(e) {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth' });
        });

        li.appendChild(a);
        list.appendChild(li);
    });

    // Toggle button (for medium screens)
    var toggle = document.createElement('button');
    toggle.className = 'toc-toggle';
    toggle.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';
    toggle.addEventListener('click', function() {
        toc.classList.toggle('open');
    });

    document.body.appendChild(toc);
    document.body.appendChild(toggle);

    // Highlight current section with Intersection Observer
    var observerOptions = {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0
    };

    var links = list.querySelectorAll('.toc-link');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                links.forEach(function(link) { link.classList.remove('active'); });
                var active = list.querySelector('a[href="#' + entry.target.id + '"]');
                if (active) active.classList.add('active');
            }
        });
    }, observerOptions);

    headings.forEach(function(heading) {
        observer.observe(heading);
    });
});
