var homeCoverCarousel = $('.home-cover-carousel');

homeCoverCarousel.owlCarousel ({
  loop: true,
  nav: true,
  navContainer: '.home-cover-slide',
  dots: true,
  autoHeight: true,
  autoplay: true,
  autoplayTimeout: 4000,
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
