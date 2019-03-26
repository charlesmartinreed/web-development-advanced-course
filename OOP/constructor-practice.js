function Dog(name, age) {
	this.name = name;
	this.age = age;

	this.bark = function() {
		console.log(`${this.name} just barked!`);
	}
}

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 1);

// rusty.bark();
// fido.bark();

// IMAGINE WE HAVE TWO CONSTRUCTOR FUNCTIONS, one for a Car and one for a Motorcycle

function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}

// function Motorcycle(make, model, year) {
// 	this.make = make;
// 	this.model = model;
// 	this.year = year;
// 	this.numWheels = 2;
// }

// if we want to reduce this code, can we call Car with motorcyle?
var yamaha = new Car('Yamaha', 'S250', 2008)
// NO! This new keyword binds 'this' to the Car function, not the motorcycle.
// The answer? Using call/apply

// car function looks the same, but check out the motorcycle function
// function Motorcycle(make, model, year) {
// 	Car.call(this, make, model, year) //pass 'this' as the first param is how we change the value to refer to the object created when using the motorcycle function (var blah = new Motorcycle...)
// 	this.numWheels = 2;
// }

function Motorcycle(make, model, year) {
	//car.apply(this, [make, model, year]) //pass 'this' as the first param is how we change the value to refer to the object created when using the motorcycle function (var blah = new Motorcycle...)

	// arguments, being a list of all the arguments passed to a function. This is an array like object
	Car.apply(this, arguments);
	this.numWheels = 2;
}

var suzuki = new Motorcycle('suzuki', 'swift', 2006);
console.log(suzuki);
