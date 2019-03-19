// Describe and use the forEach function
// var arr = [1,2,3,4,5,6];
// function double(arr) {
// 	for(var i=0; i<arr.length; i++) {
// 		console.log(arr[i] * 2);
// 	}
// }
// double(arr);

// double, using callbacks
// forEach(arr, function(number) {
// 	// console.log(number * 2);
// });

// forEach takes in an array as a parameter as well as a callback, invoking the callback for each element in the array

// callback signature is curElement, currentIndex, array, but not all of these need to implemented by your callback
//
// var strings = ["my", "forEach", "example"];
// var result = "";
// forEach(strings, function(str, index, array) {
// 	if (array.length - 1 !== index) {
// 		result += str + " ";
// 	} else {
// 		result += str + "!!!";
// 	}
// })

// Implement the forEach function
function forEach(arr, callback) {
	for(var i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}
