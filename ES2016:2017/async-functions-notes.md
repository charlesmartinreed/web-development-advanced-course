# Async
- A special function created using the word 'async'
- Intended to simplify the writing of async code, specifically PROMISES

ex: async function first() {
	return "We did it"
}

first(); //returns a promise
first().then(val => console.log(val)); // "We did it"

# Await
- reserved keyword that can only be used inside of an async function
- pauses execution of the async func, followed by a promise
- await keyword waits for the promise to resolve, then resumes the async function's execution AND returns the resolved value
- think of this like a pause button; write async code that reads like synchronous code
- similar to generators and yields, but more syntactically concise

ex:
async function getMovieData() {
	console.log('starting'); //1
	var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
	console.log('all done'); //2
	console.log(movieData) //3
}

- notice that we didn't need to use .then or anything to handle our promise
getMovieData() //logs object with data about the movie

- Async functions can also be placed as methods inside of objects. Just be sure to prefix with async/await keywords
var movieCollector = {
	async getMovie(){
		var response = await $.getJSON(...)
		console.log(response);
	}
}
movieCollector.getMovie()

# Error handling with Await
- JavaScript throws errors if a promise is rejected while using await
- To handle this easily, we use try/catch statements
async function getUser(user) {
	try {
		var response = await $.getJSON('...')
		console.log(response.name)
	} catch (e) {
		console.log('User does not exist!')
	}
}

# Handling multiple requests with async/await
- Best practice: Start the HTTP requests in parallel and await their resolved promise

ex: sequential, not ideal
async function getMovieData() {
	var responseOne = await $.getJSON('...');
	var responseTwo = await $.getJSON('...');
	console.log(responseOne)
	console.log(responseTwo)
}

getMovieData()

ex: parallel, better
async function getMovieData() {
	var titanicPromise = $.getJSON('...')
	var shrekPromise = $.getJSON('...')

	var titanicData = await titanicPromise;
	var shrekData = await shrekPromise;

	console.log(titanicData)
	console.log(shrekData)
}

getMovieData()

- Even though this code looks similar, there's a significant performance improvement from awaiting in parallel, rather than sequentially

# Promise.all with Await
ex: async function getMovieData(first, second) {
	var moviesList = await Promise.all([
		$.getJSON('...${first}...'),
		$.getJSON('...${second}...')
		]);
		console.log(moviesList[0].Year);
		console.log(moviesList[1].Year);
}

getMovieData('shrek', 'blade');

- instead of using .then and callback, we can simply await the resolution with promise.all. Despite being asynchronous, this reads like synchronous code.
