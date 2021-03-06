var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var userSchema = new Schema({

  Name: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  },
  Alarms: {
    type: Schema.Types.ObjectId,
    ref: "Alarms"
  },
  Song: {
   type: String
  }

});

var User = mongoose.model("user", userSchema);

module.exports = User;
