$(document).ready(function(){
    $('.owl-carousel-1').owlCarousel({ 
        autoplay:true,
        autoplayTimeout: 2500,
        autoplaySpeed: 1000,
        loop: true,
        // margin: 50,
        nav: true,
        dots: false,
        
        responsive:{
                    0:{
                        items:1
                    },
                    500: {
                        items:2
                    },
                    1100:{
                        items:5
                    }
                }
            });
  });

  $(document).ready(function(){
    $('.owl-carousel-2').owlCarousel({ 
        autoplay:true,
        autoplayTimeout: 4500,
        autoplaySpeed: 1000,
        loop: true,
        // margin: 50,
        nav: false,
        dots: true,
        responsive:{
                    // 0:{
                    //     items:1
                    // },
                    // 500: {
                    //     items:2
                    // },
                    1100:{
                        items:1
                    }
                }
            });
  });
