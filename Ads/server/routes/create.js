var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var Ads = require('../models/ad');

const storageProperties = multer.diskStorage({
    destination : path.join(__dirname+'\\..\\public\\files'),
    filename: function (req, file, fn) {
        fn(null, file.originalname);
    }
});
const upload = multer({
    storage: storageProperties,
    limits: { fileSize : 200000 },
    fileFilter: function (req, file, cb) {
        validateFile(file, cb);
      }
}).single('image');

var validateFile = function(file, cb ){
    const extname = /jpeg|jpg|png|gif/;
    const extension = extname.test(path.extname(file.originalname).toLowerCase());
    const mimeType  = extname.test(file.mimetype);
    if(extension && mimeType){
      return cb(null, true);
    }else{
      cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
    }
  };


router.post('/', upload,(req,res) => {
    var { productDetails, offerDetails, expireDate } = req.body;
    var fullPath = req.file.originalname;
    upload(req,res, function(err) {
        if(!err){
            console.log('Success');
        }
    });

    var document = {
        productDetails: productDetails,
        offerDetails: offerDetails,
        expireDate: expireDate,
        image: fullPath
    };
    var ad = new Ads(document);
    ad.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        throw err;
    });
});

module.exports = router;