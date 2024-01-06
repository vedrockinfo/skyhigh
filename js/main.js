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


$('.training-group').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('.owl-background').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

let fname = "vedant";
console.log(fname);