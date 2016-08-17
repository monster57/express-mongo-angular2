var express = require('express');
var router = express.Router();
var Cat = require('../models/user');

/* GET home page. */


router.get('/cats', function(req, res) {
    Cat.find({}, function(err, docs) {
        if(err) return console.error(err);
        res.json(docs);
    });
});

// count all
router.get('/cats/count', function(req, res) {
    Cat.count(function(err, count) {
        if(err) return console.error(err);
        res.json(count);
    });
});

// create
router.post('/cat', function(req, res) {
    var obj = new Cat(req.body);
    obj.save(function(err, obj) {
        if(err) return console.error(err);
        res.status(200).json(obj);
    });
});

// find by id
router.get('/cat/:id', function(req, res) {
    Cat.findOne({_id: req.params.id}, function (err, obj) {
        if(err) return console.error(err);
        res.json(obj);
    })
});

// update by id
router.put('/cat/:id', function(req, res) {
    Cat.findOneAndUpdate({_id: req.params.id}, req.body, function (err) {
        if(err) return console.error(err);
        res.sendStatus(200);
    })
});

// delete by id
router.delete('/cat/:id', function(req, res) {
    Cat.findOneAndRemove({_id: req.params.id}, function(err) {
        if(err) return console.error(err);
        res.sendStatus(200);
    });
});


// all other routes are handled by Angular
router.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


module.exports = router;
