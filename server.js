var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Add middleware for parsing incoming request bodies
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Expose the public directory to access CSS files

app.use(express.static(path.join(__dirname, './app/public')));


// Add the application routes

require(path.join(__dirname, './app/routing/apiRoute'))(app);

require(path.join(__dirname, './app/routing/htmlRoute'))(app);



// Start listening on PORT

app.listen(PORT, function() {

  console.log('Friend Finder app is listening on PORT: ' + PORT);

});