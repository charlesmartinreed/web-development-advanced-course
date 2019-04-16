# Promise

- a one time guaranteed return of some future values
- promise is either resolved or rejected
- friendly way to refactor callback code, used in libraries like jQuery (deferred) for a while but just added to JS in ES2015
- bluebird and q are promise based libraries

# Explaining Promise

- You go to a restaurant
- You place your order and get a ticket (promise)
- After some time, you will either get your food (resolve) or not (rejected)
- If you want another order, you have to get another ticket (promise)

# Creating Promises

- use the new keyword
- promise constructor accepets a callback with two params, typically called resolve and reject

<!-- after 1 sec, return either resolve or reject -->

function displayAtRandomTime() {
return new Promise(function(resolve, reject) {
setTimeout(function() {
if(Math.random() > .5) {
resolve('Yes!');
} else {
reject('No!');
}
}, 1000);
});
}

# Handling promises

- Resolve is handled with .then
- Reject is handled with .catch

      	displayAtRandomTime().then(function(value){

  console.log(value);
  }).catch(function(error){
  console.log(error);
  })

- Promises can be chained from one promise to another, since a promise ALWAYS RETURNS SOMETHING THAT HAS A THEN ("thenable")

# Promise.all

- Accepts array or promises
- Resolves all OR rejects when a single promise has been rejected
- This is called "fail fast" behavior
- If all passed-in promises fulfill, Promise.all is itself fulfilled with an array of the values from the passed-in promises, in the same order that the promises were passed in
- However, these promises are NOT GUARANTEED TO RESOLVE SEQUENTIALLY
- Similar to \$.when() in jQuery

ex:
function getMovie(title) {
return \$.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');

Promise.all([titanicPromise, shrekPromise, braveheartPromise]).then(function(movies){
return movies.forEach(function(movie){
console.log(movie.Year);
})
})
