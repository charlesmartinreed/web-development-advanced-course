// This file holds all of our todo API routes

var express = require('express'),
		router = express.Router(),
		db = require('../models');

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



// we have to actually export our router since that's what's handling our routing
module.exports = router;
