var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var http = require("http");
var router = require('./router');
var port = process.env.PORT || 5000;
var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/../frontend'));
app.use(express.static(__dirname + '/../'));
app.use('/node_modules',  express.static(__dirname + '/../node_modules'));

server.listen(port, function(req, res) {
    console.log('Progress-book listening on port 5000!');
});

router.init(app);