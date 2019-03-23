# What is 'this' keyword?
- reserved keyword in JS
- determined by the function's execution context when it is called, EVERYTIME that function is run
- in JS, every time a function is called, two special keywords are given to it: arguments keyword and this keyword.


# What are the four ways to always figure out what the keyword 'this' is referencing

# Global
- when this is declared OUTSIDE of declared object. In this context, it refers to the global object, in the browser, this is the 'window' object.
- if you don't see call, apply or bind, this is referring to the global object

var instructor = "Elie"
window.instructor // "Elie"
window.instructor === instructor // true

function whatIsThis() {
	return this;
}

whatIsThis(); // window

- what happens when we add properties to this when it is in the global context?

var dog = "Rusty";
function makePerson() {
	var person = "Colt"; // no access to this variable outside, since it isn't returned

	person = "Colt"; // with this syntax, person is global scope
}

function mistake() {
	this.badIdea = "oops!";
}

badIdea //"oops!", this is accessible in the global scope sine we attached it to this!

"use strict" was implemented in ES5 as a means of preventing this behavior. When Strict Mode is enabled, this is undefined in the global scope so we can't carelessly hoist variables up to it.

# object/implicit
- when 'this' is found inside the declared object, the value of 'this' will always be the closest parent object.

var person = {
	firstName: "Elie",
	sayHi: function() {
		return "Hi " + this.firstName;
	},
	determineContext: function() {
		return this === person; // true
	}
}

// closest parent object is the person object, so 'this' refers to the person

var person = {
	firstName: "Elie",
	determineContext: this;
	//here, this refers to the WINDOW because there are no functions within person to capture a new value of 'this'
}

- what about nested objects?
var person = {
	firstName: "Colt",
	sayHi: function() {
		return "Hi " + this.firstName;
	},
	determineContext: function() {
		return this === person;
	},
	dog: {
		// dog is the closest parent object to the sayHello method, so this.firstName is undefined

		sayHello: function() {
			return "Hello " + this.firstName;
		},
		determineContext: function() {
			// in this context, this doesn't refer to the person, but rather the dog object. This returns false.

			return this === person;
		}
	}
}

# Explicit
- what if you need to explicitly set the value of this.
- call, apply, and bind allow you to explicitly set the context of this by setting their params
- call, apply and bind are methods that can only be used by functions

# Call
- parameters: thisArg, a, b, c, d, ...
- call immediately invokes the function it is called on

# Apply

- parameters (2 max): thisArg, [a, b, c, d]
- apply immediately invokes the function it is called on

# Bind

- parameters: thisArg, a, b, c, d, ...
- bind is not immediately invoked, returns a function definition with value of keyword 'this' already set as what was passed into thisArg
- bind allows us to save functions with a different value of the 'this' keyword to be called at a later time

- RECAP: call, apply, and bind are used to explicitly set 'this' keyword value; This means they have precedence of the first two rules, implicit and global. Call and bind accept an infinite amount of parameters, while apply only accepts two.

function firstFunction() {
	return "Hello";
}

- new
