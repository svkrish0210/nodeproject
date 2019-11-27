'use strict'
var loginModel= require('../models/loginModel');

exports.performLogin = async function(req, res, next) {

     // Pass to next layer of middleware
       console.log('inside performLogin');
    //next();

 
  let userJson=await loginModel.selectusers(req.body.username,req.body.password);
  
  if(userJson==undefined){
    res.status(404).send({
      message: 'Technical error'
   });
  }else if(userJson[0]==null){
        res.status(404).send(
          {
           message: 'Username or password is incorrect'
        });
    }else{
      console.log('performLogin success');
      
        res.status(200).send(
          { 
            username: userJson[0].name,
            token: 'fake-jwt-token' });
  }
  next();

  };


  exports.tripDetails = async function(req, res, next) {

    // Pass to next layer of middleware
      console.log('inside tripDetails');
   //next();


 let vehicles=await loginModel.listVehicles();
     console.log(vehicles);
        res.status(200).send(
         { 
           vehiclesList: vehicles,
           token: 'fake-jwt-token' }); 
           /* res.status(200).send(vehicles); */
 next();

 };