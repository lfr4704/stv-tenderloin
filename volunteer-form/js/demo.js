var fs = require('fs')

var data = {
    name: 'Bob'
}

fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log('write finished', err)
    
})


//fs.readdir('/', (err, data) => {
//    console.log(data)
//});


//var data = require('../data.json')
//
//console.log(data.name)
//
//fs.readFile('../data.json', 'utf-8', (err,data) => {
//    var data = JSON.parse(data)
//    console.log(data.name)
//})
//

//fs.readFile('../data.json', 'utf-8' function(err, data) => {
//    var data = JSON.parse(data)
//    console.log(data.name)
