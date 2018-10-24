const express = require('express');
const router = express.Router();
var cont = require('../controllers/controller');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');
var Admin = require('../models/user');

var passport = require('passport');
var mongoose = require('mongoose');


module.exports.register = function(req, res) {
    var user = new User();
  
    user.name = req.body.name;
    user.email = req.body.email;
  
    user.setPassword(req.body.password);
  
    user.save(function(err) {
      var token;
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    });
  };

  module.exports.login = function(req, res) {

    passport.authenticate('local', function(err, user, info){
      var token;
  
      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err);
        return;
      }
  
      // If a user is found
      if(user){
        token = user.generateJwt();
        res.status(200);
        res.json({
          "token" : token
        });
      } else {
        // If user is not found
        res.status(401).json(info);
      }
    })(req, res);
  
  };


  module.exports.profileRead = function(req, res) {

    // If no user ID exists in the JWT return a 401
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private profile"
      });
    } else {
      // Otherwise continue
      User
        .findById(req.payload._id)
        .exec(function(err, user) {
          res.status(200).json(user);
        });
    }
  
  };


exports.adminService = function (admindata, res) {
    console.log('Admin service working' + admindata);
    var newAdmin = new Admin(admindata);
    newAdmin.save(function (err) {
        console.log(newAdmin + 'admin schema');
        if (err) {
            console.log(err);
            return res(err);
        }
        console.log('admin created')
        return res(null);
    });
};







exports.getService = function (res) {
    console.log('get service working');
    User.find({}, function (err, users) {
        console.log(users);
        if (err) {
            return res(err);
        }
        return res(null, users);
    });
};

exports.getServicebyId = function (empid, res) {
    console.log('get service working' + empid);
    User.findById(empid, function (err, users) {
        console.log(users);
        if (err) {
            return res(err);
        }
        return res(null, users);
    });

};

exports.delServicebyId = function (empid, res) {
    console.log('delete service working' + empid);
    User.findByIdAndRemove(empid, function (err) {
       
        console.log(empid + 'user deleted');
        if (err) {
            return res(err);
        }
        return res(null);  
    });
};
exports.updateServicebyId = function (empid, updatedata, res) {
    console.log('update service working' + empid);
    var updateUser = new User(updatedata);
    User.findByIdAndUpdate(empid, updatedata, { new: true }, function (err, result) {
        console.log(updateUser + ' user data updated');
        if (err) {
            return res(err);
        }
        console.log('updated one ' + result)
        return res(null, result);
    });
};

exports.addService = function (userdata, res) {
    console.log('add service working' + userdata);
    var newUser = new User(userdata);
    newUser.save(function (err) {
        console.log(newUser + 'user schema');
        if (err) {
            console.log(err);
            return res(err);
        }
        console.log('user created')
        return res(null);
    });
};