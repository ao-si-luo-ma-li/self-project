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

		if (util.StorageGetter('al_shop_pro')) {
			arr = util.StorageGetter('al_shop_pro').split('|');
		}

		for (var i = 0; i < arr.length; i++) {
			let _pro = JSON.parse(arr[i]);
			// let _pro = evel("(" + arr[i] + ")");
			pro_str += `
				<div class="cart_cont clearfix">
					<div class="cart_item t_checkbox"><input type="checkbox" name="cart-name"></div>
					<div class="cart_item t_name">
						<div class="cart_shopInfo clearfix">
							<img src="${_pro['image']}" alt="">
							<div class="cart_shopInfo_cont">
								<p class="cart_link get-pro-name">${_pro['name']}</p>
								<p class="cart_link"><a href="./pro-detail.html?${_pro['version']}">查看详情</a></p>
							</div>
						</div>
					</div>
					<div class="cart_item t_price">
						${_pro['price']}
					</div>
					<div class="cart_item t_num">x1</div>
					<div class="cart_item t_subtotal t_red get-pro-price">${_pro['price']}</div>
					<div class="cart_item t_delete"><a href="javascript:void(0)" class="del-this" data-name="${_pro['name']}">移除</a></div>
				</div>
			`;
		}

		$('.cartlist-inner').empty().append(pro_str);

	};
	initCartList();

	let select_pro = {
		price: [],
		name: []
	};
	// 计算选中的商品
	function computSelect() {
		select_pro = {
			price: [],
			name: []
		};

		$.each($('.cartlist-inner input[type="checkbox"]:checked'), function() {
			select_pro.price.push($(this).closest('.cart_cont').find('.get-pro-price').text());
			select_pro.name.push($(this).closest('.cart_cont').find('.get-pro-name').text());
		});
		if (select_pro.price.length > 0) {
			$('.cost-all .amout').text('￥'+select_pro.price.reduce(function(first,second) {
				return (parseFloat(first) + parseFloat(second)).toFixed(2);
			}));
		}else {
			$('.cost-all .amout').text('0.00');
		}
		$('.num-all .num').text(select_pro.price.length);
	}

	// 去提交订单
	function toShop() {
		let arr = [];

		$.each($('.cartlist-inner input[type="checkbox"]:checked'), function(index, item) {
			let _obj = {
				image: $(this).closest('.cart_cont').find('img').attr('src'),
				name: select_pro.name[index],
				price: select_pro.price[index]
			}
			arr.push(JSON.stringify(_obj));
		});
		if (arr.length === 0) {
			alert('至少选择一个商品进行结算！');
			return false;
		}

		util.StorageSetter('al_now_pro', arr.join('|'));

		window.open('./shop.html','_self');
	}

	// 删除选中的商品
	function delSelect(...more) {
		// 从缓存中删除对应商品
		let arr = util.StorageGetter('al_shop_pro').split('|');
		let arrObj = [];
		for (var i = 0; i < arr.length; i++) {
			arrObj.push(JSON.parse(arr[i]))
		}
		for (let _delSel of more) {
			arrObj.forEach((item,index) => {
				if (item.name == _delSel) {
					arr.splice(index,1);
					return false;
				}
			});
		}
		util.StorageSetter('al_shop_pro', arr.join('|'));
		initCartList();
		computSelect();
	}

	// 购物车全选
	$('.select-all').click(function() {
		$('.cartlist-inner input[type="checkbox"]').prop('checked', this.checked);
		computSelect();
	});

	// 一般选择商品
	$('.cartlist-inner input[type="checkbox"]').click(function() {
		computSelect()
	});

	// 删除选中的商品
	$('.del-all').click(function() {
		if (select_pro.name.length > 0) {
			delSelect(...select_pro.name);
		}else {
			alert('至少选择一个删除商品！');
		}
	});

	$('.cartlist-inner').on('click', '.del-this', function() {
		delSelect(this.dataset.name);
	})

	// 去提交订单
	$('.to-shop').click(toShop);

})();