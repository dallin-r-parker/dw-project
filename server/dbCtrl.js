var app = require('./server.js') //<-- this is express
var db = app.get('db');

module.exports = {

    addProduct: function (req, res, next) {
        var product = req.body
        db.add_product([product.category, product.name, product.price, product.silver_img, product.gold_img, product.size], function(error, product) {
            console.log(error, product);
            res.send('product added')
        })
    },

    getProducts: function (req, res, next) {
        db.get_products(function (error, products) {
        console.log(error, products);
        res.send(products);
         })

    },

    getClassic: function (req, res, next) {
        db.get_classic(function (error, products) {
            console.log(error, products);
            res.send(products)
        })
    },

    getBlkClassic: function (req, res, next) {
        db.get_blk_classic(function (error, products) {
            console.log(error, products);
            res.send(products)
        })
    },

    getDapClassic: function (req, res, next) {
        db.get_dap_watch(function (error, products) {
            console.log(error, products);
            res.send(products)
        })
    }


} //<-- end of export