//          Маршрутизация

// Подключаем все заголовочные файлы и библиотеки
import Router from 'express'
import Post from './Post.js'

// Создаем экземпляр этого роутера
const router = new Router()

// Вызываем все функции

// Передаем маршрут, по которому posts будет обрабатываться
router.post('/posts',
    async(req, res) => {
        try {
            // Передаем и сохраняем нашу структуру
            // const { author, title, content, picture } = req.body
            const { building, auditorium, discipline, schedule } = req.body
                // const post = await Post.create({ author, title, content, picture })
            const post = await Post.create({ building, auditorium, discipline, schedule })
            res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }
    })


// Создадим маршрут для каждой операции
router.get('/posts')

// Операция запроса получения всех постов
router.get('/posts/:id')

// Операция для обновления
router.put('/posts')

// Созданные маршрутизации удаляем
router.delete('/posts/:id')


export default router