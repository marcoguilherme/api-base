const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

module.exports.registerUser = function(app, req, res) {
  var userData = req.body;
  const UserModel = new app.src.models.UserModel;
  UserModel.registerUser(req, res, userData);
}
