// jQuery.get requires URL, optionally accepts data, etc.

$("#getBtn").click(function(){
	// behind the scenes, this is the same as using .ajax and explicitly passing an object with the GET and URL attributes
	// can also accept a dataType
	$.get('https://api.github.com/users/charlesmartinreed')
	.done(function(data){
		console.log(data);
	})
	.fail(function(){
		console.log("ERROR!");
	})
});

// equivalent to .ajax with a POST attribute
$("#postBtn").click(function(){
	$.post('https://githubz.com/users9/charlesmartinreed', {name: "Mikael", city: "St. Petersburg"})
	.done(function(data){
		console.log("HI THERE!");
	})
	.fail(function(){
		console.log("ERROR!");
	})
});

// by using getJSON, we're telling jQuery that we are definitely going to want to treat our data as JSON. Equivalent to using .ajax but explicitly setting the dataType
$("#getJSONBtn").click(function(){
	$.getJSON("https://api.github.com/users/charlesmartinreed")
	.done(function(data){
		console.log(data);
	})
	.fail(function(){
		console.log("ISSUES!");
	})
});
