#Inheritance

- passing along methods and properties from one class to another

#ES5 Inheritance

- commonly accomplished bt setting the prototype property of one function to be a new object with the **prototype** property of another object and resetting the constructor property

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

#ES2015 Inheritance

- uses the extends keyword

class Student extends Person {
....
}

# Super

Previously, we used .apply, .call or .bind to reduce code duplication

function Person(first, last) {
this.first = first;
this.last = last;
}

Person.prototype.sayHello() {
return `Hello ${this.first} ${this.last}`
}

function Student() {
// 'this' is the object created from the new keyword
// we use apply, not call, because we're passing in the array like 'arguments'
Person.apply(this, arguments)
}

#ES2015 Super

- in the student class constructor, we use super to invoke a method by the same name in the parent class

class Student extends Person {
constructor(first, last) {
super(first, last);
}
}
