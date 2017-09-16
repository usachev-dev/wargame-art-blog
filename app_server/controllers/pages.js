var _ = require ('underscore'),
  handleError = require('./error.js'),
  request = require ('request');


apiOptions = {
  server: "http://localhost:3000"
};

if (process.env.NODE_ENV === 'production'){
  apiOptions.server = "https://wargame-art-blog.herokuapp.com";
}


module.exports.homepage = function (req,res){
  let path = '/api/posts',
    requestOptions = {
      url: apiOptions.server + path,
      method: "GET"
    };
  request(requestOptions, function (err, response, body){
    if (response.statusCode === 200 && body){
      let list = JSON.parse(body);
      _.extend(list,{

      });
      res.render('pages/homepage', {list:list});
    } else {
      handleError(req,res,response.statusCode)
    }
  });
};

module.exports.contacts = function (req,res){
    res.render('./pages/contacts', {
        title:'Wargame Art'
    });
};
