var mongoose = require('mongoose'),
  Post = mongoose.model('postModel'),
  utils = require('../utils');

module.exports.getPost = function(req,res){
  Post
    .findOne({"slug":req.params.slug})
    .exec(function(err,post){
      if(err){
        utils.sendJsonResponse(res,404,err);
        return;
      }
      utils.sendJsonResponse(res,200,post);
    });
};
