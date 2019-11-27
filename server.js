var express = require('express'),
  cors = require('cors'),
  app = express(),
  port = process.env.PORT || 4000,
  server=app.listen(port),
  bodyParser = require('body-parser'),
  loginModel= require('./models/loginModel');

 // app.use(cors());
  
  app.options('*', cors())

	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", req.headers.origin); // update to match the domain you will make the request from
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var routes = require('./routes/loginroutes'); //importing route
  routes(app);

console.log('Login RESTful API server started on: ' + port);