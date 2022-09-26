import '../assets/scss/common/reset.scss';

import './common/nav.js';
import '../assets/scss/main.scss';
const util = require('./common/common.js');
import LT from './common/lt.js'

const params = util.GetUrlType(location.href)

// 设置面包线
$('.breadcrumb .active').html(LT[params.type].title);

// 侧边栏右侧展开
$('.menu-right-expand').hover(function () {
  $('.menu-right-expand .dropdown-menu').show();
}, function (params) {
  $('.menu-right-expand .dropdown-menu').hide();
})

// 设置侧边栏选中
// current-menu-item
Array.from($('.menu-list .menu-item')).forEach(element => {
  if ($(element)[0].className.includes(params.type)) {
    $(element).addClass('current-menu-item')
  }
});

// 列表插入
$('.post-list').html(
  LT[params.type].list.map(function (item) {
    return `
    <li class="post-item clearfix">
    <div class="entry-excerpt row">
      ${
        item.img ? 
        `
      <div class="col-md-4">
        <a class="thumbnail" href="./detail.html?type=${params.type}&content=${ item.detailLink}"
          title="${item.title}">
          <img class="j-lazy" src="http://www.chencpainc.com/wp-content/uploads/2021/01/d2645333-480x320.jpg"
            width="480" height="320" alt="${item.title}" style="display: inline;"/> </a>
      </div>
        `
      :`<div/>`
      }
      <div class="col-md-${ item.img ? 8 : 12}">
        <h2 class="entry-title"><a href="./detail.html?type=${params.type}&content=${ item.detailLink}"
            title="${item.title}">${item.title}</a></h2>
        <div class="entry-meta">
          <span><i class="fa fa-calendar"></i> ${item.date}<i></i></span>
        </div>
        <p>${item.content}
        </p>
        <div class="read-more">
          <a class="entry-more" href="./detail.html?type=${params.type}&content=${ item.detailLink}"
            title="${item.title}">阅读更多»</a>
        </div>
      </div>
    </div>
  </li>
    `
  })
)