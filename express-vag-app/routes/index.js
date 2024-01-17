var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express Vag Tutorial',
    message: 'Vah Express Node.js Tutorial',
  });
});

module.exports = router;
