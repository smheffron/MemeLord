const express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Meme = require('./schemas/meme');

var fs = require('fs');

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
    Meme.find(function(err, response) {
        if (err) {
            // render with error
            console.log(err);
            res.render('browse');
        } else {
            res.render('browse', {
                memes: response
            });
        }
    });
});

router.get('/category', function(req, res) {
    res.render('category');
});

router.post('/upload', function(req, res) {
    var file = req.files.memeFile;
    var fileName = Date.now() + '-' + file.name;
    var path = __dirname + '/memeUploads/' + fileName;
    
    file.mv(path, function(err) {
        if(err) {
            // redirect with error
            console.log(err);
            res.redirect('/browse');
        } else {
            var newMeme = req.body;
            
            var meme = new Meme({
                imageSrc: fileName,
                category: newMeme.category,
                title: newMeme.title,
                likes: 0,
                comments: [],
                created: Date.now()
            });
            
            meme.save();
            
            res.redirect('/browse');
        }
    });
});

module.exports = router;
