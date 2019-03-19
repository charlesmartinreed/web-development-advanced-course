Fetch, the sequel to XMLHTTPRequest

// SYNTAX
fetch(url) -> returns a promise

.then (response) -> response data blob object
.catch (reject) -> errors are handled here

// example using an API
fetch(url)
.then(function(data){
	console.log(data);
	console.log("status code was: " + data.status)
});

// res.json()
// returns a promise, because it happens async and make take a moment. Taking the promise returned from .json() gives us our data

//note that our final .then, where we actually work with the data, can be appended to the return statement as well.

fetch(url)
	.then(function(response)) {
		return response.json()
	})
	.then(function(data){
		console.log(data);
	});

// USING FETCH WITH OPTIONS
fetch(url, {options})

fetch(url, {
	method: 'POST',
	body: JSON.stringify({
		name: 'blue',
		login: 'bluecat',
		})
	})
	.then(function(data) {
		//do this
		})
	.catch(function(error) {
		//handle error
		});


// HANDLING FETCH ERRORS

var btn = document.querySelector("button");

btn.addEventListener("click", function(){
  var url = 'https://api.github.com/users/colt';
  fetch(url)
  .then(handleErrors)
  .then(function(request) {
    console.log("EVERYTHING IS FINE!");
    console.log(request);
  })
  .catch(function(error) {
  //error handling
    console.log(error);
  });
});

function handleErrors(request) {
    if(!request.ok) {
      throw Error(request.status);
    }
    return request;
}
