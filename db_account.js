const mongoose = require('mongoose');

const Account = new mongoose.Schema({
    // id: {type:Number, required:true},
    login: {type:String, required:true},
    password: {type:String, required:true}
})

module.exports = mongoose.model('Account', Account)