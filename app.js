// Подключение фреймвора из папки JSON
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

// Подключение к роутеру
app.use('/api/auth/request', require('./routes/request.routes'));

const PORT = config.get('port') || 5000;

const router = require('./routes/request.routes.js');

// const DB_URL = `mongodb+srv://upsp:upsp@cluster0.rzz3o.mongodb.net/UPSP?retryWrites=true&w=majority`

// Для отображения лога в КО, т.е undefined (для второго теста и более)
app.use(express.json())

// Маршрутизация
app.use('/api', router)

// Передача данных в БД, MongoDB
/* У слова async один простой смысл: эта функция всегда возвращает промис. 
Значения других типов оборачиваются в завершившийся успешно промис автоматически. */
async function start() {
    try {
        // Подключение к БД mongoDB
        await mongoose.connect(config.get('mongoURI')), {
        // await mongoose.connect(DB_URL), {
            
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