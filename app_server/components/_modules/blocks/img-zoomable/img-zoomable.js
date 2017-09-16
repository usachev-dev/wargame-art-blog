'use strict';
var $ = require('jquery');


export default class ImgZoomable {
  constructor(modal) {
    $('.img-zoomable').each(function () {
      $(this).click(()=> {
        var imagePath = $(this).attr('src').split('/'),
          w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
          sizes = [320,640,1280,1980],
          sizeToShow = 1980;
        for(var i=0; i<sizes.length-1; i++){
          if(w<sizes[i+1]){
            sizeToShow = sizes[i+1];
            break;
          }
        }

        imagePath[imagePath.length-2] = sizeToShow;

        modal.setImage(imagePath.join('/'));
        modal.show();
      });
    });
  }
}
