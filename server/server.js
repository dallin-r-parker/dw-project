var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var port = 3030;

var app = express();
module.exports = app;
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'))

// MASSIVE //
var massiveUri = 'postgres://localhost/dw_products';
var massiveServer = massive.connectSync({
    connectionString: massiveUri
});

app.set('db', massiveServer);
var db = app.get('db');
var dbCtrl = require('./dbCtrl');


// =========  post methods
app.post('/api/product', dbCtrl.addProduct);

// ========  get methods
app.get('/api/products', dbCtrl.getProducts);

// ======  update methods










app.listen(port, function(){
    console.log('Successfully Listening on: ' + port);
})