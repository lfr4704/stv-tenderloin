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


console.log("server is running");

app.post('/submitVolunteer', (request, result) => {
    
    console.log("Recieved Volunteer Info");
    
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

app.post('/submitDonation', (request,result) => {
    
    var dollars = fs.readFileSync ('database.json', 'utf8');
    var file = JSON.parse(dollars);
    file.donations.push(request.body);
    var dList = "";
    
    for (var i = 0; i < file.donations.length; i++) {
        
        dList += "Donation " + (i +1) + "\n";
        dList += file.donations[i].otherInput + "\n";
        dList += file.donations[i].donationName + "\n";
        dList += file.donations[i].donationEmail + "\n\n";
        
    }
    
    fs.writeFileSync('readableDonations.txt', dList);
    
    file = JSON.stringify(file);
    
    fs.writeFileSync('database.json', file);

});

