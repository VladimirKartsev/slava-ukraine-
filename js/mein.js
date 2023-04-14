import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyOnViewport: true,
    padeUpDown: true,
  },
  spaceBetween: 30,
  autoplay: {
    delay: 1570,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  speed: 1000,
  // mousewheel: {
  //   sensitivity: 1,
  // },
  breakpoints: {
    370: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
      loop: true,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      autoplay: false,
      spaceBetween: 28,
    },
  },
});
