(function ($) {
    "use strict";

        // testimonial-active
        $('.client').slick({

            centerPadding: '60px',
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,

                        arrows: true,
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots:true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '30px',
                        infinite: true,
                        arrows:false,
                       
                    }
                }
            ]
        });   
})(jQuery);	    