var express = require('express');
var router = express.Router();
var path = require('path');

router.use(function(req, res, next) {
    console.log('request to', req.path);
    next();
});

router.get('*', function(req, res) {
    res.status(200).sendFile(path.resolve('index.html'));
});

module.exports = router;
