var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.render('content/home', {
      href: 'undefined'
  });
});

module.exports = router;
