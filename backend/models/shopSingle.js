const mongoose = require('mongoose');


const shopSchema = mongoose.Schema({
    img : String,
    numberShop : Number,
    productName : String,
    price : Number,
    idProd: String,
    somme:Number,
    idEmp: String,
});

const shop = mongoose.model('shop', shopSchema)

module.exports = shop ;