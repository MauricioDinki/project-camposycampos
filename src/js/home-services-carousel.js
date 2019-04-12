var homeServicesCarousel = $('.home-services-carousel');

homeServicesCarousel.owlCarousel ({
  loop: true,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  navText: ['<img class="carousel-arrow" src="/img/icons/icon-arrow-left.png" />', '<img class="carousel-arrow" src="/img/icons/icon-arrow-right.png" />'],
  margin: 0,
  autoWidth: true,
  responsive:{
    0:{
      items:1
    },
    800:{
      items: 1
    },
    1000: {
      items: 3
    }
  }
});

homeServicesCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-services-carousel-controls'></div>");
});
