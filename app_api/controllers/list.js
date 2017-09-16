var mongoose = require('mongoose'),
  List = mongoose.model('postListModel'),
  utils = require('../utils');

module.exports.getList = function(req,res){
  List
    .find()
    .exec(function(err,list){
      if(err){
        utils.sendJsonResponse(res,404,err);
        return;
      }
      utils.sendJsonResponse(res,200,list);
    });
};
module.exports.getList_battleReports = function(req,res){

};

module.exports.getList_paintings = function(req,res){

};
module.exports.getList_articles = function(req,res){

};

