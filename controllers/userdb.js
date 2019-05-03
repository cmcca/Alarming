var db = require("../models");



  console.log("Connected to the userdb file");

  var check  = {
      find(req,res,Name, Email){

         db.User.find({Name: Name})
         .then(function(dbUser){
           if (dbUser.length > 0){
          res.json(dbUser);
          console.log("Success")
           }
           else{
             var result = {};
             result.Name = Name;
             result.Email = Email;
             db.User.create(result)
             res.send("User Created: " + JSON.stringify(result))
             console.log(JSON.stringify(result))
           }
         })
         .catch(function (err) {
          // If an error occurred, send it to the client
          res.json(err);
          console.log("failure")
        });

      }
  }

module.exports = check;
