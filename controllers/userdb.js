var db = require("../models");
var express = require("express");
var app = express();

module.exports = function (apps){

  console.log("Connected to the userdb file");

app.get("/user/:Name/:Email", function(req,res){

  res.send("Hello"); 
    result.Status = "Success";
    
//Search DB for email
db.User.find({Name : result.Email})
    .then(function (dbUser) {
      // If we were able to successfully find User, send them back to the client
      res.json(dbUser);
      console.log("Success")


    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
      console.log("failure")
    });

  })

}
