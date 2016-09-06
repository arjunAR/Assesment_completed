var express = require('express');
var router = express.Router();
var Participants=require('../models/participants');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/manageSave',function(req,res){
  //console.log("in MANAGE post block");

  console.log("body ISSSS",req.body);

  var saveData=new Participants(req.body);
  saveData.save(function(err,success){
    if(err){
      console.log("Some problem while saving");
    }else{
      console.log("Saved Successfully Dude!!");
      //console.log("POST",saveData);
      res.json(req.body);
    }

  });


});

router.get('/getData', function(req, res) {
  Participants.find({},function(err,success){
    if(err){
      console.log("Some problem while Finding");
    }else{
      console.log("CONSOLE REQQQ GETTTT");
      //console.log(success);
      res.json(success);
    }
  });
  //console.log("REQQQ GETTTT",Emails);

});

router.get('/getData', function(req, res) {
  Participants.find({},function(err,success){
    if(err){
      console.log("Some problem while Finding");
    }else{
      console.log("CONSOLE REQQQ GETTTT");
      //console.log(success);
      res.json(success);
    }
  });
  //console.log("REQQQ GETTTT",Emails);

});

router.get('/:empID',function(req,res){
  var empID=req.params.empID;
  Participants.findOne({code:empID},function(err,success){
    if(err){
      console.log("Some problem while Finding");
    }else{
      console.log("CONSOLE OF INDIVIDUAL REQQQ GETTTT");
      //console.log(success);
      res.json(success);
    }
  });



});



module.exports = router;
