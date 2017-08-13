require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');


const app = module.exports = express();
app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'))

// MASSIVE //
// const massiveUri = 'postgres://srzdbsaf:RAFoSICBH1kFOZ6F-9cSNDwfQ7pdJHyx@babar.elephantsql.com:5432/srzdbsaf';
const massiveUri = "postgres://yhskvjpjuswifs:b586792a5ee880b54abe08f7dacf88131dbbc2a0b2c14a08ed9695aea8e1aa40@ec2-23-21-224-199.compute-1.amazonaws.com:5432/dem051v1g3khma?ssl=true"
const massiveServer = massive.connectSync({
    connectionString: massiveUri
});

app.set('db', massiveServer);
const db = app.get('db');
// ===== connect database
const dbCtrl = require('./dbCtrl');


// =========  post methods
app.post('/api/product', dbCtrl.addProduct);

// ========  get methods
app.get('/api/products', dbCtrl.getProducts);
app.get('/api/products/:id', dbCtrl.getProductById);
app.get('/api/classic', dbCtrl.getClassic);
app.get('/api/blkclassic', dbCtrl.getBlkClassic);
app.get('/api/dapclassic', dbCtrl.getDapClassic);
// ======  update methods







app.listen(app.get('port'), () => {
	console.log('listening on: ', app.get('port'))
})