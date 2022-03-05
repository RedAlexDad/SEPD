//          Маршрутизация

const { Router } = require('express');
const user = require('../models/user');
// const Post = require('../models/post.js');
const router = new Router();

// Обработка запроса
// /api/request
router.post('/request', 
    async(req, res) => {
        try {
            // console.log('Body: ', req.body);
            // Передаем и сохраняем нашу структуру
            const{building, auditorium, discipline, shedule} = req.body;
            console.log("body: ", building, auditorium, discipline, shedule);
            const post = await user.create({ building, auditorium, discipline, shedule })
            res.json(post)
            console.log(post)


        } catch (error) {
            res.status(500).json({ message: 'ERROR! Проверьте!' });
            console.log("ERROR! Проверьте!");
        }
})

// Создадим маршрут для каждой операции
router.get('/request')

// Операция запроса получения всех постов
router.get('/request/:id')

// Операция для обновления
router.put('/request')

// Созданные маршрутизации удаляем
router.delete('/request/:id')

module.exports = router;