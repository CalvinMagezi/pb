!(function ($) {
    "use strict";

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#header').css("opacity", "1")
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').css("opacity", "0")
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 200) {
        $('#header').css("opacity", "1")
        $('#header').addClass('header-scrolled');
    }
})(jQuery);