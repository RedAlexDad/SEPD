/* 
Небольшая памятка:

1. Если порт некорректно работает
    Нужно Поменяnm другой порт, например, вместо 5000 на 5100

2. Если nodemon некорректно работает, тогда переходите к решению 1 пункта.

3. Если выведет такую ошикбу "is declared but its value is never read.ts(6133)"
    Нужно вызывать функцию, например, 
    function name(параметры функции){тело функции}
    Вызываем фукнцию
    name()

4. Кроме того, JSON не поддерживает комментарии. Добавление комментария в JSON делает его недействительным.

*/

// console.log('SERVER WORKING!!!')

// Подключение фреймвора из папки JSON
import express, { Router } from 'express'
// Связывание через HTML на JS
// const express = require('express')
import mongoose from 'mongoose'

// Для второго и третьего теста
// import Post from "./Post.js"

import router from "./router.js"

// Номер порта интернета, через которого мы подключаем http://localhost:PORT
const PORT = 5000;

// Ссылка на БД
// const DB_URL = `mongodb+srv://user:user@cluster0.xc44o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// Вторая БД
const DB_URL = `mongodb+srv://upsp:upsp@cluster0.rzz3o.mongodb.net/UPSP?retryWrites=true&w=majority`

// Вызываем функцию express()
const app = express()

// res.status(КОД) - Список кодов состояния HTTP
// 200 - Все хорошо
// https://ru.wikipedia.org/wiki/Список_кодов_состояния_HTTP

// json('ТЕКСТ') - Печать на сайте

// Первый тест, через прямого запуска в браузер 
/* app.get('/', (req, res) => {
    // Поисковская строка параметры, т.е поисковские header, (заголовки, http://localhost:5100/ЗАГОЛОВОК)
    // Примечание: после / нужно ставить вопросительный знак, т.е ?
    // Далее на консольном окне выведет сообщение название заголовка
    // localhost:PORT/?HEADER&first&second&tree..., & разделяет несколько параметров
    // req.query - заголовки, .test - параметры, стоящие после =
    // localhost:PORT/?header=123456789, в КО { header: '123456789' }
    console.log(req.query);
    console.log(req.query.test);

    res.status(200).json('Server is working')
}) */

// Для отображения лога в КО, т.е undefined (для второго теста и более)
app.use(express.json())

// Маршрутизация
app.use('/api', router)

// Второй тест, через postman
/* app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('Server is working')
}) */

// Третий тест, через postman c структурой post в БД MongoDB
/* app.post('/', async(req, res) => {
    try {
        // Передаем и сохраняем нашу структуру
        const { author, title, content, picture } = req.body
            const post = await Post.create({ author, title, content, picture })
            // const post = await Post.create({ building, auditorium, discipline, schedule })
        res.json(post)

    } catch (e) {
        res.status(500).json(e)
    }
}) */

// Четвертый тест, через маршрутизации, т.е Router
// см в файле ../Router.js
// Ссылкой теперь будет http://localhost:POST/api/posts

// Передача данных в БД, MongoDB
/* У слова async один простой смысл: эта функция всегда возвращает промис. 
Значения других типов оборачиваются в завершившийся успешно промис автоматически. */
async function startApp() {
    try {
        // await - асихронная функция, mogoose.connect - подключение к БД
        // useUnifiedTopology, useNewUrlParser - конфигурация 
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }

}

startApp()

// Включаем (вызываем функцию) startApp либо сделать распечатку КО с помощью app.listen
// app.listen(PORT, () => console.log('SERVER SECOND STARTED ON PORT ' + PORT))