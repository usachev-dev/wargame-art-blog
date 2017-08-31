'use strict';
var $ = require('jquery');


export default class ImgZoomable {
  constructor(modal) {
    $('.img-zoomable').each(function () {
      $(this).click(()=> {
        modal.setImage($(this).attr('src'));
        modal.show();
      });
    });
  }
}
