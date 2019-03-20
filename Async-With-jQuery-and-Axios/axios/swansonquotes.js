// DOM variables
const axiosBtn = document.querySelector('#axios');
const jQueryBtn = $("#jQuery");
const fetchBtn = document.querySelector('#fetch');
const xhrBtn = document.querySelector('#xhr');

let quoteP = document.querySelector('#quote');

// event listeners
axiosBtn.addEventListener('click', function() {
	axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
	.then(displayAxiosQuote)
	.catch(displayErrors)
});

jQueryBtn.click(function() {
	$.getJSON('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
	.then(displayjQueryQuote)
	.catch(displayErrors)
});

fetchBtn.addEventListener('click', function() {
	fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
	.then(parseFetch)
	.then(displayFetchQuote)
	.catch(function(error){
		console.log(error);
	})
})

xhrBtn.addEventListener('click', function() {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status === 200) {
			parseXHRrequest(request.responseText);
		} else {
			console.log("Error time!");
		}
	}

	request.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes')

	request.send()
})

// XHR
function parseXHRrequest(req) {
	let quote = JSON.parse(req)[0];
	displayXHRQuote(quote);
}

function displayXHRQuote(quote) {
	quoteP.innerText = quote;
}

// FETCH
function parseFetch(res) {
	return res.json()
}

function displayFetchQuote(data) {
	let quote = data[0];
	quoteP.innerText = quote;
}

// AXIOS
function displayAxiosQuote(res) {
	let quote = res.data[0];
	quoteP.innerText = quote;
}

// JQUERY
function displayjQueryQuote(quote) {
	// console.log(quote[0]);
	$("#quote").text(quote[0]);
}

function displayErrors(error) {
	if(error.response) {
		console.log("Response error", error.response.status);
	} else if (error.request) {
		console.log("Request error");
	} else {
		console.log("General error", error.message);
	}
}
