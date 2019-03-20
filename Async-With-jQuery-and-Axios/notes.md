// MAKING A REQUEST AND PARSING JSON WITH JQUERY

// vanilla JS, using XMLHttpRequest

var request = new XMLHttpRequest();
request.open('GET', myURL);

request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
		// success
		var data = JSON.parse(request.responseText);
	} else {
		// handle issues
	}
};

request.onerror = function() {
	// connection error handled here
};

request.send();

// with jQuery
$.getJSON('/my/url', function(data) {
	//.getJSON combines making a JSON request AND parsing it into a single method
});

// Four major jQuery AJAX Methods
$.ajax (which everything else is built upon)
$.get
$.post
$.getJSON

// JQUERY CDN SCRIPT TAG
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

// Example syntax
$('#btn').click(function(){
	alert('JQUERY ACTIVATED!')
	});
