const mongoose = require('mongoose');

const Account = new mongoose.Schema({
    login: {type:String, required:true},
    password: {type:String, required:true},

    first_name: {type:String, required:true},
    second_name: {type:String, required:true},
    third_name: {type:String, required:true}, 

    type_user: {type:Number, required:true}, 
})

module.exports = mongoose.model('Account', Account)