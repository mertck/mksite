var express = require('express');
var app = express();
var path = require('path');

app.use(express.json())

app.get('/about', function(req, res) {
	console.log('requested about page');
    res.filesend('about.html');
});

app.get('/nice', function(req, res) {
	console.log('requested nice page');
    res.filesend('nice.html');
});

app.post('/login', function(req,res){
  var user=req.body.user;
  console.log("Favorite Drink = "+user);
  res.send(JSON.stringify("got Favorite Drink"));
});

app.post('/comment', function(req,res){
  var user=req.body.name;
  console.log("Enter your Name"+name);
  res.send(JSON.stringify("NAME IS: "));
});

app.post('/comment', function(req,res){
  var user=req.body.email;
  console.log("Enter your Email"+email);
  res.send(JSON.stringify("EMAIL IS: "));
});

app.post('/comment', function(req,res){
  var user=req.body.comment;
  console.log("Enter your Comment"+comment);
  res.send(JSON.stringify("COMMENT IS: "));
});


app.get('/', function(req, res) {
	console.log('requested index page');
    res.sendfile('index.html');
});

app.get('*', function(req, res) {
	console.log('requested index page');
    res.end('<h1><font color="red">Congratulations you played yourself</font></h1>');
});


app.listen(8080);
