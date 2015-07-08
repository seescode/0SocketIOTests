var express = require('express');
var app = express();

app.use(express.static('public'));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
	res.send("hello world 2");	
});




app.listen(7268, function() {
	console.log("site is running");
});