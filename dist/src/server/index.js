'use strict';

/*
* Dependencias
*/

var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var port = 8082;
var app = express();

var server = http.createServer(app);

app.use(express.static('public'));

server.listen(port, function () {
    console.log("Sever is running on port: " + port);
});