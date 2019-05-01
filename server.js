var dotenv = require("dotenv").config();
var express = require("express");
var path = require("path")

var app = express();
var PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use("/public",express.static(path.join(__dirname, "public")));

// Routes
require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app);

console.log("Server working")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

console.log("Server Connected")


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

