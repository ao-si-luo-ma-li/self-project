import '../assets/scss/common/reset.scss';
import '../assets/scss/main.scss';

import '../lib/glass.js';
import './common/nav.js';
const util = require('./common/common.js');
const allpts = require('./common/pt.js');

(function() {

	// 用户注册协议弹窗逻辑
	$('.agreement .close').click(function() {
		$('.agreement').hide();
		$('.shadow').hide();
	});
	$('.for_agreement').click(function() {
		$('.agreement').show();
		$('.shadow').show();
	});

	// 设置最小高度
	$('.inner_con').css({
		'minHeight': $('body').height() - $('.footer').height()
	})

	// 用户注册。校验参数
	$('#resigter_btn').click(function() {
		var regsiter_account = $('.regsiter_account').val();
		var regsiter_password = $('.regsiter_password').val();
		var regsiter_repassword = $('.regsiter_repassword').val();
		var regsiter_realname = $('.regsiter_realname').val();
		var regsiter_idNumber = $('.regsiter_idNumber').val();
		var regsiter_mobile = $('.regsiter_mobile').val();
		var regsiter_code = $('.regsiter_code').val();

		if (regsiter_account.length<6 || regsiter_account.length>20) {
			alert('用户名长度只能在6-20位字符之间');
			return false;
		}
		if (regsiter_password.length<6 || regsiter_password.length>20) {
			alert('密码长度只能在6-20位字符之间');
			return false;
		}
		if (regsiter_password !== regsiter_repassword) {
			alert('俩次密码不一致');
			return false;
		}

		if (regsiter_realname.length<2 || regsiter_realname.length>4 || !util.isChinese(regsiter_realname)) {
			alert('请填写真实姓名!');
			return false;
		}
		if (!util.verifyIdCode(regsiter_idNumber).pass) {
			alert(util.verifyIdCode(regsiter_idNumber).msg);
			return false;
		}

		if (!util.validatemobile(regsiter_mobile)) {
			return false;
		}

		if (regsiter_code.length !== 4) {
			alert('验证码错误！');
			return false;
		}

		alert('注册成功！');
		util.setCookie('username', regsiter_account);
		window.open('./index.html','_self');
		return false;
	})

	// 用户登录
	$('.login_btn').click(function() {
		var login_account = $('.login_account').val();
		var login_password = $('.login_password').val();

		if (login_account.length<6 || login_account.length>20) {
			alert('用户名输入错误');
			return false;
		}

		if (login_password.length<6 || login_password.length>20) {
			alert('密码名输入错误');
			return false;
		}

		alert('登录成功！');
		util.setCookie('username',login_account);
		window.open('./index.html','_self');
		return false;
	})

})();