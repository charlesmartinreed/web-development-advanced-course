// https://api.github.com/zen

// Init a request
let xhr = new XMLHttpRequest();

// Each xmlhttprequest has a ready state, 0-4
// we need to check for readystate for done, which is "4"

// add event listener for state change
xhr.onreadystatechange = function() {
	// console.log("READY STATE IS..." + xhr.readyState);
	if(xhr.readyState == 4) {
		//did it work? Check the status code.
		if(xhr.status === 200) {
			//responseText holds our data
			console.log(xhr.responseText);
		} else {
			console.log("There was a problem!", xhr.status);
		}
	}
}

// Format the request
xhr.open("GET", "https://api.github.com/zen");

// Initiate the request
xhr.send();
