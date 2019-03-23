// We see a difference with call and apply when we start adding parameters

function addNumbers(a, b, c, d) {
	return this.firstName + " just calculated " + (a+b+c+d);
}

var colt = {
	firstName: "Colt"
}

var elie = {
	firstName: "Elie"
}

addNumbers.call(elie, 1,2,3,4);
addNumbers.apply(elie,[1,2,3,4]);

// When might you use apply? When a function doesn't accept an array, APPLY WILL SPREAD OUT VALUES IN AN ARRAY FOR US

// Math.max for example, only takes comma separated values. However...
var nums = [5, 7, 1, 4, 6];
Math.max(nums); // NaN

// now in this example, setting this is irrelevant, we just care about spreading the values of the array
Math.max.apply(this, nums); /

// another example:
function sumValues(a,b,c) {
	return a + b + c;
}

var values = [1, 2, 3];
sumValues(values); // nope!
sumValues.apply(this, values);
