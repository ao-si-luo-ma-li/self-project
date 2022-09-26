import '../assets/scss/common/reset.scss';

import './common/nav.js';
import '../assets/scss/main.scss';
const util = require('./common/common.js');
import DT from './common/dt.js'

const params = util.GetUrlType(location.href)

console.log('DT[params.content]', DT)
// 设置标题
$('.entry-title').html(DT[params.content].title)
// 设置内容
$('.entry-content').html(DT[params.content].content)

// 设置面包线
$('.breadcrumb .active').html(DT[params.content].title)

// 侧边栏右侧展开
$('.menu-right-expand').hover(function () {
  $('.menu-right-expand .dropdown-menu').show();
}, function (params) {
  $('.menu-right-expand .dropdown-menu').hide();
})

// 设置侧边栏选中
// current-menu-item
Array.from($('.menu-list .menu-item')).forEach(element => {
  if($(element)[0].className.includes(params.type)) {
    $(element).addClass('current-menu-item')
  }
});