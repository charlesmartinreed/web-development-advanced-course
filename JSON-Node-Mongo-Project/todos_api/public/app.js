// WHEN THE DOM HAS LOADED
$(document).ready(function() {
	// request our todos from our apis - /api/todos
	$.getJSON("/api/todos")
		.then(addTodos)


	// event listener
	$('#todoInput').keypress(function(event) {
		// which and keyCode handle the same property, but which is compatible with older browsers that don't support keyCode
		if(event.which === 13) {
			createTodo()
		}
	});
});

function createTodo() {
	// here, we send a request to our API to create a new todo
	// our date consists of a key/value pair where the key is "name" and the value is the input extracted from our form
	var userInput = $('#todoInput').val();
	$.post('/api/todos', { name : userInput })
	.then((newTodo) => {
		//when successfully, we get the new todo back. Add it to the DOM and clear the input field.
		$('#todoInput').val('');
		addTodo(newTodo);
	})
	.catch((err) => {
		console.log(err);
	})
}

function addTodos(todos) {
	todos.forEach(todo => {
		addTodo(todo);
	})
}

function addTodo(todo) {
	// make a new li with the todo
	var newTodo = $('<li class="task">'+todo.name + '</li>');

	if(todo.completed) {
		newTodo.addClass("done");
	}

	// append to the list
	$('.list').append(newTodo);
}
