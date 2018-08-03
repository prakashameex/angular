var express = require('../node_modules/express');
var router = express.Router();
var mongojs = require('../node_modules/mongojs');
var db = mongojs('localhost:27017/login', ['student']);

// Get All Tasks
router.get('/tasks', function(req, res, next){
    
    db.student.find(function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
       
    });
});

// Get Single Task
router.get('/task/:id', function(req, res, next){
    db.student.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Save Task
router.post('/tasks', function(req, res, next){
console.log('post')
    var task = req.body;
    if(!(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.student.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

// Delete Task
router.delete('/task/:id', function(req, res, next){
        console.log('delet')
    db.student.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);      
    });
});

// Update Task
router.put('/task/:id', function(req, res, next){
    console.log('update')
    var task = req.body;
    console.log(task)
    var updTask = {};  
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.student.update({_id: mongojs.ObjectId(req.params.id)},task, {}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    }
});

module.exports = router;