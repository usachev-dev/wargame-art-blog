var express = require('express');
var router = express.Router();
var List = require('./controllers/list');
var Post = require('./controllers/post');

router.get('/articles', List.getList_articles);
router.get('/battle-reports',List.getList_battleReports);
router.get('/posts',List.getList);
router.get('/painting',List.getList_paintings);

router.get('/posts/:slug',Post.getPost);

module.exports = router;
