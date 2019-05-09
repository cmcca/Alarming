var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var alarmSchema = new Schema({

  alarmName: {
    type: String,
    required: true
  },
  alarmTime: {
    type: Number,
  }

});

var Alarms = mongoose.model("Alarms", alarmSchema);


module.exports = Alarms;
