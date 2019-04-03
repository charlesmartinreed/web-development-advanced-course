- Let creates 'block scope'
- Before ES2015, there was only function and global scope
- if, for, while, do, try/catch are keywords that create scope
- variables define with var have their scope lifted to the top of the scope that they are in

var instructor = "Elie"
if(instructor === "Elie") {
	let funFact = "Plays Cello!"
}

funFact; //reference error! Scoped to the block

function helloInstructor() {
	return elie
	var elie = "ME!"
} // returns 'undefined!'

// Why does that return undefined and not throw us a ReferenceError? Because in the var is HOSTED to the top of the function scope, meaning the JS compiler sees this:

function helloInstructor()
 {
	 var elie;
	 return elie;
	 var elie = "ME!";
 }

- How does let hoist? Well, it hoists to something called the TDZ or Temporal Dead Zone, where variables are declared but we CANNOT ACCESS THEIR VALUES
- This means, while it does hoist in the same way as the var example above, referencing that value before it is assigned a value gives us a ReferenceError

- When to use var vs let?
- when working in a block where you don't want internal variables to be accessible outside of it, use LET

- Consider the following code example
- Before let, if we wanted this code to work correctly, we needed to nest loops and invoke the inner loop immediately
for(var i=0; i<5; i++) {
	setTimeout(function() {
		console.log(i);
		}, 1000)
}

for(var i=0; i<5; i++) {
	(function(j){
		setTimeout(function(){
			console.log(j);
			}, 1000);
	})(i)
}

- After let
for(let i=0; i<5; i++) {
	setTimeout(function() {
		console.log(i);
		}, 1000)
}
