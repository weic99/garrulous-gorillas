var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());


app.get('/test', function(req, res) {
  res.send('TEST!');
});

//test work for sockets
app.get('/chatview', function(req, res) {
	res.send('/Debatechat');
})

app.listen(8080, function() {
  console.log('listening on port 8080!')
});

