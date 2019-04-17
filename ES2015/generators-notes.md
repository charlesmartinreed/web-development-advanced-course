# Generators

- function, added in ES2015
- allow us to pause execution of a function and resume at any, later time
- created using a \* after the function keyword
- when invoked, generator is returned to us
- that returned generator has an object called 'next' which has keys 'value' and 'done'
- VALUE is what is returned from paused function using the YIELD keyword
- DONES is a boolean that returns true when function is complete

# How do you write a generator?

function\* pauseAndReturnValues(num) {
for (let i=0; i < num; i++) {
yield i;
}
}

- when we invoke this func, we get a generator function. We can call .next on this function to increment our yield.

var gen = pauseAndReturnValues(5);
gen.next(); //0, false
gen.next(); //1, false
gen.next(); //2, false
gen.next(); //3, false
gen.next(); //4, false
gen.next(); //undefined, true

- Generators are very useful for time consuming functions

function\* printValues() {
yield "First";
yield "Second";
yield "Third";
}

var g = printValues()
g.next().value; //"First"
g.next().value; //"Second"
g.next().value; //"Third"

# Iterating over generators

function\* pauseAndReturnValues(num) {
for (let i=0; i < num; i++) {
yield i;
}
}

for (val of pauseAndReturnValues(3)) {
console.log(val)
}
//0
//1
//2

# Generators and Async code

- We can use generators to pause async code
  function\* getMovieData(movieName) {
  console.log('starting');
  yield \$.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
  console.log('ending');
  }

- now since the value given by the yield is actually a promise, we'd have to handle that...
- In ES2016/2017, we got async/await so that's a more modern approach to this issue.
