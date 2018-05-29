const fs = require('fs');
var nodemailer = require('nodemailer');
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

app.post('/submitVolunteer', (request, result) => {
    
    var text = fs.readFileSync('database.json', 'utf8');

    var master = JSON.parse(text);
    
    master.volunteers.push(request.body);
    
    var vList = "";
    
    for (var i = 0; i < master.volunteers.length; i++) {
        
        vList += "Volunteer " + (i + 1) + "\n";
        vList += master.volunteers[i].name + "\n";
        vList += master.volunteers[i].email + "\n";
        vList += master.volunteers[i].address + "\n\n";
        
    }
    
    fs.writeFileSync('readableVolunteers.txt', vList);
    
    master = JSON.stringify(master);
    
    fs.writeFileSync('database.json', master);
    
});