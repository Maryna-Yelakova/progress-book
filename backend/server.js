'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./router');

const app = express();

const PORT = process.env.PORT || 8000;

// get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../build'));
app.use('/', router);


app.listen(PORT, function() {
    console.log('Example app listening on port', PORT);
});