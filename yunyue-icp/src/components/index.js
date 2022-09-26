import '../assets/scss/common/reset.scss';

import './common/nav.js';
import '../assets/scss/main.scss';
const Swiper = require('../lib/swiper')

var mySwiper = new Swiper('.swiper-container',{
  pagination: '.pagination',
  paginationClickable: true,
  centeredSlides: true,
  slidesPerView: 4,
  watchActiveIndex: true,
  autoplay: 2000,
  loop: true
})

setTimeout(() => {
  $('.banner').addClass('in')
}, 200)

