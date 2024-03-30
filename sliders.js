(function() {
  new Swiper('.hero-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 28,
    navigation: {
      nextEl: '.hero-slider__btn.swiper-next',
    } 
  });

  new Swiper('.services-slider', {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.services-slider__btn.swiper-next',
      prevEl: '.services-slider__btn.swiper-prev',
    },
    breakpoints : {
      520 : {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 25
      }
    }
  });

  new Swiper('.workers-slider', {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    breakpoints: {
      520: {
        slidesPerView: 2
      },
      768: {
        spaceBetween: 25,
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: '.workers-slider__btn.swiper-next',
      prevEl: '.workers-slider__btn.swiper-prev',
    }
  });

}());