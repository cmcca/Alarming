var dotenv = require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var path = require("path")


var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public",express.static(path.join(__dirname, "public")));

// Routes
require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/users";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

