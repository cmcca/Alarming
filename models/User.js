var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var userSchema = new Schema({

  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }

});

var User = mongoose.model("user", userSchema);

module.exports = User;
