//Simple online shop created using NodeJS
//THIS ISNT INTENDED TO BE USED IN REAL LIFE MORE OF JUST A PEICE OF CODE I AM WORKING ON IF YOU USE THIS I AM NOT RESPONSIBLE FOR ANY DAMAGES CAUSED
//Created by Will Richardson (ObviouslyNotTop)
const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./html/index.html', function(error, data){
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else{
            res.write(data)
        }
        res.end()
    })
});
server.listen(80, function(){
    console.log('Listening on port... ' + port)
})