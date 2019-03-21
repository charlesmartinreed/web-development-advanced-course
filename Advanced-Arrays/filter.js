// filter
// a function that is invoked on arrays, that accepts a callback function
// result of the callback must always be evaluated into a boolean

// creates new array, iterates through an array, runs callback on each value in the array

// if the callback returns true, value is added to the new array. else, the value is ignored and the loop continues to the next step.

// filter is useful when we have an array where we need to remove items of a certain value. Contrast this with map, which always returns a array with the same number of values as the one that was passed into it.

// RESULT OF THE CALLBACK WILL ALWAYS BE A BOOLEAN

// examples
var arr = [1, 2, 3]
// const result = arr.filter(function(value, index, array){
	// like map and forEach, you have access to value, index AND array
	// no need for an if statement, return an expression that evaluates to true or false
	// return value > 2;
// })

// console.log(result);

var instructors = [{name: "Elie"}, {name: "Tim"}, {name: "Matt"}, {name: "Colt"}];

const result2 = instructors.filter(function(val){
	return val.name.length > 3;
})

// console.log(result2);

//try not to write if statements in the callback for filter which is unecessary because we're returning back a boolean

// an implementation of filter
function filter(array, callback) {
	var newArr = [];
	for (var i=0; i<array.length; i++) {
		if (callback(array[i], i, array)) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}

function onlyFourLetterNames(arr) {
	return arr.filter(function(value) {
		return value.length === 4;
	});
}

// console.log(onlyFourLetterNames(['Rusty', 'Matt', 'Moxie', 'Colt']));

function divisibleByThree(arr) {
	return arr.filter(function(value) {
		return value % 3 === 0;
	})
}

// console.log(divisibleByThree([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// FILTER EXERCISES

// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
function filterByValue(arr, key) {
	return arr.filter(function(value){
		return value[key];
	})
}

// const result1 = filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner');
//console.log(result1);

// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, searchValue) {
	return arr.filter(function(val){
		return val === searchValue
	})[0];
}

// const findResult = find([1,2,3,4,5], 3);
const findResult = find([1,2,3,4,5], 10);
console.log(findResult);

// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.
function findInObj(arr, key, value) {
	return arr.filter(function(obj) {
		return obj[key] === value;
	})[0]
}

const findObject = findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true);
console.log(findObject);

// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
function removeVowels(str) {
	var letterArray = str.toLowerCase().split("");
	var vowels = 'aeiou';
	return letterArray.filter(function(letter) {
		return vowels.indexOf(letter) == -1;
	}).join("")
}

const vowels = removeVowels('Elie');
// console.log(vowels);

// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers(arr) {
	return arr.filter(function(val){
		return val % 2 !== 0;
	}).map(function(val){
		return val * 2;
	})
}

const doubleOdd = doubleOddNumbers([1,2,3,4,5]); //2, 6, 10
// console.log(doubleOdd);
