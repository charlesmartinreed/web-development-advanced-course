// What are the disadvantages of using nested callbacks?
// var counter = 0;

setTimeout(function() {
	// counter++;
	// console.log("Counter:", counter);
	setTimeout(function() {
		// counter++;
		// console.log("Counter:", counter);
		setTimeout(function() {
			// counter++;
			// console.log("Counter:", counter);
		}, 3000);
	}, 2000);
}, 1000);

// prints counter: 1, counter: 2, counter: 3 in the console
// this code gets harder to read as it grows. And, concomittantly, it gets harder to reason.
// Another issue is that this code isn't very modular...

// How do you return a promise from a .then callback function?

// chaining means that .then that return a promise can be gracefully handled by other .then promises. They'll wait for the previous promise in the chain before handling attempting to handle anything.

var promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		randomInt = Math.floor(Math.random() * 10);
		resolve(randomInt);
	}, 500);
});

promise.then(function(data) {
	// console.log("Random int passed to resolve:", data);
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(Math.floor(Math.random() * 10));
		}, 3000);
	});
}).then(function(data) {
	// console.log("Second random int passed to resolve:", data);
});

// PROMISE CALLBACKS can also RETURN DATA - the values returned in the previous .then will be passed into the next .then as parameters

var promise2 = new Promise(function(resolve, reject) {
	resolve(5);
});
promise2.then(function(data) {
	return data * 2; //10
}).then(function(data) {
	return data + 20; //30
}).then(function(data) {
	console.log(data); //30
});

// How do you use promises to make asynchronous code seem sequential?
// let's try refactoring the earlier setTimeout code.

// 1: Create a function declaration
var counter = 0;
function incCounter() {
	counter++;
	console.log("Counter:", counter);
}

// 2: Create a runLater function
function runLater(callback, timeInMs) {
	var p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			var res = callback();
			resolve(res);
		}, timeInMs);
	});
	// return a promise for .then or .catch
	return p;
}

// 3: Chain our promises
runLater(incCounter, 1000).then(function() {
	return runLater(incCounter, 2000);
}).then(function() {
	return runLater(incCounter, 3000);
}).then(function() {
	// code is done.
})
