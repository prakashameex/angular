var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var Admin = require('../models/user');


passport.use(new LocalStrategy({
    usernameField: 'username'
  },
  function(username, password, done) {
    User.findOne({ username: username }, function (err, admin) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!admin) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      // Return if password is wrong
      if (!admin.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the user object
      return done(null, admin);
    });
  }
));