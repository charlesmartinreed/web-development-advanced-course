// Similar to some, but if the callback returns FALSE for ANY single value, the entire function returns false

// examples
var arr = [-1, -2, -3];

arr.every(function(value, index, array){
	return value < 0;
}); //true

arr.every(function(value, index, array){
	return value > 2;
}); //false


// implementation example
function every(arr, callback) {
	for (var i=0; i<arr.length; i++) {
		if(!callback(arr[i], i, arr)) {
			return false; //no match cases
		}
	}
	return true; //
}

// more examples
function allLowerCase(str) {
	return str.split("").every(function(val){
		return val === val.toLowerCase();
	});
}
let lowercaseresult = allLowerCase('this is really nice'); //true
let lowercaseresult2 = allLowerCase('this is Really nice'); //false
// console.log(lowercaseresult);
// console.log(lowercaseresult2);

function allArrays(arr) {
	return arr.every(Array.isArray);
}

let allArrayresult = allArrays([[1], [2], [3,4]]); //true
let allArrayresult2 = allArrays([[1], [2], {}]); //false
console.log(allArrayresult);
console.log(allArrayresult2);
