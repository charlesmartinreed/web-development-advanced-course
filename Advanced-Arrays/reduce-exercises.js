//1. Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

function extractValue(arr, key) {
	return arr.reduce(function(accumulator, nextValue){
		accumulator.push(nextValue[key]);
		return accumulator;
	}, []);
}

// var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// console.log(extractValue(arr, 'name'));// ['Elie', 'Tim', 'Matt', 'Colt']


//2. Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
	let vowels = 'aeiou';
	return str.toLowerCase().split("").filter(function(value){
		return vowels.indexOf(value) !== -1;
	}).reduce(function(accumulator, nextValue){
		if(nextValue in accumulator) {
			accumulator[nextValue]++;
		} else {
			accumulator[nextValue] = 1;
		}
		return accumulator;
	}, {});
}

// console.log(vowelCount('Elie'));
// console.log( vowelCount('Tim'));
// console.log(vowelCount('I Am awesome and so are you'));

//3. Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

function addKeyAndValue(arr, key, value) {
	return arr.reduce(function(accumulator, nextValue, index){
		accumulator[index][key] = value;
		return accumulator
	}, arr)
}

var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(addKeyAndValue(arr, 'title', 'Instructor'));

//4. Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

function isEven(val) {
	return val % 2 === 0;
}

function partition(arr, callback) {
	return arr.reduce(function(accumulator, nextValue){
		if (callback(nextValue)) {
			accumulator[0].push(nextValue);
		} else {
			accumulator[1].push(nextValue);
		}
		return accumulator;
	}, [[],[]]);
}

var numbers = [1,2,3,4,5,6,7,8];
console.log(partition(numbers, isEven)); // [[2,4,6,8], [1,3,5,7]];
