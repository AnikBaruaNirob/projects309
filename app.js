var express = require('express');
var app = express(); //server requur
var loginController = require('./controller/loginController');

app.set('view engine','ejs'); //convert ejs
app.use(express.static('./public')); //url insert
loginController(app);//
app.listen(3000);