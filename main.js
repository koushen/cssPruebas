var express = require("express");

var app = express()
  , http = require('http')
  , server = http.createServer(app);

var PORT = process.env.PORT || 8080;
server.listen(PORT, function (){
	console.log("listening on port " + PORT)
});


//app.configure (function () {
//	app.set('view options', {
//		layout: false
//	});	
//});

app.configure (function () {	
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function (request,response){
	response.render('main.jade');
	
});


