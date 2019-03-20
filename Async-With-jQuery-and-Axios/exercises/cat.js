// http://aws.random.cat/meow

$('#btn').click(function() {
	$.getJSON('http://aws.random.cat/meow')
	.done(displayKitty)
	.fail(displayError)
})

function displayKitty(data) {
	let src = data.file.toString();
	$("#photo").attr("src", src);
}

function displayError() {
	console.log("Error! No kitties were found! (or harmed)");
}
