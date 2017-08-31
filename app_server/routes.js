var express = require('express');
var router = express.Router();
var ctrlPages = require('./controllers/pages');
var ctrlPost = require('./controllers/post');

router.get('/',ctrlPages.homepage);
router.get('/about',ctrlPages.articles);
router.get('/battle-reports',ctrlPages.battleReports);
router.get('/contacts',ctrlPages.contacts);
router.get('/posts',ctrlPages.posts);
router.get('/articles',ctrlPages.articles);


router.get(/\/posts\/(.*)/, ctrlPost.post);

module.exports = router;
