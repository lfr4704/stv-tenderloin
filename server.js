const fs = require('fs');
const express = require('express');
let bodyParser = require('body-parser'); //this helps understand object thru jason from the front end
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//express routes
app.use('/client', express.static('client'));
app.use('/js', express.static('client/js'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
http.listen(8080);

console.log("server is running");