const button = document.querySelector('#btn');
const image = document.querySelector('#photo');
const URL = 'https://dog.ceo/api/breeds/image/random'
button.addEventListener('click', handleClick);



function handleClick() {
	//make a xhr request
	let xhr = new XMLHttpRequest();

	// check the status and state
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status === 200) {
			// because this is JSON, not an object yet, we need to use .parse to convert it TO an object
			let sourceURL = JSON.parse(xhr.responseText).message;
			displayImage(sourceURL)
		}
	}

	//process the request
	xhr.open("GET", URL);
	xhr.send();
}

function displayImage(sourceURL) {
	image.setAttribute('src', sourceURL);
}
