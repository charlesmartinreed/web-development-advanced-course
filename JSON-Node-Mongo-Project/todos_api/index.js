var express = require('express'),
		port = process.env.PORT || 3000,
		app = express();

// Because res.send is dynamic, i.e, it responds to what you send with it, string, object, etc, we can provide an opbject that will be converted to JSON
// res.json is the method being called in this scenario when we pass an object to res send
app.get('/', function(req, res) {
	// res.send("Hello world! I'm an express app!");
	// res.send({message: "Hi, this is from a JS Object!"});
	res.json({message: "Hi, this is from a JS Object!"});
});

app.get('/happy', function(req, res){
	res.send("😄");
})

app.listen(port, () => console.log(`App is running on port ${port}`));
