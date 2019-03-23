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

// fixing this with call

person.dog.sayHello.call(person); //sets the 'this' value to person - returns "Hello Colt"

person.dog.determineContext.call(person); //sets the 'this' value to person - returns true

// call in the wild
var colt = {
	firstName: "Colt",
	[REMOVED]
}

var elie = {
	firstName: "Elie",
	// Ahhhh! Code duplication!
	[REMOVED]
}

colt.sayHi();
colt.sayHi.call(elie); // this fixes our duplication issue

// A universal sayHi function
function sayHi() {
	return "Hi " + this.firstName;
}

// now, Colt and Elie can use this function and capture themselves in the 'this' value

sayHi.call(colt); // Hi Colt
sayHi.call(elie); // Hi Elie

// Another use case for call
// instead of the slice target being the array, represented by [] which is equivalent to Array.prototype, the target of 'this' is our divs array like object.

var divsArray = [].slice.call(divs);
divsArray.filter(function(val){
	return val.innerText === 'Hello';
})
