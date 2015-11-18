var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.render('index', { title: 'Express Users' });
});

module.exports = router;
