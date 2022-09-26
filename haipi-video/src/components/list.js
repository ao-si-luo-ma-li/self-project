import '../assets/scss/common/reset.scss';

import './common/nav.js';
import '../assets/scss/main.scss';
const util = require('./common/common.js');
import LT from './common/lt.js'

const params = util.GetUrlType(location.href)

$('.mode').click((e) => {
  $('.mode').removeClass('active')
  $(e.target).addClass('active');
})

$('.amount').click((e) => {
  $('.amount').removeClass('active')
  $(e.target).addClass('active');
})

// 用户注册协议弹窗逻辑
$('.agreement .close').click(function() {
  $('.agreement').hide();
  $('.shadow').hide();
});
$('.for_agreement').click(function() {
  $('.shadow').show();
  $('.agreement').show();
});