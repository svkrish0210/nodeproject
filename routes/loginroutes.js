'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/loginController');

  // todoList Routes
  app.route('/login')
    .post(todoList.performLogin);
};