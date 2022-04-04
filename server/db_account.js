const mongoose = require('mongoose');

const Account = new mongoose.Schema({
    // Уч. запись для авторизации и регистрации
    login: {type:String, unique:true, required:true},
    password: {type:String, required:true},
    
    // Персональные данные
    family: {type:String, required:true},
    name: {type:String, required:true},
    fatherland: { type: String, required:true}, 
    group: { type: String, required:true}, 

    // Роль доступа, USER и ADMIN
    role_user: [{type:String, ref: 'Role'}] 
})

module.exports = mongoose.model('Account', Account)