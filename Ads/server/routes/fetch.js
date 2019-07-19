var express = require('express');
var Ads = require('../models/ad');
var router = express.Router();

var img;
router.get('/', (req, res) => {
    Ads.find({}).then((ads) => {
        res.json(ads);
        // res.json(ads[0].image);
    }, (err) => {
        throw err;
    });
});

router.get('/:name', (req, res) => {
    var name = req.params.name;
    Ads.find({ productDetails: name }).then((ads) => {
        res.json(ads);
    }, (err) => {
        throw err;
    });
});

module.exports = router;