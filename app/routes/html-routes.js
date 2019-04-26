var path = require("path");
var express = require("express");
var app = express();
​
​
// Routes
// =============================================================
module.exports = function(app) {
​
 // Each of the below routes just handles the HTML page that the user gets sent to.
​
 // index route loads view.html
 app.get("/", function(req, res) {
  res.render("client/public/index");
 });
​
​
​
​
​
};