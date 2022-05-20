// Подключение фреймвора из папки JSON
const express = require('express');
const {mongoose} = require('mongoose');
const user = require("./user.js");

const app = express();

const PORT = 5000;
const hostname = '127.0.0.1';

const router = require('./router.js');

const mongoURI = "mongodb+srv://upsp:upsp@cluster0.rzz3o.mongodb.net/UPSP?retryWrites=true&w=majority"

app.use(express.json())

app.use('/api', router)

async function start() {
    try {
        await mongoose.connect(mongoURI), {
            
        // Чтобы передавать в connect
        useNewUrlParser: true,
        // Для того, чтобы connect успешно работал
        useUnifiedTopology: true,
        useCreateIndex: true
        }
        // Печать
        app.listen(PORT, hostname, () => {
            console.log(`Server running at http://${hostname}:${PORT}/`);
        })
    }
    catch (error) {
        console.log(`Server is error`, error.message);
        process.exit(1);
    }
}



start();
