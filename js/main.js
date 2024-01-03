jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 45) {
        jQuery("header").addClass("fixed-header");
    } else {
        jQuery("header").removeClass("fixed-header");
    }
});

jQuery(document).ready(function () {
    jQuery(".toggle-me-now").click(function () {
        jQuery(this).toggleClass("collapse-now");
    });
});
