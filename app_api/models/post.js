var mongoose = require ('mongoose');

var listAlternatingImagesSchema = new mongoose.Schema({
  title: {type: String},
  text: {type: String},
  image: {type: String},
  caption: {type: String},
  subcaption: {type: String}
});


var blockSchema = new mongoose.Schema({
  name:{type: String, required: true},
  title:{type: String},
  subtitle: {type: String},
  cover: {type: String},
  chapter_number: {type: String},
  image:{type: String},
  text:{type: String},
  src:{type: String},
  list:[{type: String}],
  type:{type: String},
  caption:{type: String},
  listAlternatingImages:[listAlternatingImagesSchema],
  symbol:{type: String}
});



var postSchema = new mongoose.Schema({
  slug:{type: String, required: true},
  blocks:[blockSchema]
});

mongoose.model('postModel', postSchema, 'post-data');
