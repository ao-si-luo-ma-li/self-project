const util = require('./common.js');

(function () {
	window.jQuery = jQuery;

	// 因为css加载慢导致页面闪抖，延迟显示保障效果
	setTimeout(() => {
		$('body').show()
	}, 200);

	// 插入bootstrap
	// util.loadJS('https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js')
	// util.loadCSS('https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css')

	(function () {
		let topH = $('#top').height();
		let pro1_headerH = $('#top').height();
		let f_moduleH = $('#f_module').height();
		let footerH = $('#footer').height();
		let cutH = topH + pro1_headerH + f_moduleH + footerH;

		// 将页面高度最小值设为窗口高度，铺满一屏
		$('#main').css({
			'minHeight': $(window).height() - cutH
		})
	})();

	// 判断是否登录过
	if (util.getCookie('username')) {
		$('.topBar .rightArea').html(`欢迎您，${util.getCookie('username')} <a href="javascript:void(0)" class="login-out"><i></i>「退出」</a>`)
	}

	$('body').on('click', '.login-out', function () {
		util.delCookie('username');
		location.reload();
	});
})();