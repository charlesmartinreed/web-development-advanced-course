// This file holds all of our todo API routes

var express = require('express'),
		router = express.Router(),
		db = require('../models');

// when passed to index.js, all of our routes are prefixed by /api/todos

router.get('/', (req, res) => {
	// SEND ALL THE TODOS FROM THE DB
	db.Todo.find()
		.then(function(todos){
			res.json(todos);
		})
		.catch(function(err){
			res.send(err);
		})
});

router.post('/', (req, res) => {
	db.Todo.create(req.body)
		.then((newTodo) => {
			//status '201' sis the HTTP status code means the request has succeeded and a resource has been created. Commonly used as the result of a POST request.
			res.status(201).json(newTodo);
	})
		.catch(err => {
			res.send(err);
	})
});

// : defines something as a PATH VARIABLE
router.get('/:todoId', (req, res) => {
	// look up the todo
	db.Todo.findById(req.params.todoId)
		.then((foundTodo) => {
			res.json(foundTodo)
		})
		.catch((err) => {
			res.send(err);
		})
});

router.put('/:todoId', (req, res) => {
	// first param is what to search by, second param is how to update it, third param gives us a response with the updated data
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
		.then((todo) => {
			res.json(todo);
		})
		.catch((err) => {
			res.send(err);
		})
});



// we have to actually export our router since that's what's handling our routing
module.exports = router;
