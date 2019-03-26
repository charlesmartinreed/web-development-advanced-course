# What is OOP?
- Object oriented programming is a programming model based around blueprint objects called 'classes.'
- From those, we make 'instances'
- The idea is to make our classes as abstract and modular as possible
- we mimic OOP in JS by using functions and objects, though the language itself doesn't have strong OOP support

# What is the new keyword?
- needs to be used with a function, else you get a TypeError
- first, creates an empty object
- second, sets the keyword 'this' to that empty object
- third, adds an implicit 'return this' to the end of the function which follows it
- adds a __proto__ property onto the empty object (aka, 'dunder proto') that LINKS THE NEWLY CREATED OBJECT TO THE PROTOTYPE PROPERTY ON THE CONSTRUCTOR FUNCTION

# What are the four things the new keyword can do?
- creates empty obj
- sets 'this' keyword used in the function to be the object that was just created
- adds implicit return this to the end of function
- adds the 'dunder proto' property (__proto__) to the object that was just created

# How do we use constructor functions to reduce code duplication?
- Constructor functions are the blueprint we use to make our classes

function House(bedrooms, bathrooms, numSqft) {
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
	this.numSqft = numSqft;


}
- when we return a new House, with the 'new' keyword, 'this' becomes bound to that object
var firstHouse = new House(2, 2, 1000);


# How can we use call and apply to refactor constructor functions?
- see constructor-practice.js for additional details

# RECAP
- OOP is a model based on objects constructed from a blueprint. This helps us make modular, shareable code.
- In OOP languages, these blueprints are called "classes" and the objects created from them are called "instances"
- we mimic classes in JS by creating constructor functions with the 'new' keyword
- refactor duplication when multiple constructor functions share functionality by using call or apply
