// QUERY SELECTORS
const button = document.querySelector('#btn');
const avatar = document.querySelector('#avatar');
const divfullname = document.querySelector('#fullname');
const divusername = document.querySelector('#username');
const spanemail = document.querySelector('#email');
const spancity = document.querySelector('#city');

// GLOBAL VARIABLES
let URL = 'https://randomuser.me/api/'

// EVENT LOADERS

window.addEventListener('DOMContentLoaded', fetchUserData);
button.addEventListener('click', fetchUserData);


function fetchUserData() {
	fetch(URL)
	.then(handleErrors)
	.then(parseJSON)
	.then(updateProfile)
	.catch(displayErrors)
	// .then(function(response) {
	// 	return response.json()
	// })
	// .then(function(data) {
	// 	parseAndDisplayData(data)
	// })
	// .catch(function(error) {
	// 	console.log(error);
	// });
}

function handleErrors(request) {
	if(!request.ok) {
		throw Error(request.status);
	} else {
		return request;
	}
}

function parseJSON(response) {
	return response.json().then(function(parsedData) {
		return parsedData.results[0];
	})
}

function updateProfile(parsedData) {
	var fullName = `${parsedData.name.first} ${parsedData.name.last}`;

	avatar.setAttribute('src', parsedData.picture.thumbnail);
	divfullname.innerText = fullName;
	divusername.innerText = parsedData.login.username;
	spanemail.innerText = parsedData.email;
	spancity.innerText = parsedData.location.city;
}

function displayErrors(err) {
	console.log(err);
}
