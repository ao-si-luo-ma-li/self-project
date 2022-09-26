import '../assets/scss/common/reset.scss';
import '../assets/scss/main.scss';

import '../lib/glass.js';
import './common/nav.js';
const util = require('./common/common.js');
const allpts = require('./common/pt.js');

(function() {

	if (location.href.indexOf('?') > -1) {
		// 主导航
		let type = location.href.split('?')[1];
		if (type.indexOf('#') > -1) {
			type = type.split('#')[0];
		}
		$('.nav a').each(function() {
			if ($(this).attr('href').indexOf(type) > -1) {
				$(this).addClass('active');
			}
		});
		// 帮助中心侧边栏
		$('.nav_cont a').each(function() {
			if ($(this).attr('href').indexOf(type) > -1) {
				$(this).addClass('active');
			}
		});
		$('.' + type).show();
	}

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

	// 合作商注册。校验参数
	$('#store_btn').click(function() {
		var store_com_name = $('#store_com_name').val();
		var store_com_loc = $('#store_com_loc').val();
		var store_com_tel = $('#store_com_tel').val();
		var store_com_mail = $('#store_com_mail').val();
		var store_com_staff = $('#store_com_staff').val();
		var store_com_money = $('#store_com_money').val();
		var store_com_contact = $('#store_com_contact').val();
		var store_com_mob = $('#store_com_mob').val();
		var store_com_code = $('#store_com_code').val();

		if (!store_com_name || !store_com_loc || !store_com_tel || !store_com_mail || !store_com_staff || !store_com_money || !store_com_contact || !store_com_mob) {
			alert('请把信息填写完整！');
			return false;
		}

		if (!util.validatemobile(store_com_mob)) {
			return false;
		}

		if (store_com_code.length !== 4) {
			alert('验证码错误！');
			return false;
		}

		alert('注册成功！');
		window.open('./index.html','_self');
		return false;
	});

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

	// 查询商铺费用
	$('#sim_query .btn').click(function() {
		$('.shadow').show();
		$('.fee-detail').show();
		let type = $('input[name="sh_type"]:checked').attr('data-type');

		if (type == 1) {
			$('.fee-detail .fee').text(1400+'.00');
		}else if (type == 2) {
			$('.fee-detail .fee').text(1200+'.00');
		}else {
			$('.fee-detail .fee').text(100+'.00');
		}
	});
	$('.shadow').click(function() {
		$('.shadow').hide();
		$('.fee-detail').hide();
	});


	// 结算页初始化
	if (util.StorageGetter('al_pay_pro')) {
		let al_pay_pro = util.StorageGetter('al_pay_pro');
		$('.sendloc span').text(al_pay_pro.sendLoc);
		$('.sender span').text(al_pay_pro.sender);
		$('.content span').text(al_pay_pro.content);
		$('.payType b').text(al_pay_pro.type == '支付宝支付'?'支付宝APP':'微信APP');
	}

})();