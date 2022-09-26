import '../assets/scss/common/reset.scss';
import '../assets/scss/main.scss';

import '../lib/glass.js';
import './common/nav.js';
const util = require('./common/common.js');
const allpts = require('./common/pt.js');

(function() {

	const third_part = ['新松联手机旗舰店', '佳沪数码手机旗舰店', '易道手机专营店'];
	function setGlass() {
		// 商品放大镜效果
		var showproduct = {
			"boxid": "showbox",
			"sumid": "showsum",
			"boxw": 310, //宽度,该版本中请把宽高填写成一样
			"boxh": 310, //高度,该版本中请把宽高填写成一样
			"sumw": 60, //列表每个宽度,该版本中请把宽高填写成一样
			"sumh": 60, //列表每个高度,该版本中请把宽高填写成一样
			"sumi": 7, //列表间隔
			"sums": 4, //列表显示个数
			"sumsel": "sel",
			"sumborder": 1, //列表边框，没有边框填写0，边框在css中修改
			"lastid": "showlast",
			"nextid": "shownext"
		}; //参数定义	  
		$.ljsGlasses.pcGlasses(showproduct); //方法调用，务必在加载完后执行
	}
	// setGlass();

	let arg, imgSrc, storeName;
	var setchose = function(price) {
		let color = $('#colorSelect .des_item_acitve').text();
		let ver = $('#des_select_more .des_item_acitve').text();
		let name = arg.split(',')[1];

		if (name == 'ipad2') {
			name = 'ipad';
		}
		if (name == 'ipad3') {
			name = 'ipad min';
		}
		if (name == 'ipad4') {
			name = 'ipad pro';
		}
		if (name == 'iwatchs') {
			name = 'sport watch';
		}
		if (name == 'iwatchs2') {
			name = 'Watch Sport Series';
		}
		if (name == 'iwatchs2n') {
			name = 'iWatch Series';
		}

		$('.des_select span').text(color + ver);
		if (price) {
			$('#des_money').text(price + '.00');
		}
		$('.des_content_tit').html(`全网底价 Apple 苹果 <span class="true-c">${$.trim(name)} ${$.trim(ver)} ${$.trim(color)}</span> 产批次不同混合发货`);
	}
	var setDetail = function() {
		arg = location.href.split('?')[1] ? location.href.split('?')[1].split('&')[0] : 'iphone,iphone7';
		if (location.href.split('?')[1] && location.href.split('?')[1].split('&')[1]) {
			storeName = location.href.split('?')[1].split('&')[1] ? unescape(location.href.split('?')[1].split('&')[1].split('=')[1]) : '新松联手机旗舰店';
		}

		let colors = allpts.getOne(arg).colors;
		let versions = allpts.getOne(arg).versions;
		let prices = allpts.getOne(arg).prices;
		let detail = allpts.getOne(arg).detail;
		imgSrc = allpts.getOne(arg).srcs;

		$('#colorSelect').empty();
		let colorStr = '';
		colors.forEach(function(value, index) {
			if (index === 0) {
				colorStr += `
					<div class="des_item des_item_acitve" data-src="${index + 1}">
	                   ${value}
	                </div>
				`;
			} else {
				colorStr += `
					<div class="des_item" data-src="${index + 1}">
	                   ${value}
	                </div>
				`;
			}
		});
		$('#colorSelect').append(colorStr);

		$('#des_select_more').empty();
		let verStr = '';
		versions.forEach(function(value, index) {
			if (index === 0) {
				verStr += `
					<div class="des_item des_item_sm des_item_acitve" data-index="${index}">
		                ${value}
		            </div>
				`;
			} else {
				verStr += `
					<div class="des_item des_item_sm" data-index="${index}">
	                   ${value}
	                </div>
				`;
			}
		});
		$('#des_select_more').append(verStr);

		$('#colorSelect').on('click', '.des_item', function() {
			let src_index = $(this).attr('data-src');
			let inner_imgStr = '';
			let new_pic = imgSrc['src_' + src_index][0];
			imgSrc['src_' + src_index].forEach(function(value, index) {
				inner_imgStr += `
					<img src="${value}" width="450" height="450" />
				`;
			});
			$('#showsum').empty();
			$('#showbox').empty().append(inner_imgStr);
			$('#showbox').attr('data-src', new_pic);
			console.log($('#showsum').find('img').length)

			setGlass();

			$(this).addClass('des_item_acitve').siblings('.des_item').removeClass('des_item_acitve');
			setchose();
		});
		$('#des_select_more').on('click', '.des_item', function() {
			let index = $(this).attr('data-index');
			$(this).addClass('des_item_acitve').siblings('.des_item').removeClass('des_item_acitve');
			setchose(prices[index]);
		});

		// 设置产品详情
		$('.des_infoContent').html(detail);
		$('.third-part').text($('.al-provider').text()?$('.al-provider').text():third_part[Math.floor(Math.random() * 3)]);
		if (storeName) {
			$('.third-part').text(storeName);
		}

		// 设置产品图片
		let imgStr = '';
		imgSrc.src_1.forEach(function(value, index) {
			imgStr += `
				<img src="${value}" width="450" height="450" />
			`;
			$('#showbox').attr("data-src", value);
		});
		$('#showbox').empty().append(imgStr);
		// 设置图片后，初始化插件
		setGlass();

		setchose(prices[0]);
	};
	setDetail();

	$('.plus').click(function() {
		if (parseInt($('#des_input').val()) < 1) {
			$('#des_input').val(parseInt($('#des_input').val()) + 1);
		}
	})
	$('.reduction').click(function() {
		if (parseInt($('#des_input').val()) > 1) {
			$('#des_input').val(parseInt($('#des_input').val()) - 1);
		}
	})

	// 点击立刻购买
	$('.buy_btn').click(function() {

		// 先加入购物车
		let arr = [];

		// 持久化设备信息
		let al_shop_pro = {
			name: $('.des_content_tit .true-c').text(),
			price: $('#des_money').text(),
			image: $('#showbox').attr('data-src'),
			version: location.href.split('?')[1]
		}
		if (util.StorageGetter('al_shop_pro')) {
			arr = util.StorageGetter('al_shop_pro').split('|');
		}
		arr.push(JSON.stringify(al_shop_pro));
		console.log(arr)
		$('.shopNum').text(arr.length);

		util.StorageSetter('al_shop_pro', arr.join('|'));

		// 再前往订单提交页面
		// 判断是否登录过
		if (util.getCookie('username')) {

			// 持久化设备信息
			let al_now_pro = {
				image: $('#showbox').attr('data-src'),
				name: $('.des_content_tit .true-c').text(),
				price: $('#des_money').text()
			};
			util.StorageSetter('al_now_pro', JSON.stringify(al_now_pro));
			window.open('./shop.html', '_self');
		}else {
			window.open('./login.html', '_self');
		}
	})


	// 点击加入购物车
	$('.shopping_btn').click(function() {
		let arr = [];

		// 持久化设备信息
		let al_shop_pro = {
			name: $('.des_content_tit .true-c').text(),
			price: $('#des_money').text(),
			image: $('#showbox').attr('data-src'),
			version: location.href.split('?')[1]
		}
		if (util.StorageGetter('al_shop_pro')) {
			arr = util.StorageGetter('al_shop_pro').split('|');
		}
		arr.push(JSON.stringify(al_shop_pro));
		console.log(arr)
		$('.shopNum').text(arr.length);

		util.StorageSetter('al_shop_pro', arr.join('|'));
		initShopList();

		alert('加入购物车成功！');
	});

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

	// 查看商铺详情
	$('#into-store').click(function() {
		let storeName = $('.third-part').eq(0).text();
		let storeUrl = `./thirdstore.html?store=${escape(storeName)}`;

		window.open(storeUrl, '_self');
	})

})();