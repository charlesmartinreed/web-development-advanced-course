- Rest collects the remaining objects to a function and returns them to us in an array

function printArgument(a, b, ...c) {
	console.log(a)
	console.log(b)
	console.log(c)
}

- output of printArgument is 1, 2, [3, 4, 5]
- notice that a, b are numbers but c is an array of the REST of the parameters
- When is this useful? When you need to utilize array function - map, reduce, etc - on the array-like (but not actually an array) "arguments"

function sumArguments(){
	var total = 0;
	for(var i=0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

- Fancier ES5 version
function sumArguments(){
	// instead of slicing the array object, use the arguments, passed via .call
	var argumentsArray = [].slice.call(arguments);
	return argumentsArray.reduce(function(acc, next) {
		return acc + next;
		});
}

- ES6 version, using rest
- Here, we use rest and arrow functions to make a concise solution. The only thing novel about this is the fact that array is created by using the rest operator
var sumArguments = (...args) => args.reduce((acc, next) => acc + next);
