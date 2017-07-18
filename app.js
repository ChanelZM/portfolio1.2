var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

var routes = require('./routes/index');
for (var x in routes) {
    if (routes.hasOwnProperty(x)) {
        app.use(x, routes[x])
    }
}




app.listen(process.env.PORT || 4000, function () {
  console.log("Running at port 4000");
});
