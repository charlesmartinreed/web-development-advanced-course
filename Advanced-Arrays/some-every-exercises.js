function some(arr, callback) {
	for (var i=0; i<arr.length; i++) {
		if(callback(arr[i], i, arr)) {
			return true;
		}
	}
	return false;
}

function every(arr, callback) {
	for (var i=0; i<arr.length; i++) {
		if(!callback(arr[i], i, arr)) {
			return false;
		}
	}
	return true;
}

//1. Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

function hasOddNumber(arr) {
	return arr.some(function(value) {
		return value % 2 !== 0;
	});
}
// console.log(hasOddNumber([1,2,2,2,2,2,4])); //true
// console.log(hasOddNumber([2,2,2,2,2,4])); //false

//2. Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

function hasAZero(num) {
	return num.toString().split("").some(function(value){
		return value === '0';
	});
}

// console.log(hasAZero(3332123213101232321));
// console.log(hasAZero(1212121));

//3. Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

function hasOnlyOddNumbers(arr) {
	return arr.every(function(value){
		return value % 2 !== 0;
	});
}

// console.log(hasOnlyOddNumbers([1,3,5,7])); // true
// console.log(hasOnlyOddNumbers([1,2,3,5,7])); // false

//4. Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

// my convoluted version
// function hasNoDuplicates(arr) {
// 	return arr.every(function(val, idx) {
// 		while (idx <= arr.length - 1) {
// 			console.log(arr[0], arr[idx + 1]);
// 			return arr[0] !== arr[idx + 1];
// 		}
// 	});
// }

//better, more sensible version of hasNoDuplicates
function hasNoDuplicates(arr){
	return arr.every(function(val){
		return arr.indexOf(val) === arr.lastIndexOf(val);
	})
}

// console.log(hasNoDuplicates([1,2,3,1])); // false
console.log(hasNoDuplicates([1,2,3])); // true

//5. Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
function hasCertainKey(arr, key) {
	return arr.every(function(obj){
		return obj[key];
	});
}

var objArr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
// console.log(hasCertainKey(objArr,'first')); //true
// console.log(hasCertainKey(objArr,'isCatOwner')); //false

//6. Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

function hasCertainValue(arr, key, value) {
	return arr.every(function(obj) {
		return obj[key] === value;
	});
}

// console.log( hasCertainValue(objArr, 'title','Instructor')); //true
// console.log(hasCertainValue(objArr, 'first','Elie')); //false
