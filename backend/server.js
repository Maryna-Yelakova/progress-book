'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var router = require('./router');

var app = express();

var port = process.env.PORT || 8000;


// get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../build'));
app.use('/', router);


app.listen(port, function(req, res) {
    console.log('Progress-book listening on port 8000!');
});
