import '../assets/scss/common/reset.scss';
import '../assets/scss/tip.scss';
import './common/nav.js';
// import AMap from 'AMap';

(function() {
	$('.for_parent .tab li').click(function() {
		var index = this.dataset.index;
		$(this).addClass('active').siblings().removeClass('active');
		$('.tabContent .o_Content').hide().eq(index).show();
	});
})();