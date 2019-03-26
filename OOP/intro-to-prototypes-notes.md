# What is the prototype object?

# Describe the relationship between __proto__, prototype and constructor
- every constructor func has a property on it called prototype, which is an obj
- this prototype object has a property on it called "constructor", that points back to the constructor function
- when object is created with 'new' keyboard, a property called __proto__ gets created which links the object and the prototype property of the constructor function

# How can we add methods and properties on the prototype object to write more efficient code?
- The methods and properties created on the prototype are shared and accessible by any object created from the constructor function when 'new' is used

Person.prototype.isInstructor = true;
elie.isInstructor; //true. Why? Because of __proto__. Since the object has a link to Person.prototype, this attribute is accessible.

- The above is the example of the 'Prototype Chain'

- var arr = [];
- arr.hasOwnProperty('length'); //true. Why? We didn't define that! It's because of __proto__. But now the Array proto, it's actually inherited from the Object proto. Again, this, is an example of the Prototype Chain at work. JS will search from __proto__ to __proto__ until it finds the method or property in question.

# What are the differences between adding methods and properties to the prototype rather than adding them with a constructor function?

# How can we implement inheritance in JS using the prototype object?

- Inheritance is the passing of methods and properties from one class to another
- Since classes aren't built into the JS language, we pass the prototype property of one constructor to another
- we can't directly assign prototypes to one another because this creates reference issues

ex: Student.prototype = Teacher.prototype //bad! Now, properties added to student are also added to teacher because they are both referencing the same point in memory

- How do we fix this? Object.create

# Object.create
- creates a new function with the dunder prototype (__proto__) as its first parameter

-ex: function Student(firstName, lastName) {
	return Person.apply(this, arguments);
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.status = function() {
	return "I am currently a student!"
}

var elie = new Person("Elie", Schoppik);
elie.status; //undefined

# Object.create vs new
- New will accomplish ALMOST exactly the same as Object.create, but:
- Adds unnecessary properties on the prototype object because it is creating an object with undefined properties just for the prototype
- So, when doing prototypal inheritance as in the above example, use Object.create

# Resetting the constructor
- When we use Object.create to point toward our Person.prototype in prototypal inheritance, we also link our newly created object to the the constructor that belongs to object that we are inheriting from; this is not always ideal

- Set the prototype to be an object created with another prototype

- <Object>.prototype.constructor = <Object> fixes this.



# RECAP: 'new' keyword
- Creates object out of thin air, assigns the value of 'this' to be that created object, adds implicit 'return this' to the end of the function. creates a link (__proto__) between created object and the prototype property of the constructor function

function Person(name) {
	this.name = name;
}
Person.prototype; //exists

var elie = new Person("Elie");
var colt = new Person("Colt");

// since these objects are created from the Person constructor, they have access to the Person.prototype
elie.__proto__ === Person.prototype // true

// remember that the constructor function points back to the object
Person.prototype.constructor === Person // true

// Using shared prototpyes to refactor some code
function Person(name) {
	this.name = name;
	this.sayHi = function() {
		return "Hi " + this.name;
	}
}

elie = new Person("Elie");
elie.sayHi();

// BECOMES
function Person(name) {
	this.name = name;
}

Person.prototype.sayHi = function() {
	return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi(); // Hi Elie!
