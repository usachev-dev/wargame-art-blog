module.exports =  function(req,res, status){
  if(status === 404){
    res.render('error404');
  } else {
    res.render('error');
  }
};
