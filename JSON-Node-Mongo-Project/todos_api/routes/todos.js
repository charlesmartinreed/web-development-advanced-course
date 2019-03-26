// This file holds all of our todo API routes

var express = require('express'),
		router = express.Router(),
		db = require('../models'),
		helpers = require('../helpers/todos');

// when passed to index.js, all of our routes are prefixed by /api/todos

router.route('/')
	.get(helpers.getTodos)
	.post(helpers.createTodo)

// : defines something as a PATH VARIABLE
router.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.removeTodo)

// we have to actually export our router since that's what's handling our routing
module.exports = router;
