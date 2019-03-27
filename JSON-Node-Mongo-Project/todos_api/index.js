var express = require('express'),
		bodyParser = require('body-parser'),
		port = process.env.PORT || 3000,
		app = express();

// Because res.send is dynamic, i.e, it responds to what you send with it, string, object, etc, we can provide an opbject that will be converted to JSON
// res.json is the method being called in this scenario when we pass an object to res send

var todoRoutes = require('./routes/todos');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// when we sendFile, this will allows us to reference the full path of our served files
app.use(express.static(__dirname + '/views'));

// this allows us to use our css, app, etc.
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	// res.send("Hello world! I'm an express app!");
	// res.send({message: "Hi, this is from a JS Object!"});
	// res.json({message: "Hi, this is from a JS Object!"});
	// res.send("HELLO FROM THE ROOT ROUTE!");
	res.sendFile("index.html");
});

// this is how we tell our app to use specific routes
app.use('/api/todos', todoRoutes);



app.listen(port, () => console.log(`App is running on port ${port}`));
