import '../assets/scss/common/reset.scss';
import '../assets/scss/main.scss';

import './common/nav.js';
import '../lib/jquery.slides.min.js';
import '../lib/floatingcarousel.min.js';
import './common/nav.js';
const util = require('./common/common.js');

// 主导航轮播
$('#slides').slidesjs({
    width: 810,
    height: 324,
    play: {
      active: true,
      auto: true,
      interval: 2000,
      swap: true
    }
 });
$('#slides-shopGood').slidesjs({
    width: 1000,
    height: 510,
    play: {
      active: true,
      auto: true,
      interval: 3000,
      swap: true
    }
 });
$('#slides-sell-well').slidesjs({
    width: 370,
    height: 360,
    play: {
      active: true,
      auto: true,
      interval: 3000,
      swap: true
    }
 });
$('#slides-shopTec').slidesjs({
    width: 190,
    height: 400,
    play: {
      active: true,
      auto: true,
      interval: 2500,
      swap: true
    }
 });

// 热门水平轮播
$('#carousel-autoscroll').floatingCarousel({
   autoScroll : true,
   autoScrollDirection : 'right',
   autoScrollSpeed : 40000,
   scrollSpeed : 'slow'
});

console.log('asdd')