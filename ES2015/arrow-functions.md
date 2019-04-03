- Alternative to writing the function keyword

var add = function(a, b){
	return a+b;
}

- becomes this, in ES2015 with the use of arrow functions
var add = (a, b) => {
	return a+b;
}

- and can be broken down even further into a single line
var add = (a, b) => a+b;

- Arrow functions are especially useful when refactoring alongside higher order functions

[1,2,3].map(function(value){
	return value * 2;
});

[1,2,3].map(value => value * 2);

//double array, only return values divisible by 3
function doubleAndFilter(arr){
	return arr.map(function(value){
		return value * 2;
		}).filter(function(value){
			return value % 3 === 0;
		})
};

function doubleAndFilter(arr){
	return arr.map(value => value * 2).filter(value => value % 3 === 0)
}

- And finally, once arrow function'd
- When you only have a single parameter in an arrow function, it doesn't need to
var doubleAndFilter = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);

- How arrow functions differ from 'function' keyword
- In an arrow function, 'this' has the original meaning granted by the enclosing context
- This means the value of 'this' is whatever it would be immediately OUTSIDE of the arrow function

var instructor = {
	firstName: "Elie",
	sayHi: function() {
		setTimeout(function(){
			console.log("Hello " + this.firstName);
			}, 1000);
	}
}

instructor.sayHi(); //undefined. Why? Because 'this' belongs to the window as it is set by the object that calls the setTimeout function, i.e, the window.

- In ES5, we fix this with .bind

var instructor = {
	firstName: "Elie",
	sayHi: function() {
		setTimeout(function(){
			console.log("Hello " + this.firstName);
			}.bind(this), 1000);
	}
}

- Alternatively, we can use arrow functions because they don't get their own keyword this - the value comes from the enclosing context
var instructor = {
	firstName = "Elie",
	sayHi: function() {
		setTimeout(() => {
			console.log("Hello " + this.firstName);
			}, 1000);
	}
}
- In the above example, the arrow function is enclosed by instructor. Therefore, 'this' refers to the 'instructor' object
- That said, if we take it a step further and turn sayHi into an arrow function as well, we get our undefined output again. Why? Because sayHi will not have its own keyword 'this' and thus the keyword will refer to the window object and not the instructor

- Additionally, arrow functions don't automatically get their own arguments keyword, but they do, however have access to outer function arguments when nested and when the outer function uses the function keyword
- It is possible to get the arguments to an arrow function using the rest operator


# Tips on using arrow functions
- Never use them as methods in objects since we will almost get the incorrect value of this
