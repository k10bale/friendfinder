var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var path = require("path");


var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(express.static('public'))

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

