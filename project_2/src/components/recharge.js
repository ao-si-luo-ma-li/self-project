import '../assets/scss/common/reset.scss';
import '../assets/scss/recharge.scss';
import './common/nav.js';
// import AMap from 'AMap';

(function() {
	$('.re_tab').height($('.re_content').height());
	$('.recharge-page .re_pay li').click(function() {
		var index = this.dataset.index;
		$(this).addClass('active').siblings().removeClass('active');
		$('.re_content .tabContent').hide().eq(index).show();
	});
	$('form .submit').click(function() {
		alert('本充值系统暂不开放，抱歉');
		return false;
	});
	$('.chose td').click(function() {
		$('.chose td').removeClass('active');
		$(this).addClass('active');
	})
	$('.bank_list li').click(function() {
		$('.bank_list li').removeClass('active');
		$(this).addClass('active');
	})
})();