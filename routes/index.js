var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ title: 'Quiz' });
});

router.get('/author', function(req, res, next) {
  res.render('../views/author.ejs', { title: ' Quiz' });
  res.render('/public/images/images.jpg', { title:  'Quiz' });
});


module.exports = router;
