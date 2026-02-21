// Homepage card filtering (search + status dropdown + category dropdown)
$(function() {
    var $cards = $('.book-card');
    var $searchInput = $('#book-search');
    var $statusSelect = $('#status-filter');
    var $categorySelect = $('#category-filter');

    function filterCards() {
        var query = ($searchInput.val() || '').toLowerCase();
        var status = $statusSelect.val();
        var category = $categorySelect.val();

        $cards.each(function() {
            var $card = $(this);
            var title = ($card.data('title') || '').toLowerCase();
            var desc = ($card.data('description') || '').toLowerCase();
            var cardStatus = $card.data('status');
            var cardCategory = $card.data('category');

            var matchesSearch = !query || title.indexOf(query) !== -1 || desc.indexOf(query) !== -1;
            var matchesStatus = status === 'all' || cardStatus === status;
            var matchesCategory = category === 'all' || cardCategory === category;

            if (matchesSearch && matchesStatus && matchesCategory) {
                $card.show();
            } else {
                $card.hide();
            }
        });

        var visible = $cards.filter(':visible').length;
        $('#visible-count').text(visible);
    }

    $searchInput.on('input', filterCards);
    $statusSelect.on('change', filterCards);
    $categorySelect.on('change', filterCards);
});
