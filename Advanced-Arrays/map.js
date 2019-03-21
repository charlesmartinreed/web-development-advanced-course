// map
// 1. creates a new array
// 2. iterates through that array
// 3. runs a callback function for each value in the array
// 4. adds the result of that callback function to the new array
// 5. returns the new array

// map always returns a new array of the same length as the passed in array

var arr = [1, 2, 3];

const result = arr.map(function(value, index, array) {
	return value * 2;
	// without the return statement, we get an array where each item is 'undefined'
});

// console.log(result); //2, 4, 6

// implementation of map
function map(arr, callback) {
	var newArray = [];
	for (var i=0; i<arr.length; i++) {
		newArray.push(callback(arr[i]), i, arr);
	}
	return newArray;
}

const newResult = arr.map(function(val) {
	return val * val;
});
// console.log(newResult);

//Using map in a function
function tripleValues(arr) {
	return arr.map(function(value){
		return value * 3;
	});
}

// console.log(tripleValues([3, 5, 6]));

// forEach is best used for overwriting values, but when you need a return, use map

function onlyFirstName(arr) {
	return arr.map(function(val){
		return val.first;
	});
}

// console.log(onlyFirstName([{first: 'Tim', last: 'Garcia'}, {first: 'Matt', last: 'Lane'}]));

// MAP CHALLENGE EXERCISES
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValues(arr) {
	return arr.map(function(val){
		return val * 2;
	});
}

// console.log(doubleValues([1, 2, 3]));
// console.log(doubleValues([1, -2, -3]));

// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
function valTimesIndex(arr) {
	return arr.map(function(val, index){
		return val * index;
	})
}

// console.log(valTimesIndex([1, 2, 3]));
// console.log(valTimesIndex([1, -2, -3]));

// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
function extractKey(arr, key) {
	return arr.map(function(val){
		return val[key];
	})
}
const extract = extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')
// console.log(extract);  // ['Elie', 'Tim', 'Matt', 'Colt']


// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.
function extractFullName(arr) {
	return arr.map(function(val){
		return val.first + " " + val.last;
	});
}

const extractFull = extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]);

// console.log(extractFull);
