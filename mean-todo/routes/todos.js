var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var keys = require('../keys.json');

console.log(`mongodb://${keys.user}:${keys.pass}@ds057386.mlab.com:57386/mean-todos`);
var db = mongojs(`mongodb://${keys.user}:${keys.pass}@ds057386.mlab.com:57386/mean-todos`,['todos']);

// Get Toddos
router.get('/todos', function(req,res,next){
	db.todos.find(function(err, todos){
		if(err){
			res.send(err);
		} else {
			res.json(todos);
		}
	})
});

// Get Single Todo
router.get('/todo/:id', function(req,res,next){
	db.todos.findOne({
		_id: mongojs.ObjectId(req.params.id)
	},function(err, todo){
		if(err){
			res.send(err);
		} else {
			res.json(todo);
		}
	})
});

// Save Todo
router.post('/todo', function(req,res,next){
	var todo = req.body;
	if( !todo.text || !(todo.isCompleted + '')){
		res.status(400);
		res.json({
			"error": "Invalid Data"
		});
	} else {
		db.save(todo, function(err,result){
			if(err){
				res.send(err);
			} else {
				res.json(result);
			}
		});
	}
});

// Update Todo
router.put('/todo/:id', function(req,res,next){
	var todo = req.body;
	if( !todo.text || !(todo.isCompleted + '')){
		res.status(400);
		res.json({
			"error": "Invalid Data"
		});
	} else {
		db.save(todo, function(err,result){
			if(err){
				res.send(err);
			} else {
				res.json(result);
			}
		});
	}
});

module.exports = router;