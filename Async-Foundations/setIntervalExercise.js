function countdown(seconds) {
	var intervalId = setInterval(function() {
		seconds--;
		if (seconds === 0) {
			console.log("Ring Ring Ring!");
			clearInterval(intervalId);
		} else {
			console.log("Timer:", seconds)
		}
	}, seconds * 1000);
}
