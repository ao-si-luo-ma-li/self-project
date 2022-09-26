import '../assets/scss/common/reset.scss';
import '../assets/scss/gameCenter.scss';
import './common/nav.js';
import './plugin/slide.min.js'
import './plugin/slide.css'

(function() {
    $('#slide3d').slideCarsousel({ slideType: '3d', indicatorEvent: 'mouseover' });
    $('#full-list .item').hover(
    	function() {
	        $(this).addClass('active');
	        setPosition($(this).attr('data-index'));
	    },
	     function() {
	        $(this).removeClass('active');
	    }
    );
    var originW = 25;
    var activeW = 40;
    var inactiveW = 20;

    function setPosition(index) {
        var itemList = $('#full-list .item');
        for (var i = 0; i < itemList.length; i++) {
            var tem_index = $(itemList[i]).attr('data-index');
            if (index) {
                if(tem_index < index) {
                    $(itemList[i]).css({
                        'left': tem_index * inactiveW + '%',
                        'width': inactiveW + '%'
                    });
                } else if (tem_index == index) {
                    $(itemList[i]).css({
                        'left': tem_index * inactiveW + '%',
                        'width': activeW + '%'
                    });
                } else {
                    $(itemList[i]).css({
                        'left': (parseInt(tem_index) - 1) * inactiveW + activeW + '%',
                        'width': inactiveW + '%'
                    });
                }
            } else {
                $(itemList[i]).css({
                    'left': tem_index * originW + '%',
                    'width': originW + '%'
                });
            }
        }
    }
    setPosition();
})();