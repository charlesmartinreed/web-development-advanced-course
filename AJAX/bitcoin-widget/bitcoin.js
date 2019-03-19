const price = document.querySelector('#price');
const button = document.querySelector('#btn');
const requestURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

button.addEventListener('click', retrieveBitcoinData);
document.addEventListener('DOMContentLoaded', retrieveBitcoinData);

function retrieveBitcoinData() {
	// create the xhr request
	let XHR = new XMLHttpRequest();

	// check the state and the status
	XHR.onreadystatechange = function() {
		if (XHR.readyState == 4 && XHR.status === 200) {
			// update the span to reflect price
			let priceData = JSON.parse(XHR.responseText).bpi;
			let usdPriceData = priceData["USD"].rate;
			price.innerText = `${usdPriceData} USD`
		}
	}
	XHR.open('GET', requestURL);
	XHR.send();
}
