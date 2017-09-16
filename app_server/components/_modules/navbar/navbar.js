'use strict';
var $ = require('jquery');

export default class Navbar {
  constructor(height) {
    var $navbar = $('.navbar'),
        topMenuHide = function(){
          if (topMenuStatus == 'hidden'){
            return;
          } else {
            topMenuStatus = 'hidden';
            $navbar.css('margin-top','-'+_height+'px');
          }
        },
        topMenuShow = function(){
          if (topMenuStatus == 'shown'){
            return;
          } else {
            topMenuStatus = 'shown';
            $navbar.css('margin-top','-0px');
          }
        },

        lastScrollTop = 0,
        topMenuStatus = 'shown',
        _height = height || 65;
    $(window).scroll(function(event){
      let st = $(this).scrollTop();
      if ((st - lastScrollTop)>2 &&(st>100)){
        topMenuHide();
      } else if ((st - lastScrollTop)<-5){
        topMenuShow();
      }
      lastScrollTop = st;
    });

    $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
      $('.navbar-collapse .dropdown-toggle').parent().addClass('opened');
    });
  }
}
