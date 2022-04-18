// Подключение фреймвора из папки JSON
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

// Подключение к роутеру
// app.use('/api/auth/regist', require('./routes/auth.routes.js'));
// или так

// app.use('/auth', require('./routes/router.js'));
// app.use('/api', require('./routes/request.routes.js'));

const PORT = config.get('port') || 5000;

// Маршрутизация
// const router = require('./routes/request.routes.js');
const router = require('./routes/router.js');
// const router_request = require('./routes/request.routes.js');
// app.use('/api/auth', router)

// const DB_URL = `mongodb+srv://upsp:upsp@cluster0.rzz3o.mongodb.net/UPSP?retryWrites=true&w=majority`


// Для отображения лога в КО, т.е undefined (для второго теста и более)
app.use(express.json())

// Для авторизации и регистрации
app.use('/api/auth', router)

// 31.03.2022г.
// MongoDB оказался под санкцией, поэтому вместо
// "server": "nodemon app.js",
// заменяем на 
// "server": "json-server client/src/data/database.json --watch  --port 5000",


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
        console.log(`Server is error`, error.message);
        process.exit(1);
    }
}

// Вызов функции для выполнения работ
start();