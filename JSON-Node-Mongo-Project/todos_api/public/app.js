// WHEN THE DOM HAS LOADED
$(document).ready(function() {
	// request our todos from our apis - /api/todos
	$.getJSON("/api/todos")
		.then(addTodos)


	// event listeners
	$('#todoInput').keypress(function(event) {
		// which and keyCode handle the same property, but which is compatible with older browsers that don't support keyCode
		if(event.which === 13) {
			createTodo()
		}
	});

	// because the spans are not necssarily on the page at load, we need to use event delegation and target a parent DOM element that IS on the page at load
	$('.list').on('click', 'span', function(){
		removeTodo($(this).parent());
	})
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
	var newTodo = $('<li class="task">'+todo.name + '<span>X</span></li>');

	// jQuery holds the data we specify in memory; we can retrieve this later when making our delete request
	newTodo.data('id', todo._id);

	if(todo.completed) {
		newTodo.addClass("done");
	}

	// append to the list
	$('.list').append(newTodo);
}

function removeTodo(todo) {
	var clickedId = todo.data('id');
	var deleteURL = '/api/todos/' + clickedId;

	//first, send a delete request, using the task ID, which is stored via jQuery's data method
	$.ajax({
		method: 'DELETE',
		url: deleteURL
	})
	.then(function(data){
		//then, we can remove the span's parent element, the li, from the DOM
		todo.remove();
	})
	.catch(function(err)) {
		console.log(err);
	}
}
