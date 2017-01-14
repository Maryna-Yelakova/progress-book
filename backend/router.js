var express    = require('express');
var path = require('path');
//var apiPreff = "/api";

// var db = require('./connectiondb');

var router = {
    init: function init(app) {
        // app.get(apiPreff + "/subjects", function(req, res) {
        //     games.getPlayers().then(function(data) {
        //         res.status(200).send(data);
        //     }).catch(function(error) {
        //         res.status(500).send(error);
        //     });
        // });
        //
        app.get('*', function(req, res) {
            res.status(200).sendFile(path.resolve('index.html'));
        });
    }
};

module.exports = router;
