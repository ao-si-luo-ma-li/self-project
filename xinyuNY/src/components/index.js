import './common/nav.js';
import '../lib/masonry.pkgd';
import '../lib/imagesloaded.pkgd';

import '../assets/scss/common/reset.scss';
import '../assets/scss/style.scss';
import '../assets/scss/index.scss';

const util = require('./common/common.js');
// import AMap from 'AMap';

(function() {

    const login = () => {
      // $('#identifier').modal('show');
      window.location.href = './login.html';
    };

    $('.to-login').on('click', login);

    $('#modal-confirm').on('click', confirmLogin);
    function confirmLogin() {
      const usename = $('#usename').val();
      const password = $('#password').val();
      if (!usename || usename.length < 6 || usename.length > 20) {
        alert('用户名长度只能在6-20位字符之间');
        return false;
      }
      if (!password || password.length < 6 || password.length > 20) {
        alert('密码长度只能在6-20位字符之间');
        return false;
      }
      alert('账号或密码错误！');
    }

    // 登录后用户显示
    const username = util.getCookie('username');
    if(username) {
      $('.top-nav').html(`<div class="top-nav_welcome">欢迎回来，${username}。<span class="login-out">[退出]<span></div>`)
    }
    // 用户退出
    $('body').on('click', '.login-out', function() {
      util.delCookie('username');
      location.reload();
    });
})();