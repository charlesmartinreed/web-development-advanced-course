# What is a closure?
- A function that makes use of variables defined in outer functions that have previously returned

function outer() {
	var start = "Closures are"
	return function inner() {
		return start + " " + "awesome"
	}
}

- invoking outer() shows us THE DEFINITION OF THE INNER
- invoking inner right away - outer()() - gives us "Closures are awesome"
- alternatively, we can store the result of the function in a variable for later use

- thanks to the closure return, the inner function has access to the variable defined in the outer function

- A closure exists when an inner function makes use variables defined in an outer function that has returned.

- We NEED to return the inner function in order for this to work
- The inner function doesn't need to be named, it can be anonymous

function outer(a) {
	return function inner(b){
		return a + b;
	}
}
outer(5)(5); //10
var storeOuter = outer(5);
storeOuter(10); //15

# Closure or not?
- ex A: function outerFn(){
	var data = "something from outer";
	return function innerFn() {
		return "Just returned from the inner function";
	}
}
- ex B: function outerFn(){
	var data = "something from outer";
	return function innerFn() {
		var innerData = "something from inner"
		return data + " " + innerData;
	}
}

- example A is NOT because the inner function DOES NOT MAKE USE OF VARIABLES DEFINED FROM AN OUTER FUNCTION THAT HAS RETURNED. When an inner function does not make use of any external variables, we simply have nested functions.

- IMPORTANT NOTE: INNER FUNCTIONS ONLY RETAIN REFERENCES TO OUTER FUNCTION VARIABLES THAT ARE UTILIZED
function outerFn(){
	var data = "something from outerFn"
	var fact = "Remember this!";
	return function innerFn() {
		return fact; //when returning, the function first checks to see if there are any inner functions that use variables defined in the function
		// trying to access data here results in a ReferenceError!
	}
}

# How can closures be used to emulate private variables?

# How are closures used in the real world?

- In JavaScript, closures are often used to create private variables.
- In other languages, these are variables which can not be externally modified.

function counter(){
	var count = 0;
	return function inner(){
		count++;
		return count;
	}
}

var counter1 = counter();
counter1(); //1
counter1(); //2

var counter2 = counter()
counter2(); //1

// why is counter2 equal to 1 when we check it? Because each of these closures has a privately scoped count variable.

- Closures can also be used to return functions in an object

function classRoom() {
	var instructors = ['Elie', 'Colt']
	return {
		getInstructors: function() {
			return instructors;
		},

		addInstructors: function(instructor) {
			instructors.push(instructor);
			return instructors;
		}
	}
}

var first = classRoom()
first.getInstructors() // (2) ["Elie", "Colt"]
first.addInstructors('Matt') //(3) ["Elie", "Colt", "Matt"]
first.addInstructors('Tim') ////(4) ["Elie", "Colt", "Matt", "Tim"]

- Problem with the above implementation? The data can be overwritten, trivially (like, by using .pop on the getInstructors method...)

- How do we prevent this? Immutability, the value cannot be changed.
- In this scenario, we fix our implementation by returning a COPY of the data, not the data itself.

function classRoom() {
	var instructors = ['Elie', 'Colt']
	return {
		getInstructors: function() {
			// slice returns a shallow copy, leaving the original array unmodified; remember that if begin and end indices are not passed to slice, the entire array is sliced
			return instructors.slice();
		},

		addInstructors: function(instructor) {
			instructors.push(instructor);
			return instructors.slice();
		}
	}
}

// RECAP
- Not all programming languages have closures
- closures exist only when an inner function makes use of an outer variable from an outer function that has previously returned
- closures are used in JS to create private variables and code that isolates our logic and application 
