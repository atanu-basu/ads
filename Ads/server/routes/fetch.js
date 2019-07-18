var express = require('express');
var Ads = require('../models/ad');
var router = express.Router();

var img;
router.get('/' ,(req,res) => {
    Ads.find({}).then((ads) => {
       res.json(ads);
    }, (err) => {
        throw err;
    });
});
router.get('/img' ,(req,res) => {
    Ads.find({}).then((ads) => {
       img = ads.image;
       res.send(img);
    }, (err) => {
        throw err;
    });
});

router.get('/:name', (req,res) => {
        var name = req.params.name;
        Ads.find({productDetails: name}).then((ads) => {
            res.json(ads);
        }, (err) => {
            throw err;
        });
});

module.exports = router;