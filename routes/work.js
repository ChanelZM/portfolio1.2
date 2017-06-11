var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.render('content/work');
});

router.get('/blackops', function(req, res){
    res.render('content/blackops');
});

router.get('/data45', function(req, res){
    res.render('content/data45');
});

router.get('/ingapp', function(req, res){
    res.render('content/ingapp');
});

router.get('/xdconference', function(req, res){
    res.render('content/xdconference');
});

router.get('/hatepage', function(req, res){
    res.render('content/trumphatepage');
});

module.exports = router;
