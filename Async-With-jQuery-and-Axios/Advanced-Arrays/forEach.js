// Iterates through an array
// runs a callback function on each value in an array
// IMPORTANT: ALWAYS RETURNS 'UNDEFINED'

//inside the callback, you can get access to the each value, each index and the array itself

// [1, 2, 3].forEach(function(value, index, array){
// 	since there are three items in our array, the callback will be executed 3 times
// while not every attribute of the callback is necessary, we can use what we want and ignore the rest, the ORDER is important
// });

// var arr = [1, 2, 3];

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

// console.log(halfValues([2, 4, 6]));

function squareValues(arr) {
	var newArray = [];
	arr.forEach(function(val) {
		newArray.push(val * val)
	});
	return newArray
}
// console.log(squareValues([2, 4, 6]));

// EXERCISES BEGIN HERE
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValues(arr) {
	var newArray = [];

	arr.forEach(function(val) {
		newArray.push(val * 2);
	});

	return newArray;
}

// console.log(doubleValues([1,2,3]));
//console.log(doubleValues([5,1,2,3,10]))

// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
function onlyEvenValues(arr) {
	var newArray = [];

	arr.forEach(function(val) {
		if (val % 2 === 0) {
			newArray.push(val);
		}
	});

	return newArray;
}
// console.log(onlyEvenValues([2, 9, 12, 26, 11, 3, 1]));


// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
function showFirstAndLast(arr){
	var newArray = [];

	arr.forEach(function(name){
		var firstAndLast = name.slice(0,1) + name.slice(-1);
		newArray.push(firstAndLast);
	});

	return newArray;
}

// console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
// console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
function addKeyAndValue(arr, key, value) {
	arr.forEach(function(obj){
		obj[key] = value;
	})
	return arr;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
	var splitArr = str.toLowerCase().split("");
	var obj = {};
	var vowels = 'aeiou';

	splitArr.forEach(function(letter){
		if(vowels.indexOf(letter) !== -1) {
			if(obj[letter]) {
				obj[letter]++;
			} else {
				obj[letter] = 1;
			}
		}
	});
	return obj;
}

console.log(vowelCount('ChArles Is a nOvIce'));
