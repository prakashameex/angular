
const express = require('express');
const router = express.Router();
var service = require('../services/service');

var passport = require('passport');
var mongoose = require('mongoose');
var Admin=require('../models/user');


exports.addAdmin = function (admindata, res) {
    console.log('addadmin controller working' + admindata);
    service.adminService(admindata, function (err, result) {
        console.log('callback working in adddata controller');
        console.log(result);
        return res(null, result);
    });
};


exports.getData = function (res) {
  console.log('getData controller working');
   service.getService(function (err, result) {
        console.log('callback working in controller');
        console.log(result);
        return res(null, result);
    });

};
exports.getDatabyId = function (empid, res) {
    console.log('getDatabyId controller working' + empid);
    service.getServicebyId(empid, function (err, result) {
        console.log('callback working in getdatabyid controller');
        console.log(result);
        return res(null, result);
    });

};
exports.deletebyId = function (empid, res) {
    console.log('deletebyId controller working' + empid);
    service.delServicebyId(empid, function (err, result) {
        console.log('callback working in deletebyId controller');
        console.log(result);
        return res(null, result);
    });
};


exports.updatebyId = function (empid, updatedata, res) {
    console.log('update data controller working' + empid);
  
    service.updateServicebyId(empid, updatedata, function (err, result) {
        console.log('callback working in getdatabyid controller');
        console.log(result);
        return res(null, result);
    });
};

exports.addData = function (userdata, res) {
    console.log('addDatabyId controller working' + userdata);
    service.addService(userdata, function (err, result) {
        console.log('callback working in adddata controller');
        console.log(result);
        return res(null, result);
    });
};













