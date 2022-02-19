const mongoose = require('mongoose');

const AccountDataFull = new mongoose.Schema({
    year_study: {type:Number, required:true},
    
    discipline: {type:String, required:true},
    cathedra: {type:Number, required:true},
    number_group: {type:Number, required:true},
    qualification: {type:String, required:true}

    //connect db_account with db_account_data_full by _id

    //create AccountDataFull automate generate _id
    //if Account is student
    //change AccountDataFull _id into _id of Account
    //id account is translater, won't create AccountDataFull
})