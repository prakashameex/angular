const express = require('express');
const router = express.Router();
var controller = require('../controllers/controller');


var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var Admin=require('../models/user');
var config=require('../config/passport');

var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

router.get('/profile', auth, ctrlProfile.profileRead);


router.post('/admin', (req, res) => {
    console.log('/Admin Creation router calls add controller');
    var admindata = {
        username: req.body.uname,
        password: req.body.pass,
       
    }
    console.log(admindata);
    controller.addAdmin(admindata, function (err, result) {
        console.log('admin router cll back')
                   if (err) {
                     return res.status(500).send({reason: err.toString()});
               } else if(result && result.reason) {
                    return res.status(400).send(result);
                  }
                   return res.status(200).send(result);
    });
});








router.get('/', (req, res) => {
    console.log('/home router calls user data controller');

   
    controller.getData(function (err, result) {
               if (err) {
                 return res.status(500).send({reason: err.toString()});
           } else if(result && result.reason) {
                return res.status(400).send(result);
              }
               return res.status(200).send(result);  
        
    });
});
router.post('/', (req, res) => {
    console.log('/add router calls add controller');
    var userdata = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
    }
    console.log(userdata);
    controller.addData(userdata, function (err, result) {
                   if (err) {
                     return res.status(500).send({reason: err.toString()});
               } else if(result && result.reason) {
                    return res.status(400).send(result);
                  }
                   return res.status(200).send(result);
    });
});
router.get('/edit/:_id', (req, res) => {
    var empid = req.params._id;
    console.log('/edit router calls edit controller');
    console.log(empid);
    controller.getDatabyId(empid, function (err, result) {
                   if (err) {
                     return res.status(500).send({reason: err.toString()});
               } else if(result && result.reason) {
                    return res.status(400).send(result);
                  }
                   return res.status(200).send(result);
  });
});
router.post('/', (req, res) => {
    console.log('/add router calls add controller');
    var userdata = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
    }
    console.log(userdata);
    controller.addData(userdata, function (err, result) {
                   if (err) {
                     return res.status(500).send({reason: err.toString()});
               } else if(result && result.reason) {
                return res.status(400).send(result);
               }
           return res.status(200).send(result);
  });
});
router.delete('/:_id', (req, res) => {
    //empid =this.route.snapshot.paramMap.get('_id');
    var empid = req.params._id;
    console.log('delete router calls delete controller');
    console.log(empid);
    controller.deletebyId(empid, function (err, result) {
                   if (err) {
                     return res.status(500).send({reason: err.toString()});
               } else if(result && result.reason) {
                    return res.status(400).send(result);
                  }
                   return res.status(200).send(result);
   });
});


router.put('/:_id', (req, res) => {
    var empid = req.params._id;
    console.log('/edit router calls edit controller');
    console.log(empid);

    var updatedata = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
    }
    console.log(updatedata);

    controller.updatebyId(empid, updatedata, function (err, result) {
                   if (err) {
                     return res.status(500).send({reason: err.toString()});
               } else if(result && result.reason) {
                    return res.status(400).send(result);
                  }
                   return res.status(200).send(result);
    });
});

module.exports = router;



