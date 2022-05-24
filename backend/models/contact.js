const mongoose = require('mongoose');


const conatctShema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    subject : String,
    message : String,
});


const contact = mongoose.model('contact', conatctShema);

module.exports = contact ;