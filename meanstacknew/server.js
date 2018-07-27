var express = require('./node_modules/express');
var path = require('path');
var bodyParser = require('./node_modules/body-parser');

// var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 4201;

var app = express();
app.use(function(req,res,next){
res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','authorization');
    next();
});
//View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log(port)
    console.log('Servers started on port '+port);
});