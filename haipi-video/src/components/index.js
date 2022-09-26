import '../assets/scss/common/reset.scss';

import './common/nav.js';
import '../assets/scss/main.scss';
import fullpage from '../lib/fullpage'
import { dplayerFn } from './video';
const Swiper = require('../lib/swiper')

// 启用全屏滚动插件
var myFullpage = new fullpage('#fullpage', {
  lazyLoad: true,
  resize: true,
  afterLoad: function (origin, destination, direction) {
    setTimeout(() => {
      $(`#section${destination.index + 1}`).addClass('enter')
    }, 200)
  },
  onLeave: function (origin, destination, direction) {
    console.log('origin, destination, direction', origin, destination, direction)
    switch (origin.index) {
      case 0:
        $('#section1').removeClass('enter')
        $('#section2').addClass('enter')
        break;
      case 1:
        // 进入 section3
        if (direction === 'down') {
          $('#section2').removeClass('enter')
          $('#section3').addClass('enter')
        } else {
          // 进入 section1
          $('#section2').removeClass('enter')
          $('#section1').addClass('enter')
        }

        break;
      case 2:
        // 进入 section4
        if (direction === 'down') {
          $('#section3').removeClass('enter')
          $('#section4').addClass('enter')
        } else {
          // 进入 section2
          $('#section3').removeClass('enter')
          $('#section2').addClass('enter')
        }
        break;
      case 3:
        // 进入 section5
        if (direction === 'down') {
          $('#section4').removeClass('enter')
          $('#section5').addClass('enter')
        } else {
          // 进入 section3
          $('#section4').removeClass('enter')
          $('#section3').addClass('enter')
        }
        break;
      case 4:
        // 进入 section6
        if (direction === 'down') {
          $('#section5').removeClass('enter')
          $('#section6').addClass('enter')
        } else {
          // 进入 section3
          $('#section5').removeClass('enter')
          $('#section4').addClass('enter')
        }
        default:
          break;
    }
  }
});

/**
 * 为每个page插入导航
 */
const insertNavBarForFullScreen = () => {
  // 为每个fullScreen页面插入导航
  Array.from($('.download-pcbtn-box-wrap')).forEach((dom, i) => {
    $(dom).append(
      `
      <div class="download-pcbtn-box">
        <div class="down-pcbtn ${i === 0 ? 'active': ''}" dataset="0" id="0">
          首页
        </div>
        <div class="down-pcbtn ${i === 1 ? 'active': ''}" dataset="1" id="1">
          才艺展示区
        </div>
        <div class="down-pcbtn ${i === 2 ? 'active': ''}" dataset="2" id="2">
          公司简介
        </div>
        <div class="down-pcbtn ${i === 3 ? 'active': ''}" dataset="3" id="3">
          独家资讯
        </div>
        <div class="down-pcbtn ${i === 4 ? 'active': ''}" dataset="4" id="4">
          联系合作
        </div>
        <a href="./pay.html" class="down-pcbtn ${i === 5 ? 'active': ''}" dataset="5" id="5">
          快速充值
        </a>
      </div>
      `
    );

    $('.down-pcbtn').on('click', e => {
      myFullpage.moveTo(Number(e.target.id) + 1)
    })

    $('.goTop').on('click', () => {
      myFullpage.moveTo(1)
    })

    $('.arrow-left').on('click', function(e){
      e.preventDefault()
      mySwiper.swipePrev()
    })
    $('.arrow-right').on('click', function(e){
      e.preventDefault()
      mySwiper.swipeNext()
    })
  });

  // 才艺展示区视频轮播
  var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop: false,
    grabCursor: true,
    paginationClickable: true
    //其他设置
  });

  // 视频
  dplayerFn('dplayer1', '/static/video/ttg/ttq.m3u8')
  dplayerFn('dplayer2', '/static/video/tg2/tg2/tq.m3u8')
  dplayerFn('dplayer3', '/static/video/jt/jt.m3u8')
  dplayerFn('dplayer4', '/static/video/sg/sg.m3u8')
  dplayerFn('dplayer5', '/static/video/ss/ss.m3u8')
}

insertNavBarForFullScreen()