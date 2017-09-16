var _ = require ('underscore'),
  handleError = require('./error.js'),
  request = require ('request');


apiOptions = {
  server: "http://localhost:3000"
};

if (process.env.NODE_ENV === 'production'){
  apiOptions.server = "https://wargame-art-blog.herokuapp.com";
}





module.exports.posts = function (req,res){
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
      res.render('pages/posts', {list:list});
    } else {
      handleError(req,res,response.statusCode)
    }
  });
};


module.exports.articles = function (req,res){
  res.render('./pages/articles', {
    title:'Wargame Art'
  });
};

module.exports.battleReports = function (req,res){
  res.render('./pages/battle-reports', {
    title: 'Wargame Art'
  });
};

module.exports.paintingArticles = function (req,res){
  res.render('./pages/painting-articles', {
    title: 'Wargame Art'
  });
};
