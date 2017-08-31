module.exports.homepage = function (req,res){
    res.render('./pages/homepage', {
        title:'Wargame Art'
    });
};

module.exports.articles = function (req,res){
    res.render('./pages/articles', {
        title: 'Wargame Art'
    });
};

module.exports.battleReports = function (req,res){
    res.render('./pages/battle-reports', {
        title:'Wargame Art'
    });
};

module.exports.posts = function (req,res){
    res.render('./pages/articles', {
        title:'Wargame Art'
    });
};

module.exports.contacts = function (req,res){
    res.render('./pages/contacts', {
        title:'Wargame Art'
    });
};