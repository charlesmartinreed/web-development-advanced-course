# Destructuring is
- Extracting values from data stored in objects and arrays

# Destructuring Objects
var instructor = {
	firstName: "Elie",
	lastName: "Schoppik"
}

- ES5 style
var firstName = instructor.firstName;
var lastName = instructor.lastName;

- ES2015 style
- this creates the two values and unpacks them from the KEYS WITH THE SAME NAMES
var { firstName, lastName } = instructor;

- ES2015 style with different variable names
- key : your variable name
var { firstName: first, lastLame: last} = instructor;

- another example of the usefulness of destructuring

- before
function createInstructor(options) {
	var options = options || {};
	var name = options.name || { first: "Matt", last: "Lane"}
	var isHilarious = options.isHilarious || false;
	return [name.first, name.last, isHilarious];
}

- after, by passing in a destructured object as a param
- assign whole thing to be empty object so ES2015 knows our default parameter IS a destructured object
function createInstructor({name = {first: "Matt", last: "Lane"}, isHilarious = false} = {}) {
	return [name.first, name.last, isHilarious]
}

# Destructuring Arrays
- Use brackets instead of curly braces
- ES5 way
var array = [1,2,3];

var a = arr[0];
var b = arr[1];
var b = arr[2];

- ES2015 way
var array = [1,2,3]
var [a,b,c] = array;

- ES5
function returnNumbers(a, b) {
	return [a, b];
}

var first = returnNumbers(5, 10)[0]
var second = returnNumbers(5, 10)[1];

- ES2015
function returnNumbers(a, b) {
	return [a,b];
}
[first, second] = returnNumbers(5, 10);

- Destructuring is very useful for swapping values

- ES5 way
function swap(a, b) {
	var temp = a;
	a = b;
	b = temp;
	return [a, b]
}

- ES2015 way
function swap(a, b) {
	return [a, b] = [b, a];
}
