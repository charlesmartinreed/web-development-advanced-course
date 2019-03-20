const button = document.querySelector('#btn');
const avatar = document.querySelector('#avatar');
const divfullname = document.querySelector('#fullname');
const divusername = document.querySelector('#username');
const spanemail = document.querySelector('#email');
const spancity = document.querySelector('#city');

let URL = 'https://randomuser.me/apid/'
// let fullname = '';
// let username = '';
// let userEmail = '';
// let userCity = '';
// let userThumbnailURL = '';

window.addEventListener('DOMContentLoaded', fetchUserData);
button.addEventListener('click', fetchUserData);


function fetchUserData() {
	fetch(URL)
	.then(handleErrors)
	.then(function(response) {
		return response.json()
	})
	.then(function(data) {
		parseAndDisplayData(data)
	})
	.catch(function(error) {
		console.log(error);
	})
}

function handleErrors(request) {
	if(!request.ok) {
		throw Error(request.status);
	} else {
		return request;
	}
}



function printError(request) {
	console.log(error);
}

function parseAndDisplayData(data) {
	let userResults = data.results[0];

	let fullName = `${userResults.name.first} ${userResults.name.last}`;
	let username = `${userResults.login.username}`;
	let userEmail = `${userResults.email}`;
	let userCity = `${userResults.location.city}`;
	let userThumbnailURL = `${userResults.picture.thumbnail}`;

	avatar.setAttribute('src', userThumbnailURL);
	divfullname.innerText = fullName;
	divusername.innerText = username;
	spanemail.innerText = userEmail;
	spancity.innerText = userCity;

}
