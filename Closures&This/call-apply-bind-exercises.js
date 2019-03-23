//1. Write a function called arrayFrom which converts an array-like-object into an array.

var divs = document.getElementsByTagName('divs');

function arrayFrom(arrayLikeObject) {
	//using .call so that the target referred to by slice, this, is the arraylikeobject, not the array ([]).
	return [].slice.call(arrayLikeObject);
}

//2.  Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

function sumEvenArguments() {
	// 1. create the arguments "array like" into an actual array
	var newArgs = [].slice.call(arguments);

	return newArgs.reduce(function(accumulator, nextValue) {
		if(nextValue % 2 === 0 ){
			return accumulator + nextValue;
		}
		// if not even, just return the accumulator, which is 0
		return accumulator;
	}, 0)
}

//3. Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

function invokeMax(fn, num) {
	var max = 0;

	return function() {
		//inner function
		if (num >= max) {
			return "Maxed Out";
		}
		max++;
		//we don't care about the value of this, but we need to use to apply to pass in the array of arguments TO THE INNER FUNCTION
		// ARGUMENTS REFERS TO ARGUMENTS PASSED TO THE INNER FUNCTION WHEN INVOKED
		return fn.apply(this, arguments)
	}
}

//4. Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

function once(fn, thisArg) {
	var hasBeenCalled = false;
	return function() {
		if(!hasBeenCalled) {
			hasBeenCalled = true;
			// since we're explicitly trying to invoke this function with the outer function's arguments, we DO care about which this specify here
			return fn.apply(thisArg, arguments);
		}
	}
}

//5. Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

function bind(fn, thisArg) {
	// result of arguments array like being converted
	// here, we slice the arguments AFTER the first two by starting our slice at index 2
	var outerArgs = [].slice.call(arguments, 2)
	return function(){
		// here, we get the remaining arguments
		var innerArgs = [].slice.call(arguments)
		var allArgs = outerArgs.concat(innerArgs);

		// original function being invoked with result of original function as first parameter, thisArg being our 'this', and parameters built in allArgs as the arguments
		return fn.apply(thisArg, allArgs)
	}
}

//6. Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!
//
// Flip should return a new function that when invoked takes the correct number of required arguments to that function which are then reversed. HINT - you will need to use the .length property on functions to figure out the correct amount of arguments. For example:

// flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)

function flip(fn, thisArg) {
	// result of arguments array like being converted
	// here, we slice the arguments AFTER the first two by starting our slice at index 2
	var outerArgs = [].slice.call(arguments, 2);

	return function() {
		// here, we get the remaining arguments
		var innerArgs = [].slice.call(arguments);

		//only want to invoke function with only number of parameters specified
		//all functions have a property called length that returns the number of functions that the function accepts
		var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)

		//invoke fn using apply
		return fn.apply(thisArg, allArgs.reverse())
	}
}
