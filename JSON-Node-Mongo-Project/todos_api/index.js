var express = require('express'),
		port = process.env.PORT || 3000,
		app = express();

app.get('/', function(req, res) {
	res.send("Hello world! I'm an express app!");
});

app.get('/happy', function(req, res){
	res.send("😄");
})

app.listen(port, () => console.log(`App is running on port ${port}`));
