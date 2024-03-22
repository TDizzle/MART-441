(function($) {
    $.fn.issDataDisplay = function() {
        return this.each(function() {
            $(this).addClass('iss-data-container');
            $(this).find('p').addClass('iss-data-info');
            $(this).find('strong').addClass('iss-data-label');
        });
    };
})(jQuery);
