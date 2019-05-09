var db = require("../models");
var ls = require("local-storage");


  console.log("Connected to the userdb file");

  var check  = {
      find(req,res,Name, Password){

         db.User.find({Name: Name, Password : Password})
         .then(function(dbUser){
           console.log(dbUser)
           if (dbUser.length > 0){
          res.json(dbUser);
          console.log("Success")
           }
           else{
             res.send("No User Found")
           }
         })
         .catch(function (err) {
          // If an error occurred, send it to the client
          res.json(err);
          console.log("failure")
        });

      },
      create(req,res,Name, Password){
        var result = {};
        result.Name = Name;
        result.Password = Password
        db.User.create(result)
        res.send("User Created: " + JSON.stringify(result))
        console.log(JSON.stringify(result))
      },
      alarm(req,res,alarmName,alarmTime){
        var result = {};
        result.alarmName = alarmName;
       result.alarmTime = alarmTime;
       db.Alarms.create(result);
       res.send("Alarm Created: " + JSON.stringify(result))
       console.log(JSON.stringify(result))
      },
      song(req,res,song){
        ls.clear();
        ls.set(Song, song);
      }
      
  }

module.exports = check;
