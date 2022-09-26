import '../assets/scss/common/reset.scss';
import '../assets/scss/main.scss';

import '../lib/jquery.slides.min.js';
import './common/nav.js';
const tstore = require('./common/tstore.js');
const util = require('./common/common.js');
const proData = require('./common/pt.js');

(function() {
	var storeName;
	function initPro(type) {
		let pro_num = 0;
		(function setList() {
			let str = '';
			let _type = proData.allpt[type];
			for (let value in _type) {
				if (pro_num > 3) {
					break;
				}
				let name = value;

				if (name == 'ipad2') {name = 'ipad';}
				if (name == 'ipad3') {name = 'ipad min';}
				if (name == 'ipad4') {name = 'ipad pro';}
				if (name == 'iwatchs') {name = 'sport watch';}
				if (name == 'iwatchs2') {name = 'Watch Sport Series';}
				if (name == 'iwatchs2n') {name = 'iWatch Series';}

				str += `
					<div class="item">
						<div class="item_cont">
							<div class="img_item">
								<a href="./pro-detail.html?${type},${value}&store=${escape(storeName)}"><img src="${_type[value].srcs.src_1[0]}" alt=""></a>
							</div>
							<p><a href="./pro-detail.html?,${type}${value}${escape(storeName)}" class="title">${name} ${_type[value].colors[0]} ${_type[value].versions[0]}</a></p>
							<p class="money">￥${_type[value].prices[0]}.00</p>
							<p>评论：<span class="stars"></span><span class="stars"></span><span class="stars"></span><span class="stars"></span><span class="stars"></span><span></span><a href="javascript:void(0)"&nbsp;>(0条)</a></p>
						</div>
					</div>
				`;
				pro_num++;
			}
			$('.products_list').append(str);
		})()
	}

	function initstore() {
		storeName = unescape(util.GetUrlType(location.href).store);
		$('.store-name').text(storeName);
		$('.st-name-short').text(storeName.slice(0,2));

		for (var i = 0; i < tstore.thstores.length; i++) {
			if (storeName.indexOf(tstore.thstores[i]) > -1) {
				$('.th_banner img').attr('src', tstore.thstores_ban[i]);
				break;
			}
		}

		initPro('iphone');
		initPro('ipad');
		initPro('iwatch');
	}
	initstore();

})();