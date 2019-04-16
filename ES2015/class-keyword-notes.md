To mimic OOP class behavior, we use constructor functions and place methods on the prototype property of the constructor function

- Class is a reserved keyword
- Creates a constant that cannot be redeclared
- class is an abstraction of the constructor function and prototypes
- class does not hoist
- class uses 'new'

- ES5 version
  function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  }

var elie = new Student('Elie', 'Schoppik')

- ES6 version
  class Student {
  constructor(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  }
  }

- instantiation is still the same
  var elie = new Student('Elie', 'Schoppik')

#Instance Methods

- methods that can be used by every object created by the class

- Before ES2015 these methods were placed on the prototype
  Student.prototype.sayHello = function(){
  return ...
  }

- In ES2015, these methods are placed inside of the class
- don't put these in the constructor, they'll be redefined each time we declare a member of the class...
  class Student {
  constructor(...) {
  ...
  }

      sayHello() {
      	return ...
      }

  }

#Class Methods

- methods placed directly on the constructor functions

-ES5
function Student(first, last) {
this.first = first;
this.last = last;
}

Student.isStudent = function(obj) {
return obj.constructor === Student;
}

-ES2015
Methods and properties are called 'statics' and make use of the static keyword

class Student {
constructor(first, last){
this.first = first;
this.last = last;
}

    sayHello(){
    	return 'Hello ${this.first} ${this.last}';
    }

    static isStudent(obj){
    	return obj.constructor === Student;
    }

}

Student.isStudent(s)
//true
Student.isStudent([])
//false

- Static methods are useful when we don't want every object created from a class to have its own method

typeof [] //object
Array.isArray([]) //true
