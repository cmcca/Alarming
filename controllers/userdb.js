var db = require("../models");
var express = require("express");
var apps = express();

module.exports = function (app){

apps.get("/user/:Name/:Email", function(req,res){

    var result = {};

    result.Name = req.params.User;
    result.Email = req.params.Email;
    result.Status = "Success";
    
//Search DB for email
db.User.find({Name : result.Name})
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
