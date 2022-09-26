import '../assets/scss/common/reset.scss';
import '../assets/scss/main.scss';

import '../lib/glass.js';
import './common/nav.js';
const util = require('./common/common.js');
const allpts = require('./common/pt.js');

(function() {

	// 查看购物车信息
	function initCartList() {
		// let shopList = JSON.parse(util.StorageGetter('al_now_pro'));
		let arr = [];
		let pro_str = '';
		let prices = [];

		if (util.StorageGetter('al_now_pro')) {
			arr = util.StorageGetter('al_now_pro').split('|');
		}

		for (var i = 0; i < arr.length; i++) {
			let _pro = JSON.parse(arr[i]);
			prices.push(_pro['price']);
			pro_str += `
				<div class="cart_cont clearfix">
					<div class="cart_item t_name">
						<div class="cart_shopInfo clearfix">
							<img src="${_pro['image']}" alt="">
							<div class="cart_shopInfo_cont">
								<p class="cart_link get-pro-name">${_pro['name']}</p>
							</div>
						</div>
					</div>
					<div class="cart_item t_price">
						${_pro['price']}
					</div>
					<div class="cart_item t_num">有货</div>
					<div class="cart_item t_num">x1</div>
					<div class="cart_item t_subtotal t_red get-pro-price">${_pro['price']}</div>
				</div>
			`;
		}

		$('.cartlist-inner').empty().append(pro_str);
		$('#total_money').text('￥'+prices.reduce(function(first,second) {
			return (parseFloat(first) + parseFloat(second)).toFixed(2);
		}))

	};
	initCartList();

	function toPay() {
		var flag = true;
		var payInfo = {};
		let content = [];
		let prices = [];
		$.each($('.input'), function() {
			if (!$(this).val()) {
				alert('收货信息没有填写完整！');
				flag = false;
				return false;
			}
		});
		payInfo.sendLoc = $('.send_loc_1').val() + $('.send_loc_2').val();
		payInfo.sender = $('.send_per').val();
		payInfo.sendMoile = $('.send_mobile').val();
		payInfo.type = $('input[name="pay_type"]:checked').val();

		$.each($('.get-pro-name'), function() {
			content.push($(this).text());
		})
		payInfo.content = content.join('||');
		payInfo.prices = $('#total_money').text();

		console.log(payInfo)

		if(!flag) {
			return false;
		}
		util.StorageSetter('al_pay_pro', payInfo);
		window.open('./pay.html','_self');
	}

	// 去提交订单
	$('.to-pay').click(toPay);

})();