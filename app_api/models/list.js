var mongoose = require ('mongoose');

var postListSchema = new mongoose.Schema({
  title: {type: String, required: true},
  subtitle: {type: String},
  category: {type: String},
  cover: {type: String},
  date: {type: String},
  slugUrl: {type: String},
  slugCamel: {type: String}
});

mongoose.model('postListModel', postListSchema, 'post-slugs');
