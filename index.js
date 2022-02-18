const express = require('express');
const router = require('./router.js');
const mongoose = require('mongoose');

const PORT= 3000;
const db_url = 'mongodb+srv://user:user@cluster0.i1cpn.mongodb.net/Accounts?retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp(){
    try {
        mongoose.connect(db_url, {useUnifiedTopology:true, useNewUrlParser:true});
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();