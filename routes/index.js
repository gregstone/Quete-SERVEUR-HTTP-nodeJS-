var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'thank you for your corection of my challenge, enjoy the tour' });
});

router.get('/about', function(req, res, next) {
  res.render('pageabout', { title: 'Good your are still here. Welcome to the second page. stay tuned the deepest secrets are coming' });
});

module.exports = router;
