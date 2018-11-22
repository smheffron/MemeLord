const express = require('express');
const app = express();

const http = require("http");
// const https = require("https");
// var fs = require("fs");
// const options = {
//     key: fs.readFileSync("/home/rmfvg5/server/encryption/server.key"),
//     cert: fs.readFileSync("/home/rmfvg5/server/encryption/ryanfilkins.site.crt"),
//     ca: fs.readFileSync("/home/rmfvg5/server/encryption/intermediate.crt")
// };

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

var routes = require('./routes.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mu_grade_dist', {useNewUrlParser: true}).catch(function(error){
    console.log("Error connecting to MongoDB: " + error);
});

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(upload.array());

app.use('/', routes);

app.use('/scripts', express.static(__dirname + '/scripts'));

app.use('/styles', express.static(__dirname + '/styles'));

app.use('/memeUploads', express.static(__dirname + '/memeUploads'));

http.createServer(app).listen(7000);
