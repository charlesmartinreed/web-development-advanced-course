# What is a callback function?
- A function passed into another function as a parameter, and then invoked by that function.

function callback() {
	console.log("Coming from callback.");
}

# What is a higher order function?
- These are the functions that invoke callbacks. They accept callbacks as parameters.

function higherOrder(fn) {
	console.log("About to call callback");
	fn();
	console.log("Callback has been invoked");
}

higherOrder(callback);

The resulting console output is:
"About to call callback"
"Coming from callback."
"Callback has been invoked"

# How can callback functions help generalize our code?

- Advanced array methods, browser events (click, submit, etc.), AJAX Requests and React Development all heavily utilize callbacks.

- consider the following, very wet code:
function sendMessageConsole(message) {
	console.log(message);
}

function sendMessageAlert(message) {
	alert(message);
}

function sendMessageConfirm(message) {
	return confirm(message);
}

sendMessageAlert("Lots of duplication")

- now, let's apply callback methodology which uses higher order functions like alert and confirm

function sendMessage(message, callback) {
	return callback(message);
}

sendMessage("Message for console", console.log);
sendMessage("Message for alert", alert);
var answer = sendMessage("Are you sure?", confirm);


# How can we use callbacks via anonymous functions?

- Another example, using a declared function
function greet(name, formatter) {
	return "Hello, " + formatter(name)";
}

function upperCaseName(name) {
	return name.toUpperCase();
}

greet("Tim", upperCaseName);

- Same example, using an anonymous function instead
function greet(name, formatter) {
	return `Hello, ${formatter(name)}`;
}

greet("Tim", function(name) {
	return name.toUpperCase();
});

greet("Tim", name => name + "!!!!!");
