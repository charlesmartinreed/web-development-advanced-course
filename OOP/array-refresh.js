// FOR EACH
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
	var splitArr = str.toLowerCase().split("");
	var vowels = 'aeiou';
	var obj = {};

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

// MAP
// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
function extractKey(arr, key) {
	return arr.map(function(val){
		return val[key];
	})
}

// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.

function extractFullName(arr) {
	return arr.map(function(val){
		return val.first + " " + val.last;
	});
}

// FILTER
// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
function find(arr, searchValue) {
	return arr.filter(function(value){
		return value === searchValue;
	})[0];
}

// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

function doubleOddNumbers(arr) {
	return arr.filter(function(val){
		return val % 2 !== 0;
	}).map(function(val){
		return val * 2;
	})
}

// SOME and EVERY
// Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

function hasAZero(num) {
	return num.toString().split("").some(function(val) {
		val === '0';
	})
}

// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
function hasNoDuplicates(arr) {
	return arr.every(function(val, idx) {
		while (idx < arr.length - 1) {
			return arr[0] !== arr[idx + 1];
		}
	});
}

// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
function hasCertainKey(arr, key) {
	return arr.every(function(obj) {
		return obj[key];
	})
}

// REDUCE

// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

function extractValue(arr, key) {
	return arr.reduce(function(acc, next){
		acc.push(next[key]);
		return acc;
	}, []);
}

// Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
function addKeyAndValue(arr, key, value) {
	return arr.reduce(function(acc, next, idx){
		acc[idx][key] = value;
	}, arr);
}

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(str) {
	var vowels = 'aeiou';
	return str.toLowerCase().split("").reduce(function(acc, next){
		if(vowels.indexOf(next) !== -1) {
			if(acc[next]) {
				acc[next]++;
			} else {
				acc[next] = 1;
			}
		}
		return acc;
	}, {});
}

// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.
function partition(arr, callback) {
	return arr.reduce(function(acc, next){
		if(callback(next)) {
			acc[0].push(next);
		} else {
			acc[1].push(next);
		}
		return acc;
	}, [[],[]])
}

// CLOSURES
// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
function specialMultiply(a, b) {
	if(arguments.length === 1) {
		return function(b) {
			// b comes from this closure call
			return a * b;
		};
	}
	// b comes from the initial function call
	return a * b;
}

// Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

function guessingGame(amount) {
	var answer = Math.floor(Math.random() * 11);
	var guesses = 0;
	var gameOver = false;

	return function(guess) {
		if(!gameOver) {
			if (guess === answer) {
				gameOver = true;
				return "You got it!"
			} else if (guesses === amount) {
				gameOver = true;
				return "No more guesses, you lose! The answer was " + answer;
			} else if (guess < answer) {
				guesses++;
				return "Your guess is too low!";
			} else if (guess > answer) {
				guesses++;
				return "Your guess is too high!"
			}
		}
		return "You are all done playing!"
	}
}
