'use strict';
var pug = require('pug'),
    $ = require('jquery');//,

//blocks
import ImgZoomable from '../_modules/blocks/img-zoomable/img-zoomable';
import TitleSlide from '../_modules/blocks/title-slide/title-slide';

//modules
import Modal from '../_modules/modal/modal';
import Navbar from '../_modules/navbar/navbar';

//console.log(pug.render('p example', {}));


var modal = new Modal,
    imgZoomable = new ImgZoomable(modal),
    navbar = new Navbar(65);

