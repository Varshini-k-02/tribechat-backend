const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", false);

const conn = mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster1.s7ulkat.mongodb.net/test?retryWrites=true&w=majority`, (err)=> {
  if(err){
    console.log(err)
  }else{
    console.log('success')
  }
})
module.exports = conn;

