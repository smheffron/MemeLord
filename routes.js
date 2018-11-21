const express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Meme = require('./schemas/meme');

router.get('/', function(req, res) {
    res.render('login');
});

router.post('/login', function(req, res) {
    var credentials = req.body;
    
    if (!credentials.username || !credentials.password) {
        res.redirect('/');
    } else if (credentials.username === 'user' && credentials.password === 'pass') {
        res.redirect('/home');
    } else {
        console.log(credentials.username + '\n' + credentials.password);
        res.redirect('/');
    }
});

router.get('/home', function(req, res) {
    res.render('home');
});

router.get('/kings', function(req, res) {
    res.render('kings');
});

router.get('/browse', function(req, res) {
    var memeArray = new Array();
    var Memes = mongoose.model('Meme', Meme.memeSchema);
    var meme = new Memes({imageSrc:"/janet", category:"Cool Memes",title:"My Meme",likes: 12,comments: ["Hi", "Hello", "Cool"]}); 
    
    memeArray.push(meme);
    
    meme = new Memes({imageSrc:"/janet", category:"Bad Memes",title:"My Bad Meme",likes: 2,comments: ["What", "Whay", "How"]}); 
    
    memeArray.push(meme);
    
    res.render('browse', {memes:memeArray});
});

router.get('/category', function(req, res) {
    res.render('category');
});

module.exports = router;
