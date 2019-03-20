// $.ajax is the "base" jQuery Method
// this creates a XMLHttpRequest under the hood

// $.ajax({
// 	method: "GET",
// 	url: "some.api.com",
// })
// .done(function(res)) {
// 	console.log(res);
// }
// .fail(function(){
// 	//do a thing
// })

// default method is 'GET', so you don't have to specifiy that here. Being explicit for demonstration purposes.

$(".btn").click(function(){
	$.ajax({
		method: "GET",
		url: "https://baconipsum.com/api/?type=meat-and-filler",
		dataType: 'json'
		//on dataType: jQuery makes an "intelligent guess" as to the MIME type of the data pulled from the source. If it suspects it's working with JSON, it'll parse the incoming data as JSON before presenting it in the .done method
	})
	.done(addP)
	.fail(function(){
		// in jQuery, this catches data issues and response failures alike
		alert("OH NO! REQUEST FAILED!");
	})
});

function addP(data) {
	$("p").text(data[0]);
}
