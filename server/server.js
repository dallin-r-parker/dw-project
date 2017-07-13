require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var sendgrid = require('../sendgrid');

var port = 3030;


var app = express();
module.exports = app;
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'))

// MASSIVE //
// var massiveUri = 'postgres://srzdbsaf:RAFoSICBH1kFOZ6F-9cSNDwfQ7pdJHyx@babar.elephantsql.com:5432/srzdbsaf';
var massiveUri = process.env.DATABASE_URL
console.log(process.env)
// url = ENV["DATABASE_URL"]
var massiveServer = massive.connectSync({
    connectionString: massiveUri
});

app.set('db', massiveServer);
var db = app.get('db');
// ===== connect database
var dbCtrl = require('./dbCtrl');


// =========  post methods
app.post('/api/product', dbCtrl.addProduct);

// ========  get methods
app.get('/api/products', dbCtrl.getProducts);
app.get('/api/products/:id', dbCtrl.getProductById);
app.get('/api/classic', dbCtrl.getClassic);
app.get('/api/blkclassic', dbCtrl.getBlkClassic);
app.get('/api/dapclassic', dbCtrl.getDapClassic);
// ======  update methods






app.listen(port, function(){
    console.log('Successfully Listening on: ' + port);
})
