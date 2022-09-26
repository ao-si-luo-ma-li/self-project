const util = require('./common.js');

(function() {
	//获取地址栏postID/uesrId
	$('#topOpen').click(function() {
		$('#topNav').stop().slideToggle();
		$(this).toggleClass('slide_List');
	});
	var navDoc = $('#pro1_header');
	var topHeight = $('#top').innerHeight();
	$(window).scroll(function() {
		var offsetTop = $(document).scrollTop();
		if (offsetTop > topHeight) {
			navDoc.css({
				'position': 'fixed',
				'top': '0'
			});
		} else {
			navDoc.css({
				'position': 'absolute',
				'top': topHeight + 'px'
			});
		}
	});

	(function() {
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

	$('body').on('click', '.login-out', function() {
		util.delCookie('username');
		location.reload();
	});

	// 主导航切换
	var shopClass_item_index;
	$('body').on('mouseenter', '.shopClass_item', function() {
		shopClass_item_index = $('.shopClass_item').index($(this));
		$('.shopClass_list').show();
		$('.shopList_item').hide().eq(shopClass_item_index).show();
	});
	$('body').on('mouseenter', '.shopClass_list', function() {
		$(this).show();
		$('.shopList_item').eq(shopClass_item_index).show();
		$('.shopClass_item').eq(shopClass_item_index).addClass('active');
	});
	$('body').on('mouseleave', '.shopClass_item', function() {
		$('.shopClass_list').hide();
	});
	$('body').on('mouseleave', '.shopClass_list', function() {
		$('.shopClass_list').hide();
		$('.shopClass_item').removeClass('active');
	});

	$('.shopClass_list').height($('.shopClass_show').height());

	// 右侧工具栏
	function setTool() {
		let str = `
			<div class="toolbar">
		         <div class="toolbar_tabs">
		             <div class="item">
		                 <a href="/myshoppingcart.html">
		                     <span>购物车</span>
		                     <i class="iconfont icon-cart"></i>
		                 </a>
		             </div>
		             <div class="item">
		                 <a href="/customer/myfollw.html">
		                     <span>我的收藏</span>
		                     <i class="iconfont icon-heart"></i>
		                 </a>
		             </div>
		             <div class="item">
		                 <a href="/customer/index.html">
		                     <span>会员中心</span>
		                     <i class="iconfont icon-wode"></i>
		                 </a>
		             </div>
		             <div class="item">
		                 <a href="/customer/insideletter.html">
		                     <span>消息中心</span>
		                     <i class="iconfont icon-xiaoxi"></i>
		                 </a>
		             </div>
		             <div class="item customer_service">
		                 <a href="https://gytk5.kuaishang.cn/bs/im/82398/72695/749944.htm" class="customer_online" target="_blank">
		                     <span>在线客服</span>
		                     <i class="iconfont icon-kefu"></i>
		                 </a>
		             </div>
		             <div class="item code-hover">
		                 <a href="javascript:;">
		                     <span>移动端</span>
		                     <i class="iconfont icon-phone"></i>
		                 </a>
		                <img src="/images/two_bar_code.png" class="two_code">
		             </div>
		             <div class="item">
		                 <a href="javascript:;" onclick="$('html,body').animate({scrollTop:0},500)">
		                     <span>回到顶部</span>
		                     <i class="iconfont icon-top"></i>
		                 </a>
		             </div>
		        </div>
		     </div>
		 </div>
		`;
		$('body').append(str);
	}

	// 查看购物车信息
	function initShopList() {
		// let shopList = JSON.parse(util.StorageGetter('al_now_pro'));
		let arr = [];
		let pro_str = '';

		if (util.StorageGetter('al_shop_pro')) {
			arr = util.StorageGetter('al_shop_pro').split('|');
		}else {
			$('.myshopList ul').empty()
		}

		if (arr.length > 0) {
			let prices = [];
			$('.myshopList .no-pro').hide();
			$('.myshopList .has-pro').show();
			$('.has-pro .num').text(arr.length);
			arr.forEach(function(value,index) {
				prices.push(parseFloat(JSON.parse(value).price));
			});
			$('.has-pro .cost').text(prices.reduce((first, second) => first + second) + '.00');
		}else {
			$('.myshopList .no-pro').show();
			$('.myshopList .has-pro').hide();
		}
		
		$('.shopNum').text(arr.length);
		for (var i = 0; i < arr.length; i++) {
			let _pro = JSON.parse(arr[i]);
			// let _pro = evel("(" + arr[i] + ")");
			pro_str += `
				<li class="clearfix">
	                 <img src="${_pro['image']}" alt="" class="left">
	                 <span class="middle title">${_pro['name']}</span>
	                 <div class="right">
	                     <div class="price"><span>${_pro['price']}</span> x1</div>
	                     <span class="delete" data-name="${_pro['name']}">删除</span>
	                 </div>
	             </li>
			`;
		}


		$('.myshopList ul').empty().append(pro_str);

	};
	initShopList();

	$('.myshopList').on('click', '.delete', function() {
		// 从缓存中删除对应商品
		let arr = util.StorageGetter('al_shop_pro').split('|');
		let arrObj = [];
		let del_index;

		for (var i = 0; i < arr.length; i++) {
			arrObj.push(JSON.parse(arr[i]))
		}
		arrObj.forEach((item,index) => {
			if (item.name == this.dataset.name) {
				del_index = index;
				return false;
			}
		});

		arr.splice(del_index,1);
		util.StorageSetter('al_shop_pro', arr.join('|'));

		$('.shopNum').text(arr.length);

		initShopList();
	});

	$('.go-cart').click(function() {
		// 判断是否登录过
		if (util.getCookie('username')) {
			window.open('./cart.html', '_self');
		}else {
			window.open('./login.html', '_self');
		}
	})

})();