$('.owl-carousel').owlCarousel({ 
    autoplay:true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    loop: true,
    margin: 50,
    center:true,
    responsive:{
                0:{
                    items:1
                },
                500: {
                    items:2
                },
                1100:{
                    items:8
                }
            }
        });