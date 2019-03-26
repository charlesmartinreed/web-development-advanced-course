// Each todo should have a name, if it is completed and the date it was created
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: 'Name cannot be blank!'
	},
	completed: {
		type: Boolean,
		default: false
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

// compile schema into a model
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
