const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

// Подключение фреймвора из папки JSON
// import express, { Router } from 'express'
// import config from 'config';
// import mongoose from 'mongoose';

// import router from "./routes/request.routes.js";

const app = express();

// import router from "./routes/request.routes.js";

// Подключение к роутеру
// app.use('/api/auth/request', require('./routes/request.routes'));

const PORT = config.get('port') || 5000;

const router = require('./routes/request.routes.js');

// Для отображения лога в КО, т.е undefined (для второго теста и более)
app.use(express.json())

// Маршрутизация
app.use('/api', router)

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