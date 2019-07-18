const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adsSchema = new Schema({
    productDetails: String,
    offerDetails: String,
    expireDate: String,
    image: String
});

module.exports = mongoose.model('Ads', adsSchema);