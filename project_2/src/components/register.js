import '../assets/scss/common/reset.scss';
import '../assets/scss/register.scss';
import './common/nav.js';
const util = require('./common/common.js');
// import AMap from 'AMap';

(function() {
	var showContent = location.href.split('?')[1].split('=')[1];
	if (showContent === 'login') {
		$('.typeContent').hide().eq(1).show();
		$('.choseType li').hide().eq(1).show();
	} else {
		$('.typeContent').hide().eq(0).show();
		$('.choseType li').hide().eq(0).show();
	};

	// 正则校验注册信息
	$('.regsiter_form .submit').click(function() {
		var regsiter_account = $('.regsiter_account').val();
		var regsiter_password = $('.regsiter_password').val();
		var regsiter_repassword = $('.regsiter_repassword').val();
		var regsiter_realname = $('.regsiter_realname').val();
		var regsiter_idNumber = $('.regsiter_idNumber').val();


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
		alert('注册成功！');
		util.setCookie('username',regsiter_account);
		window.open('./index.html','_self');
		return false;
	});

	$('.login_form .submit').click(function() {
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