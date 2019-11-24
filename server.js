var express = require('express'),
  cors = require('cors'),
  app = express(),
  port = process.env.PORT || 4000,
  bodyParser = require('body-parser');

  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var routes = require('./routes/loginroutes'); //importing route
  routes(app);

app.listen(port);

console.log('Login RESTful API server started on: ' + port);