import '../assets/scss/common/reset.scss';
import '../assets/scss/main.scss';

import './common/nav.js';
import './common/nav.js';
const util = require('./common/common.js');
const Swiper = require('../lib/swiper')

// 主导航轮播
var mySwiper = new Swiper ('.swiper-container', {
  loop: true, // 循环模式选项
  
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}) 