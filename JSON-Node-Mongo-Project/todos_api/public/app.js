// WHEN THE DOM HAS LOADED
$(document).ready(function() {
	// request our todos from our apis - /api/todos
	$.getJSON("/api/todos")
		.then(addTodos)
});

function addTodos(todos) {
	todos.forEach(todo => {
		// make a new li with the todo
		var newTodo = $('<li class="task">'+todo.name + '</li>');

		// append to the list
		$('.list').append(newTodo);
	})
}
