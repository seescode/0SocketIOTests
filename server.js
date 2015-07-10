var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
	res.send("hello world 2");	
});

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('chatty', 'a user connected');
  
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chatty', msg);
  });
 
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

