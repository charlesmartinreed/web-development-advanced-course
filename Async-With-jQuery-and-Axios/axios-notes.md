// AXIOS is a lightweight HTTP request library. That's it. None of the extra stuff you get (and may not need!) from jQuery.

// can also make http requests from node.js

// built atop default XHR requests, so browser compatibility is great

// example of GET syntax
axios.get(url)
.then(function(res){
	console.log(res.data);
	})
	.catch(function(e){
		console.log(e);
		})
