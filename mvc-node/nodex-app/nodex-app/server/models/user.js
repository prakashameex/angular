const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');



var userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
});

var User = mongoose.model('User', userSchema);

var adminSchema = new Schema({
    username :{type:String, unique: true,required: true},
    password :{type:String,required: true},
})



var Admin = mongoose.model('Admin', adminSchema);
module.exports = User;
module.exports=Admin;




