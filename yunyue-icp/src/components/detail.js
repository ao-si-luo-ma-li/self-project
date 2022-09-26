import '../assets/scss/common/reset.scss';

import './common/nav.js';
import '../assets/scss/main.scss';
const util = require('./common/common.js');
import DT from './common/dt.js'

const params = util.GetUrlType(location.href)

if (params.content && DT[params.content]) {
  // 设置标题
  $('.entry-title').html(`《${DT[params.content].title}》`)
  // 设置内容
  let str = '';
  DT[params.content].content.forEach((_, i) => {
    str += `<img src='static/carton/${params.content}/${i+1}.jpeg'></img>`
  });
  $('.entry-content').html(str)
  
  // 设置面包线
  $('.breadcrumb .active').html(DT[params.content].title)
}

