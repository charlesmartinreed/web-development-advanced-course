# shorthand notation

- ES5 version
var instructor = {
	firstName: firstName,
	lastName: lastName
}

- ES2015 version
var instructor = {
	firstName,
	lastName
}

# object methods

- ES5 version
var instructor = {
	sayHello: function() {
		return "Hello";
	}
}

- ES2015 version
var instructor = {
	sayHello() {
		return "Hello";
	}
}

# computed property names

- ES5 version
- in ES5, we first need to create an object and THEN assign a value to a particular key
var firstName = "Elie"
var instructor = {};
instructor[firstName] = "That's me!"

instructor.Elie; //That's me!

- ES2015 version
var firstName = "Elie";
- adding brackets around the name of the key allows JS to COMPUTE the property
var instructor = {
	[firstName]: "That's me!"
}

instructor.Elie;
