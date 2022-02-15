const express = require('express');
const path = require('path');
const app = express();

// Использует клиентские стороны
app.use(express.static(path.resolve(__dirname, 'client')));

// Подключение к html серверу
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

// Номер порта
const PORT = 5000;

// Введите npm run dev
// Чтобы запустить сервер

// Печать на консольное окно
app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`));