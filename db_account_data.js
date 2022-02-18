const mongoose = require('mongoose');

const AccountData = new mongoose.Schema({
    first_name: {type:String, required:true},
    second_name: {type:String, required:true},
    third_name: {type:String, required:true},

    type_user: {type:Number, required:true},

    //connect db_account with db_account_data with _id

    //create AccountData where automate generate _id
    //change automate generate _id into _id create Account, using PUT in Postman
})