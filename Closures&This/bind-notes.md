// REMEMBER, bind returns a new function to us, with the newly bound 'this' value already reflected.

// bind is useful when we don't know all the args that will be passed to a function and thus won't want to invoke it right away. We just want a new func with some of the parameters.

// this is obviously useful for async code or code that doesn't necessarily run top-to-bottom

// This is called partial application

function addNumbers(a,b,c,d) {
	return this.firstName + " just calculated " + (a+b+c+d);
}

var elie = {
	firstName: "Elie"
}

var elieCalc = addNumbers.bind(elie,1,2,3,4); //function definition
elieCalc();  // elie just calculated 10

// partial application example
var elieCalc = addNumbers.bind(elie,1,2); //function definition
elieCalc(3,4);  // elie just calculated 10

// often we lost the context of 'this', in functions that we don't want to execute right away
var colt = {
	firstName: "Colt",
	sayHi: function() {
		setTimeout(function(){

			// ahhh, the keyword 'this' is actually in the global context because setTimeout is called at a later time, meaning the object that 'this' is attached to becomes the owner of setTimeout, the window.

			// how do we fix this, while maintaining the ability to execute this function at a later time? BIND!

			// we could actually just directly reference the colt object by using .bind(colt) instead of .bind(this), but this ties our hands if the variable name changes or we want to make this functionality more generic

			console.log("Hi " + this.firstName);
			}.bind(this), 1000);
	}
}
