'use strict';
var $ = require('jquery');

export default class Modal {
  constructor() {
    var self = this;
    this.src = '/images/1_1.jpg';
    this.state = 'hidden';

    this.$container = $('.modal__container');
    this.$modal = $('.modal');
    this.$wrapper = $('.modal-wrapper');
    this.$closeButton = $('.modal__close-button');
    this.$window = $(window);

    this.setImage = function(src) {
      self.src = src;
      self.$container.css('background-image', 'url('+src+')');
    };

    this.show = function (){
      if(self.state==='hidden'){
        self.state = 'shown';
        self.$modal.removeClass('modal_hidden');
      }
    };
    this.hide = function (){
      if(self.state==='shown'){
        self.state = 'hidden';
        self.$modal.addClass('modal_hidden');
      }
    };
    this.toggle = function (){
      if (self.state === 'hidden'){
        self.show();
      } else {
        self.hide();
      }
    };

    this.$closeButton.click(this.hide);
    this.$wrapper.click(this.hide);
    this.$window.scroll(this.hide);
  }
}
