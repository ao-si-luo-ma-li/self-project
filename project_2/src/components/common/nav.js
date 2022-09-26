const util = require('./common.js');
(function() {
    //获取地址栏postID/uesrId
    // $('#topOpen').click(function() {
    //     $('#topNav').stop().slideToggle();
    //     $(this).toggleClass('slide_List');
    // });
    // var navDoc = $('#pro1_header');
    // var topHeight = $('#top').innerHeight();
    // $(window).scroll(function() {
    //     var offsetTop = $(document).scrollTop();
    //     if (offsetTop > topHeight) {
    //         navDoc.css({
    //             'position': 'fixed',
    //             'top': '0'
    //         });
    //     } else {
    //         navDoc.css({
    //             'position': 'absolute',
    //             'top': topHeight + 'px'
    //         });
    //     }
    // });
    // (function() {
    //     let topH = $('#top').height();
    //     let pro1_headerH = $('#top').height();
    //     let f_moduleH = $('#f_module').height();
    //     let footerH = $('#footer').height();
    //     let cutH = topH + pro1_headerH + f_moduleH + footerH;
    //     // 将页面高度最小值设为窗口高度，铺满一屏
    //     $('#main').css({
    //         'minHeight': $(window).height() - cutH
    //     })
    // })();
    // 判断是否登录过
    // if (util.getCookie('username')) {
    //     $('.right_nav').html(`欢迎您，${util.getCookie('username')} <a href="javascript:void(0)" class="login-out"><i></i>退出</a>`)
    // }
    // $('body').on('click', '.login-out', function() {
    //     util.delCookie('username');
    //     location.reload();
    // })


    $('#topOpen').click(function() {
        $('#nav').toggleClass('nav-slide');
        $(this).toggleClass('open-active');
    });
    $('#goTop').click(function() { document.documentElement.scrollTop = document.body.scrollTop = 0; });
    var navDoc = $('#pro1_header');
    var topHeight = $('#top').innerHeight();
    $(window).scroll(function() {
        var offsetTop = $(document).scrollTop();
        if (offsetTop > topHeight) {
            navDoc.css({
                'position': 'fixed',
                'top': '0'
            });
            $('#logo a').css({
                marginLeft: '-140px'
            });
        } else {
            navDoc.css({
                'position': 'absolute',
                'top': topHeight + 'px'
            });
            $('#logo a').css({
                marginLeft: '0px'
            });
        }
    });

    var topH = $('#top').innerHeight();
    var pro1_headerH = $('.bread-line').innerHeight();
    var f_moduleH = $('#f_module').innerHeight();
    var footerH = $('#footer').innerHeight();
    var cutH = topH + pro1_headerH + f_moduleH + footerH;

    // 将页面高度最小值设为窗口高度，铺满一屏
    $('#main').css({ 'minHeight': $(window).height() - cutH });

    // 判断是否登录过
    if (util.getCookie('username')) { 
    	$('.right_nav').html(`<p>欢迎你<br />${util.getCookie('username')}</p> <a href="javascript:void(0)" class="login-out"><i></i>退出</a>`)
    	$('body').on('click', '.login-out', function() {
	        util.delCookie('username');
	        location.reload();
	    });
    }
})();