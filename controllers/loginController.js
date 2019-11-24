'use strict'
var loginModel= require('../models/loginModel');

exports.performLogin = async function(req, res, next) {

     // Pass to next layer of middleware
       console.log('request received');
    //next();
    
 
  let userJson=await loginModel.selectusers(req.body.username,req.body.password);
    if(userJson==null||userJson==undefined){
        res.status(404).send({
           message: 'Username or password is incorrect'
        });
    }else{
      let vehicles=await loginModel.listVehicles();

        res.status(200).send({ 
            username: userJson.NAME,
            vehiclesList: vehicles,
            token: 'fake-jwt-token' });
    }

  };