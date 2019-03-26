var db = require('../models');

exports.getTodos = (req, res) => {
	// SEND ALL THE TODOS FROM THE DB
	db.Todo.find()
		.then(function(todos){
			res.json(todos);
		})
		.catch(function(err){
			res.send(err);
		})
}

exports.createTodo = (req, res) => {
	db.Todo.create(req.body)
		.then((newTodo) => {
			//status '201' sis the HTTP status code means the request has succeeded and a resource has been created. Commonly used as the result of a POST request.
			res.status(201).json(newTodo);
	})
		.catch(err => {
			res.send(err);
	})
}

exports.getTodo = (req, res) => {
	// look up the todo
	db.Todo.findById(req.params.todoId)
		.then((foundTodo) => {
			res.json(foundTodo)
		})
		.catch((err) => {
			res.send(err);
		})
}

exports.updateTodo = (req, res) => {
	// first param is what to search by, second param is how to update it, third param gives us a response with the updated data
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
		.then((todo) => {
			res.json(todo);
		})
		.catch((err) => {
			res.send(err);
		})
}

exports.removeTodo = (req, res) => {
	//takes an object to remove by, key and value
	db.Todo.deleteOne({_id: req.params.todoId})
	.then(() => {
		res.json({message: 'We deleted it!'})
	})
	.catch((err) => {
		res.send(err);
	})
}

module.exports = exports;
