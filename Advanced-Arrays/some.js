// iterates through an array
// runs callback on each value in the array
// if the callback returns true for at least one single value, the method returns true - otherwise return false

// examples
var arr = [1, 2, 3];

arr.some(function(value, index, array){
	return value < 2;
}); //true

arr.some(function(value, index, array){
	return value > 4;
}); //false

// implementation
function some(arr, callback) {
	for (var i=0; i<arr.length; i++) {
		if (callback(arr[i]), i, arr) {
			return true; //found match! return true!
		}
	}
	return false; //no values match
}

function hasEvenNumber(arr) {
	return arr.some(function(value){
		return value % 2 === 0;
	});
}

const evenresult = hasEvenNumber([1, 2, 3, 4]);
const evenresult2 = hasEvenNumber([1, 3, 5]);
// console.log(evenresult);
// console.log(evenresult2);

function hasComma(str){
	return str.split("").some(function(value){
		return value === ',';
	});
}

const commaresult = hasComma("This is wonderful");
const commaresult2 = hasComma("This, is wonderful");
// console.log(commaresult);
// console.log(commaresult2);
