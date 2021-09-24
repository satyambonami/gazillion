$('.variable-width').slick({
  dots: false,
  loop: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slideToScroll: 1,
  autoplay: true,
  autoplaySpeed: 100,
  variableWidth: true,
  cssEase: 'linear',
  speed:5000,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 702,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 456,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },


  ]
});

$('.variable').slick({
  dots: false,
  loop: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 6,
  slideToScroll: 1,
  autoplay: false,
});



// client page


$('.slide1').slick({
  dots: false,
  loop: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 5,
  slideToScroll: 1,
  autoplay: false,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },

  ]
});

$('.slide2').slick({
  dots: false,
  loop: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slideToScroll: 1,
  autoplay: false,
  centerMode: true,
  variableWidth: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
  ]
});

$('.slide3').slick({
  dots: false,
  loop: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slideToScroll: 1,
  autoplay: false,
  centerMode: true,
  variableWidth: true,
});

$('.video-marketing').slick({
  dots: false,
  loop: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slideToScroll: 1,
  autoplay: false,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },


  ]
});

// service page


$('.variable-1').slick({
  dots: false,
  loop: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slideToScroll: 1,
  autoplay: false,
});

$('.variable-2').slick({
  dots: false,
  loop: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slideToScroll: 1,
  autoplay: false,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },


  ]
});