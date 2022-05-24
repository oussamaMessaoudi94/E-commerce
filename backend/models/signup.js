const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userShema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {type: String, unique:true},
    password : String,
    tel : String
});

userShema.plugin(uniqueValidator);

const user = mongoose.model('user', userShema);

module.exports = user ;