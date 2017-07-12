var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.render('content/work', {
      href: 'work'
  });
});

router.get('/blackops', function(req, res){
    res.render('content/blackops', {
        href: 'work'
    });
});

router.get('/data45', function(req, res){
    res.render('content/data45', {
        href: 'work'
    });
});

router.get('/ingapp', function(req, res){
    res.render('content/ingapp', {
        href: 'work'
    });
});

router.get('/xdconference', function(req, res){
    res.render('content/xdconference', {
        href: 'work'
    });
});

router.get('/hatepage', function(req, res){
    res.render('content/trumphatepage', {
        href: 'work'
    });
});

router.get('/vrijnederland', function(req, res){
    res.render('content/error', {
        error: 'Coming soon',
        meta: 'This project isn\'t done yet!',
        href: 'work'
    });
});

module.exports = router;
