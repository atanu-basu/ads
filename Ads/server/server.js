var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');


mongoose.Promise = global.Promise;
var connectionOption = {
    useNewUrlParser: true,
    useFindAndModify: false
};
mongoose.connect('mongodb://localhost:27017/ads', connectionOption, () => {
    console.log('connected to mongodb');
});
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
var create = require('./routes/create');
app.use('/api/areacode/storename/offers/create', create);

var fetch = require('./routes/fetch');
app.use('/api/areacode/storename/offers/fetch', fetch);

app.listen(8080, () => console.log('server running on port 8080'));