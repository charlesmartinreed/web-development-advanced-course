var mongoose = require('mongoose');

mongoose.set('debug', true); // verbose logging, for development purposes
mongoose.connect('mongodb://localhost/todo-api');

// allows us to use JS Promise syntax instead of callback functions
mongoose.Promise = Promise;


module.exports.Todo = require('./todo');
