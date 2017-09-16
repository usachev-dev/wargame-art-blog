var _ = require ('underscore'),
  handleError = require('./error.js'),
  request = require ('request');

apiOptions = {
  server: "http://localhost:3000"
};

if (process.env.NODE_ENV === 'production'){
  apiOptions.server = "https://wargame-art-blog.herokuapp.com";
}

module.exports.post = function (req,res){
  let slug = req.params.slug,
    path = '/api/posts/'+slug,
    requestOptions = {
      url: apiOptions.server + path,
      method: "GET"
    };
  request(requestOptions, function (err, response, body){
    if (response.statusCode === 200 && body){
      let data = JSON.parse(body);
      _.extend(data,{

      });
      res.render('pages/post', data);
    } else {
      handleError(req,res,response.statusCode)
    }
  });
};
