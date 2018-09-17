var homeCoverCarousel = $('.home-cover-carousel');

homeCoverCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  autoHeight: true,
  navText: ['<img class="carousel-arrow" src="/img/icons/icon-arrow-left.png" />', '<img class="carousel-arrow" src="/img/icons/icon-arrow-right.png" />'],
  margin: 20,
  responsive:{
    0:{
      items:1
    },
    800:{
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

homeCoverCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-cover-carousel-controls'></div>");
});
