  import '../assets/scss/common/reset.scss';
import '../assets/scss/main.scss';

import '../lib/glass.js';
import './common/nav.js';
const util = require('./common/common.js');
const proData = require('./common/pt.js');

(function() {

	if (location.href.indexOf('?') > -1) {
		// 主导航
		let type = location.href.split('?')[1];
		$('.nav a').each(function() {
			if ($(this).attr('href').indexOf(type) > -1) {
				$(this).addClass('active');
			}
		});
		
		(function setList() {
			let str = '';
			let _type = proData.allpt[type];
			for (let value in _type) {
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
								<a href="./pro-detail.html?${type},${value}"><img src="${_type[value].srcs.src_1[0]}" alt=""></a>
							</div>
							<p><a href="./pro-detail.html?,${type}${value}" class="title">${name} ${_type[value].colors[0]} ${_type[value].versions[0]}</a></p>
							<p class="money">￥${_type[value].prices[0]}.00</p>
							<p>评论：<span class="stars"></span><span class="stars"></span><span class="stars"></span><span class="stars"></span><span class="stars"></span><span></span><a href="javascript:void(0)"&nbsp;>(0条)</a></p>
						</div>
					</div>
				`;
			}
			$('.products_list').empty().append(str);
		})()

	}

	// 设置最小高度
	$('.inner_con').css({
		'minHeight': $('body').height() - $('.footer').height()
	})

})();