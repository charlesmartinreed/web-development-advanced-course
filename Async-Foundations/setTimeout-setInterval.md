// async with setTimeout
// setTimeout asynchronously invokes a callback after a delay in milliseconds

function callback() {
	console.log("callback function");
}
var delay = 1000; //1 second, 1000 milliseconds
setTimeout(callback, delay);

// anonymous function version
setTimeout(function() {
	console.log("Runs in approx. 2000ms");
}, 1000);

// invoking setTimeout gives you an id for that timeout
var timerId = setTimeout(function() {
	console.log("This function runs in 30 seconds");
	}, 30000);

// CANCEL setTimeout WITH clearTimeout
setTimeout(function() {
	console.log("Cancelling the first setTimeout", timerId)
	clearTimeout(timerId);
	}, 2000);
// console = 'Canceling the setTimeout <id>'


// async with setInterval
// setInterval is similar to setTimeout, but the callback is invoked at each interval rather than just once

function callback() {
	console.log("callback is called continuously");
}

var repeat = 3000;
setInterval(callback, repeat);

var num = 0;
setInterval(function() {
	num++;
	console.log("num:", num);
	}, 1000);

// CANCEL setInterval WITH clearInterval
var num = 0;
var intervalId = setInterval(function() {
	num++;
	console.log("num:", num);
	if(num === 3) {
		clearInterval(intervalId);
	}
	}, 1000);
