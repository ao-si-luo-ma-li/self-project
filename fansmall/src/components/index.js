import '../assets/scss/common/reset.scss';

import './common/nav.js';
import '../assets/scss/main.scss';
import fullpage from '../lib/fullpage'

// 启用全屏滚动插件

var myFullpage = new fullpage('#fullpage', {
  lazyLoad: true,
  resize: true,
  afterLoad: function (origin, destination, direction) {
    setTimeout(() => {
      $(`#section${destination.index+1}`).addClass('enter')
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

// 安卓下载
$('.down-android-pcbtn').click(() => {
  location.href = 'https://webcdn.m.qq.com/webapp/homepage/index.html#/appDetail?apkName=fansmall.app&info=2761777715F8E34B6DF328727C66E6EE'
})

// ios 下载
$('.down-android-pcbtn').click(() => {
  location.href = 'https://a.app.qq.com/o/simple.jsp?fromcase=40003&pkgname=fansmall.app'
})