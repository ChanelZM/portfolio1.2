var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

var homeRouter = require('./routes/home');
var aboutRouter = require('./routes/about');
var workRouter = require('./routes/work');
var contactRouter = require('./routes/contact');

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/work', workRouter);
app.use('/contact', contactRouter);

app.listen(4000, function () {
  console.log("Running at port 4000");
});