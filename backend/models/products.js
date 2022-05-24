const mongoose = require('mongoose');


const productShema = mongoose.Schema({
    productName : String,
    price : Number,
    quantity : Number,
    mark : String,
    description : String,
    img : String,
    idEmp : String
});


const product = mongoose.model('product', productShema);

module.exports = product ;