const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

// Подключение к роутеру
app.use('/api/auth/request', require('./routes/request.routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try {
        // Подключение к БД mongoDB
        await mongoose.connect(config.get('mongoURI')), {
        // Чтобы передавать в connect
        useNewUrlParser: true,
        // Для того, чтобы connect успешно работал
        useUnifiedTopology: true,
        useCreateIndex: true
        }
        // Печать
        app.listen(PORT, () => {
            console.log(`Server had been started in ${PORT}`);
        })
    }
    catch (error) {
        console.log(`Server is error`, e.message);
        process.exit(1);
    }
}

// Вызов функции для выполнения работ
start();

// app.listen(PORT, () => {
//     console.log(`Server had been started in ${PORT}`);
// })