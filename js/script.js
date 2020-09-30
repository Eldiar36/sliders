$(document).ready(function(){
    $(".main-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        dots:false,
        navText:true,
    });
});
$(document).ready(function(){
    $(".popular-box").owlCarousel({
        items: 4,
        loop:true,
        nav:true,
        dots:false,
        navText:true,
        margin:20,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:2
            },
            1200: {
                items:3
            },
            1400: {
                items:3

            },
            1600: {
                items:4
            }

        }
    });
});
$(document).ready(function(){
    $(".slider4").owlCarousel({
        items: 4,
        loop:true,
        nav:true,
        dots:false,
        navText:true,
        margin:20,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:2
            },
            1200: {
                items:3
            },
            1400: {
                items:3

            },
            1600: {
                items:4
            }

        }
    });
});
$(document).ready(function(){
    $(".jaluzi-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:false,
        dots:true,
        navText:true,
        margin:0,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            },
            1600: {
                items:1
            }

        }
    });
});