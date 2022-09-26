import smoothScroll from '../../lib/jquery.smooth-scroll';
const util = require('./common.js');
(function() {
    const params = util.queryURL(window.location.href);
    if (params) {
      $('.to-link').addClass('nav_active').siblings('a').removeClass('nav_active');
      setTimeout(() => {
        smoothScroll(params.hash);
      }, 0);
    }
    
    function smoothScroll(hash) {
      $.smoothScroll({
        scrollTarget: `#${hash}`
      });
    }

    $.each($('#moyuHeader a'), (index, dom) => {
      if ($(dom).attr('href')) {
        const url = $(dom).attr('href').split('/')[1]
        const isOK =  window.location.href.indexOf(url) > -1
        if (isOK) {
          $(dom).addClass('selected')
        }
        else {
          $(dom).removeClass('selected')
        }
      }
    })

    const login = () => {
      $('#identifier').modal('show');
    };

    $('#moyuHeader').find('.hasModel').on('click', login);

    
    // $('.nav .hasModel').on('click', function() {
    //   $(this).addClass('nav_active').siblings('a').removeClass('nav_active');

    //   if ($(this).hasClass('to-link')) {
    //     smoothScroll('downView');
    //   }
    // });
})();