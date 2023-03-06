const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  name: String,
  contri : String,
  link: String,
  rating: Number,
  startTime: Date,
  endTime:Date,
  room:String,

})

const Res = mongoose.model('Resource', ResourceSchema);

module.exports = Res
