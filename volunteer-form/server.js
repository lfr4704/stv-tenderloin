const fs = require('fs');
const express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//MongoDB Stuff
var mongoose = require('mongoose');
var dbUrl = 'mongodb://maguhob:fishmen_5@ds247449.mlab.com:47449/stvvolunteer';

mongoose.connect(url, function(error){
   if(error) {
       console.log("Error! connecting to MongoDB >" + error)
   } else{
        console.log("Connected to MongoDB database :)")
   } 
});

var Message = mongoose.model('Message', {
    notes: String,                     
    message: String
});

var messages = [
    { name : 'Minda', message: 'Test'},
    { name : 'Jane', message: ' Test'},
]

// Express 'Routes' - using express to route URLs
app.use('/client', express.static('client/'));
app.use('/js', express.static('client/js'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
http.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started"); 
});

app.get('/getNotes', function(req, res) => {
    Message.find({}, (err, messages) +> {
        res.send(messages)
        
    })
});

app.post('/submitNote', function(request, result){
    var message = new Message(req.body)
    
    message.save((err) => {
        if (err)
            sendStatus(500)
    
        messages.push(req.body)
        io.emit('message', req.body)
        res.sendStatus(200)
    })
});

io.on('connection', (socket) => {
    console.log('a user connected')
})