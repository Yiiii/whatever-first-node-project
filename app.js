
// var http = require('http');

// // console.log(http);

// var port = 9000;

// var serverUpCallback= function(){
// 	console.log("server is running at port" + port);
// }
// var requestHandler = function(req, res){
// console.log(req.url);
// if(req.url === "/comments"){
// 	res.end("You are in the comments section!");
// } else if (req.url==="/photos"){
// res.end("check out these photos!");
// } else {
// res.end("I, server, have recieved the msg, client!");
// }
// }

// var server = http.createServer(requestHandler);

// server.listen(port,"127.0.0.1",serverUpCallback);

//==================
var express = require('express');
var app = express();
var http = require('http').Server(app);

var requestHandler = function(req, res){
	// res.send('<h1>I the server have def recieved the msg</h1>');
// 	res.sendFile('/Users/Yi/Documents/Work in Process/whatever first node project/public/index.html');
res.sendFile(__dirname+'/index.html');
 };

var photoRequestHandler =function(req,res){
res.sendFile(__dirname+'/public/photo1.html');
}
var photoRequestHandler2 =function(req,res){
res.sendFile(__dirname+'/public/photo2.html');
res.sendFile(__dirname+'/public/1.jpg');
}
var photoRequestHandler3 =function(req,res){
res.sendFile(__dirname+'/public/photo3.html');
}
var photoRequestHandler4 =function(req,res){
res.sendFile(__dirname+'/public/photo4.html');
}
var photoRequestHandler5 =function(req,res){
res.sendFile(__dirname+'/public/photo5.html');
}

var servePage= function(url){
	app.get (rul,requestHandler);
}

app.get('/',requestHandler);
app.get('/photo1',photoRequestHandler);
app.get('/photo2',photoRequestHandler2);
app.get('/photo3',photoRequestHandler3);
app.get('/photo4',photoRequestHandler4);
app.get('/photo5',photoRequestHandler5);

app.use('/', express.static(__dirname + '/public'));

var port = 9000;

var serverUpCallback= function(){
	console.log("server is running at port" + port);
}

http.listen(port,"127.0.0.1",serverUpCallback);
