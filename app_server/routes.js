var express = require('express'),
    router = express.Router(),
    ctrlPages = require('./controllers/pages'),
    ctrlPost = require('./controllers/post'),
    ctrlLists = require('./controllers/lists');

router.get('/',ctrlPages.homepage);
router.get('/contacts',ctrlPages.contacts);

router.get('/battle-reports',ctrlLists.battleReports);
router.get('/posts',ctrlLists.posts);
router.get('/articles',ctrlLists.articles);


router.get('/posts/:slug', ctrlPost.post);

module.exports = router;
