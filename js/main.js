// import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/css';

const swiper = new Swiper(.swiper);
// core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    ...
  });