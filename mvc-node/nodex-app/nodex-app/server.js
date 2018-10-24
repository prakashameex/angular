// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var Admin=require('../models/user');
var config=require('../config/passport');



var cors = require('cors')
// Get our API routes
const api = require('./server/routes/api');

const app = express();




mongoose.connect('mongodb://localhost:27017/UserData', { useNewUrlParser: true });
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/test1";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test1");
//   dbo.createCollection("table", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// mongoose.connect("mongodb://localhost:27017/userdb", { useNewUrlParser: true });


// app.use(cors());

// // Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  if (req.method === 'OPTIONS') {
    console.log('*****************************');
    res.send(200);
  } else {
    next();
  }
});




app.use(passport.initialize());
// Set our api routes
app.use('/api', api);

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});



//Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/userdb';
// mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
//Get the default connection
// var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// app.use('/catalog', catalogRouter); 

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
