# Object Rest

- Gathering remaining keys and values in an object and create a new one out of them

ex:
var instructor = {first: "Elie", last: "Schoppik", job: "Instructor", numSiblings: 3}

var { first, last, ...data} = instructor
first; //"Elie"
last; //"Schoppik"
data; // { job: "Instructor", numSiblings: 3}

# Object Spread

- Spread out keys and values from one obj to another
- Similar to Object.assign, but is a more consise means of creating a copy of an object while also allowing one to set default values

ex: instructor2 gets all the keys/values associated with instructor, but overwrites first and Last
var instructor = {first: "Elie", last: "Schoppik", job: "Instructor", numSiblings: 3}
var instructor2 = {...instructor, first: 'Tim', last: 'Garcia'}

ex 2:
var defaults = {job: "Instructor", ownsCat: true, ownsDog: true};
var matt = {...defaults, ownsCat: false};
var colt = {...defaults, ownsDog: false};
