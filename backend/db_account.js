const mongoose = require('mongoose');

const Account = new mongoose.Schema({
    login: {type:String, unique:true, required:true},
    password: {type:String, required:true},

    // first_name: {type:String, required:true},
    // second_name: {type:String, required:true},
    // third_name: {type:String, required:true}, 

    role_user: [{type:String, ref: 'Role'}] 
})

module.exports = mongoose.model('Account', Account)