// A promise is an object that represents a task that will be completed in the future.

// Creating a promise
var p1 = new Promise(function(resolve, reject) {
	// if async completed successfully, resolve
	// resolve([1, 2, 3, 4]);
	//if async failed, reject

	reject("ERROR");
});

p1.then(function(data) {
	//per above, [1, 2, 3, 4] is passed here
	// console.log("Promise p1 resolved with data:", arr);
	// Handling errors
	//when reject is called from our promise, .then is not called, .catch is called instead
}).catch(function(data) {
	// console.log("Promise p1 was rejected with data:", data);
})

// randomly occuring errors
var p2 = new Promise(function(resolve, reject) {
	var num = Math.random();
	if (num < 0.5) {
		resolve(num);
	} else {
		reject(num);
	}
})

p2.then(function(result) {
	// console.log("Success:", result);
}).catch(function(error) {
	// console.log("Error:", error);
})

// Wrapping setTimeout with Promise
// promise is created before set timeout finishes and resolves
// promiseStatus of "pending"
var promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		var randomInt = Math.floor(Math.random () * 10);
		resolve(randomInt);
	}, 4000);
});

promise.then(function(data) {
	console.log("Random int passed to resolve:", data);
});
