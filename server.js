var dotenv = require("dotenv").config();
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var check = require("./controllers/userdb");
var app = express();
var PORT = process.env.PORT || 3001;

var MONGODB_URI = "mongodb://JasonNelson:Nelson2009@ds151076.mlab.com:51076/heroku_glgqmn6c";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .catch(console.error());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
require("./app/routes/api-routes")(app);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/users";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);
console.log("Server working")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

console.log("Server Connected")

app.get("/user/login/:Name/:Password", function(req, res){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  nameofPerson = req.params.Name;
  passwordofPerson = req.params.Password;
check.find(req,res,nameofPerson,passwordofPerson)
});

app.get("/user/signup/:Name/:Password", function(req, res){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  nameofPerson = req.params.Name;
  passwordofPerson = req.params.Password;
check.create(req,res,nameofPerson,passwordofPerson)
});

// app.get("/user/alarm/:alarmName/:alarmTime", function(req,res){
//   alarmName = req.params.alarmName;
//   alarmTime = req.params.alarmTime;
//   check.Alarm(req,res,alarmName,alarmTime)
// })


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

