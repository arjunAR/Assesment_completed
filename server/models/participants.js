var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var participants=new Schema({
  batch:String,
  name:String,
  email:String,
  phone:String,
  git:String,
  code:String,
  dept:String,
  designation:String,
  skill:String,
  exp:String
});

module.exports=mongoose.model('Participants',participants);
