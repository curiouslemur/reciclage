var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyparser = require ('body-parser');
var serveStatic = require('serve-static');
const kafka = require('./js/kafkanode-service');

app.get('/', function(req, res){ res.sendFile(__dirname + '/index.html')});
app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({ extended: true }));   // parse application/x-www-form-urlencoded
app.use(bodyparser.json());

http.listen(3000, function(){
    console.log('listening on *:3000');
});

process.stdin.setEncoding('ascii');

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    process.stdin.on('data', function(data){
        socket.emit('message-local', data);
    })
    consumer.on('message', function(msg){
        // console.log(msg)
        // socket.emit('message-remote', msg.value)
        socket.emit('message-remote', msg)
    })
});
