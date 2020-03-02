/* eslint-disable no-undef */
/* eslint-disable camelcase */
(function($) {
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: '992',
    });

    // // One Page Nav
    // let top_offset = $('.header-area').height() - 10;
    // $('.main-menu nav ul').onePageNav({
    //     currentClass: 'active',
    //     scrollOffset: top_offset,
    // });

    // $(window).on('scroll', function() {
    //     let scroll = $(window).scrollTop();
    //     if (scroll < 245) {
    //         $('.header-sticky').removeClass('sticky');
    //     } else {
    //         $('.header-sticky').addClass('sticky');
    //     }
    // });

    // mainSlider
    function mainSlider() {
        let BasicSlider = $('.main-slider');
        BasicSlider.on('init', function(e, slick) {
            let $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            let $animatingElements = $(`.single-slider[data-slick-index="${nextSlide}"]`).find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 1000,
            dots: true,
            fade: true,
            infinite: true,
            arrows: false,
            responsive: [{ breakpoint: 767, settings: { dots: false, arrows: false } }],
        });

        function doAnimations(elements) {
            let animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                let $this = $(this);
                let $animationDelay = $this.data('delay');
                let $animationType = `animated ${$this.data('animation')}`;
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay,
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    // owlCarousel
    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     items: 1,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     nav: true,
    //     dots: false,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         767: {
    //             items: 3,
    //         },
    //         992: {
    //             items: 5,
    //         },
    //     },
    // });

    /* magnificPopup img view */
    // $('.popup-image').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true,
    //     },
    // });

    // /* magnificPopup video view */
    // $('.popup-video').magnificPopup({
    //     type: 'iframe',
    // });

    // // isotop
    // $('.grid').imagesLoaded(function() {
    //     // init Isotope
    //     let $grid = $('.grid').isotope({
    //         itemSelector: '.grid-item',
    //         percentPosition: true,
    //         masonry: {
    //             // use outer width of grid-sizer for columnWidth
    //             columnWidth: '.grid-item',
    //         },
    //     });
    // });

    // filter items on button click
    // $('.portfolio-menu').on('click', 'button', function() {
    //     let filterValue = $(this).attr('data-filter');
    //     $grid.isotope({ filter: filterValue });
    // });

    // // for menu active class
    // $('.portfolio-menu button').on('click', function(event) {
    //     $(this)
    //         .siblings('.active')
    //         .removeClass('active');
    //     $(this).addClass('active');
    //     event.preventDefault();
    // });

    // scrollToTop
    // $.scrollUp({
    //     scrollName: 'scrollUp', // Element ID
    //     topDistance: '300', // Distance from top before showing element (px)
    //     topSpeed: 300, // Speed back to top (ms)
    //     animation: 'fade', // Fade, slide, none
    //     animationInSpeed: 200, // Animation in speed (ms)
    //     animationOutSpeed: 200, // Animation out speed (ms)
    //     scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
    //     activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    // });

    // WOW active
    // new WOW().init();
})(jQuery);
