var db = require("../models");


  console.log("Connected to the userdb file");

  var check  = {
      find(req,res,Name, Password){

         db.User.find({Name: Name, Password : Password})
         .then(function(dbUser){
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
      // Alarm(req,res,alarmName,alarmTime){
      //   var alarms = {};
      //   alarms.alarmName = alarmName;
      //   alarms.alarmTime = alarmTime;
      //   db.Alarms.create(alarms)
      //   res.send("Alarm Created: " + alarms)
      //   console.log(JSON.stringify(alarms))
      // }
      
  }

module.exports = check;
