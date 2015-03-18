var express = require('express');
var app 		= express();
var path 		= require('path');


// static resources
app.use(express.static(__dirname + '/public'));

// all routes and serve index
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(8080);
console.log('Express listening on 8080');