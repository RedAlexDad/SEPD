//          Маршрутизация

// Подключаем все заголовочные файлы и библиотеки
import Router from 'express'
import Post from './Post.js'

// Создаем экземпляр этого роутера
const router = new Router()

// Вызываем все функции

// Передаем маршрут, по которому posts будет обрабатываться
router.post('/request',
    async(req, res) => {
        try {
            // Передаем и сохраняем нашу структуру
            const { building, auditorium, discipline, schedule } = req.body
            const post = await Post.create({ building, auditorium, discipline, schedule })
            res.json(post)

        } catch (e) {
            res.status(500).json(e)
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


export default router