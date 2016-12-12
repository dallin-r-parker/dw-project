var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var sendgrid = require('../sendgrid');

var port = 3030;

////////// Send Grid
var helper = require('sendgrid').mail;
var from_email = new helper.Email('danielwellington@onlinestore.com');
var to_email = new helper.Email('dallin.r.parker@gmail.com');
var subject = 'Thank You For Your Order!';
var content = new helper.Content('text/plain', 'Hello, Dallin! thank you for your order');
var mail = new helper.Mail(from_email, subject, to_email, content);
/////////

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





var sg = require('sendgrid')(sendgrid.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
});

sg.API(request, function(error, response) {
    // console.log(response.statusCode);
    // console.log(response.body);
    // console.log(response.headers);
});






app.listen(port, function(){
    console.log('Successfully Listening on: ' + port);
})
