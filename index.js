// import express from 'express'
const express = require('express');
const mongoose = require('mongoose');
const router= require('./router.js'); 

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.i1cpn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser:true});
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();
