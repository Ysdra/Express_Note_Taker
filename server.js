var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Initial Express App set-up 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Initializes the web server to begin listening on the specified port 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
