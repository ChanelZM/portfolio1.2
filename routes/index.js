var homeRouter = require('./home');
var aboutRouter = require('./about');
var workRouter = require('./work');
var contactRouter = require('./contact');

module.exports = {
    '/' : homeRouter,
    '/about': aboutRouter,
    '/work': workRouter,
    '/contact': contactRouter,
    '/*': function(req, res){
        res.render('content/error', {
            error: 'Page not found',
            meta: 'The page you requested doesn\'t exist!',
            href: 'undefined'
        })
    }
}
