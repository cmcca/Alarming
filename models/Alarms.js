var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var userSchema = new Schema({

  alarmName: {
    type: String,
    required: true
  },
  alarmTime: {
    type: Number,
  },

});

var User = mongoose.model("user", userSchema);

module.exports = User;
