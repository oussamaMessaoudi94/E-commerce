const mongoose = require('mongoose');


const checkoutShema = mongoose.Schema({
    fName : String,
    lName : String,
    country : String,
    adress : String,
    phone : Number,
    aEmail : String,
    note : String,
    poste : String,
    idEmpl : String

});


const checkout = mongoose.model('checkout', checkoutShema);

module.exports = checkout ;