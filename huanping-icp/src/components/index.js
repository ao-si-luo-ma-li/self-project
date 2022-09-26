import '../assets/scss/common/reset.scss';
import '../assets/scss/common/common.scss';
import '../assets/scss/main.scss';

import './common/nav.js';
import '../lib/easing.js'
import '../lib/owl.carousel.js'
import '../lib/move-top.js'
import '../lib/responsiveslides.min.js'
// import '../lib/jquery.countup.js'
const util = require('./common/common.js');

$(function() {

  $("#slider4").responsiveSlides({
    auto: true,
    pager:false,
    nav:true ,
    speed: 900,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });
  
  jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 900);
    });
  });
  
  var defaults = {
    containerID: 'toTop', // fading element id
    containerHoverID: 'toTopHover', // fading element hover id
    scrollSpeed: 1200,
    easingType: 'linear'
  };
  
  
  $().UItoTop({
    easingType: 'easeOutQuart'
  });
  
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
  991: {
        items: 2,
        nav:true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
        margin: 15
      }
    }
  });
  
  // $('.counter').countUp();
})
