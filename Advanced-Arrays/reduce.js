// take an array and turn it into another data structure (string, numb, etc)
// accepts callback function and optional second parameter
// iterates through array, running callback on each value

// first parameter to the callback is either first value in array or the optional second parameter
// first parameter is called the "accumulator"

// returned value from the callback becomes the new value of accumulator

// [1,2,3].reduce(function(accumulator, nextValue, index, array){
// }, optional second parameter)

// numbers example
var arr = [1, 2, 3, 4, 5];
arr.reduce(function(accumulator, nextValue) {
	// since we haven't passed in an optional second param, the accumulator is 1 and the nextValue is 2
	// next step, accumulator is 3 and the next value is 3
	// then, accumulator is 6 and next value is 4
	// then, accumulator is 10 and next value is 5
	// then returned value is 15
	return accumulator + nextValue //returned value is 3
});

var arr1 = [1, 2, 3, 4, 5];
arr1.reduce(function(accumulator, nextValue){
	// 1. 10 + 1 = 11
	// 2. 11 + 2 = 13
	// 3. 13 + 3 = 16
	// 4. 16 + 4 = 20
	// 5. 20 + 5 = 25
	// final value is 25
	return accumulator + nextValue;
}, 10);

// strings example
var names = ["Tim", "Matt", "Colt", "Elie"];
names.reduce(function(accumulator, nextValue){
	// The instructors are Tim
	// The instructors are Tim Matt
	// The instructors are Tim Matt Colt
	// The instructors are Tim Matt Colt Elie
	return accumulator += " " + nextValue;
}, 'The instructors are');

// objects example
var arr3 = [5, 4, 1, 4, 5];
arr.reduce(function(accumulator, nextValue){
	// {5: 1}
	// {5: 1, 4: 1}
	// {5: 1, 4: 1, 1: 1}
	// {5: 1, 4: 2, 1: 1}
	// {5: 2, 4: 2, 1: 1}
	if(nextValue in accumulator){
		accumulator[nextValue]++;
	} else {
		accumulator[nextValue] = 1;
	}
	return accumulator;
}, {});

// examples of using reduce in a function
function sumOddNumbers(arr) {
	return arr.reduce(function(accumulator, nextValue){
		if(nextValue % 2 !== 0) {
			accumulator += nextValue;
		}
		return accumulator;
	}, 0);
}

console.log(sumOddNumbers([1, 2, 3, 4, 5])); //9

function createFullName(arr) {
	return arr.reduce(function(accumulator, nextValue){
		accumulator.push(nextValue.first + " " + nextValue.last);
		return accumulator;
	}, []);
}

console.log(createFullName([{first: "Colt", last: "Steele"}, {first: "Matt", last: "Lane"}]));
