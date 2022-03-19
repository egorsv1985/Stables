$(function() {
  $('.event-slider').slick ({
   dots: true,
   arrows: false,
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   responsive: [
    {
    breakpoint: 1600,
    settings: "unslick"
    },
    {
      breakpoint: 768,
      setting:{
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    }
    ]
  });
});

