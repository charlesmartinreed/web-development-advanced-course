- When ... is used outside of function parameters, the operator is called the SPREAD OPERATOR
- Take an array, and spread each value out
- useful when you have a function that accepts each value individually

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

- Combining arrays, ES5 style
var combined =arr1.concat(arr2).concat(arr3);

- Combining arrays, ES2015 style
var combined = [...arr1, ...arr2, ...arr3]

- Before ES2015, this was commonly done with .apply because the second parameter took in an array of values

var arr = [3, 2, 4, 1, 5];
Math.max(arr); //doesn't know how to deal with the array! NaN

// ES5 way
Math.max.apply(this, arr); // 5

// ES2015 way
Math.max(...arr); //same thing, spreads the values

function sumValues(a,b,c) {
	return a+b+c;
}

var nums = [12,15,20]
//ES5 way
sumValues.apply(this, nums);

//ES2015 way
sumValues(...nums);
