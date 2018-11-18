const express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

router.get('/', function(req, res) {
    var pizza = [1, 2, 3];
    res.render('hello', pizza);
});

module.exports = router;
