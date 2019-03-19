// Describe and use findIndex
// Returns the index of first element in the array for which the callback returns a truthy value, otherwise -1 is returned.


function findIndex(array, callback) {
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			return i;
		}
	}
	return -1;
}

var numbers = [3, 4, 6, 2, 1];
console.log(findIndex(numbers, function(num) {
	return num === 6;
}));

// var arr = [5, 11, 13, 8, 6, 7]
// findIndex(arr, function(num, index, array) {
// 	return num % 2 === 0; //3, 8 is even
// });
//
// var langs = ["Java", "C++", "Python", "Ruby"];
// findIndex(langs, function(lang, index, arr) {
// 	return lang === "Javascript"; //-1, "JavaScript" is not in the array
// });
//
// var langs = ["Java", "C++", "Python", "Ruby"];
// findIndex(langs, function(lang, index, arr) {
// 	lang === "Javascript"; //undefined, because we're missing a return call here and JS always returns falsy "undefined" in this scenario
// });

// Implement findIndex
var names = ["Charles", "Brandice", "Michael", "David", "Sean", "Taylor"];

console.log(findIndex(names, name => name === "Sean"));
