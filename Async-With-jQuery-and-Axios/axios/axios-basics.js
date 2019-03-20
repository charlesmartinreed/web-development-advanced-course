var url = "https://jsonplaceholder.typicode.com/comments/";
var requestFailurl = "https://jsonplaeogagegeceholder.typicode.com/comments/";
var responseFailurl = "https://jsonplaceholder.typicode.com/comments/gegaegegeg";
var btn = document.querySelector("button");
var section = document.querySelector("#comments");

btn.addEventListener('click', sendRequest);

function sendRequest() {
	// with axios, rather than hardcoding our query params, we can pass dynamic values in an params object
	axios.get(url, {
		params: {
			postId: 1
		}
	})
	.then(addComments)
	.catch(handleErrors)
}
function addComments(res) {
	res.data.forEach(function(comment){
		appendComment(comment);
	});
}

function appendComment(comment) {
	var newP = document.createElement("p");
	newP.innerText = comment.email;
	section.appendChild(newP);
}

// ERROR HANDLING
function handleErrors(err) {
	// axios includes response and request to let you delinate between these two error cases
	if (err.response) {
		console.log("Problem with response", err.respose.status);
	} else if (err.request) {
		console.log("Problem with request!");
	} else {
		console.log("Error", err.message);
	}
}


// axios.get(url)
// .then(function(res){
// 	// console.log(res);
// 	// console.log(res.data.results[0]);
// 	console.log(res.data.results[0].question);
// })
// .catch(function(){
// 	console.log("ERROR!");
// })
