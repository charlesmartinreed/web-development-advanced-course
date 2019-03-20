// Iterates through an array
// runs a callback function on each value in an array
// IMPORTANT: ALWAYS RETURNS 'UNDEFINED'

//inside the callback, you can get access to the each value, each index and the array itself

// [1, 2, 3].forEach(function(value, index, array){
// 	since there are three items in our array, the callback will be executed 3 times
// while not every attribute of the callback is necessary, we can use what we want and ignore the rest, the ORDER is important
// });

var arr = [1, 2, 3];

// arr.forEach(function(value, index, array) {
// 	console.log(value, index, array);
// })

//what does an implementation of forEach look like?

function forEach(array, callback) {
	for (var i=0; i<array.length; i++) {
		callback(array[i], i, array);
	}
	// this is actually implicit, don't need this line. Functions without a return keyword will always return 'undefined'
	return undefined;
}

// Utilizing our implementation

function halfValues(arr) {
	var newArray = [];
	arr.forEach(function(val) {
		newArray.push(val / 2);
	})
	return newArray;
}

console.log(halfValues([2, 4, 6]));

function squareValues(arr) {
	var newArray = [];
	arr.forEach(function(val) {
		newArray.push(val * val)
	});
	return newArray
}
console.log(squareValues([2, 4, 6]));
