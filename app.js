var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var programLanguages = require('./models/programming.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);

app.post('/search', function(req,res) {
	// console.log(programLanguages);

	// handlebars template had two properties  I am using two properties in res.send
	var title= '';
	var description= '';
	for(var language in programLanguages.programming) {
		console.log(language,req.body.data);
		if(language.toUpperCase() === req.body.data.toUpperCase()) {
			title=language
			description=programLanguages.programming[language].desc;
		}
	}
	// var title= req.body.data;
	// var description= programLanguages.programming[req.body.data].desc;


	res.send({title: title, description: description});
	

})


var server = app.listen(9392, function() {
	console.log('Express server listening on port ' + server.address().port);
});
