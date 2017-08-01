const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
const users = require('./src/routes/users');
app.use('/users', users);

app.get('/test', function(req, res) {
  res.send('TEST!');
});

app.get('*', function(req, res) {
  res.send('You shouldn\'t be here...');
});

app.listen(8080, function() {
  console.log('listening on port 8080!')
});