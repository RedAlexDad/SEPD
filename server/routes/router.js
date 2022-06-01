const Router = require('express');
const mongoose = require('mongoose');
// const AccountController = require('../models/account_controller.js');
const authController = require('./authController.js')
const {check} = require('express-validator');
const { login } = require('./authController.js');
// const authMiddleware = require("../middlewaree/authMiddleware.js")
const roleMiddleware = require("../middlewaree/roleMiddleware.js")

// Получение и отправки запроса
const requestBuilding = require('./request.routes.js')
const { request } = require('./request.routes.js')
const database = require('../database/database.js')

const router = new Router();

router.post('/regist',
 [
    // check('login', "Имя пользоватьеля не может быть пустым").notEmpty,
    check('password', "Пароль должен быть больше 8 и меньше 12 символов").isLength({min:8, max:12})
], 
authController.registration)

router.post('/login', authController.login)

// Получение данные: ФИО и бронирования
router.get("/getInfoAll", database.getInfoAll)

router.get("/getInfoName", database.getInfoName)

// Получение данные запросы для студентов, сурдопереводчиков и админа

router.post("/getInfoFIO_student", database.getInfoFIO_student)

// Также закрепить запросы у себя для сурдопереводчиков
router.post("/getInfoFIO_translator", database.getInfoFIO_translator)

router.get("/getInfoNumReq", database.getInfoNumReq)

// Для подачи и получения заявок и обработка запроса
// 
// /api/request
router.post('/request', requestBuilding.request)

// Создадим маршрут для каждой операции
router.get('/request')

// Операция запроса получения всех постов
router.get('/request/:id')

// Изменение статуса запроса (принято/отклонено)
router.put('/request/:id', requestBuilding.update)

// Созданные маршрутизации удаляем
router.delete('/request/:id', requestBuilding.delete)

// router.get('/accounts', roleMiddleware(["USER"]), authController.getUsers)
router.get('/accounts', authController.getUsers)

// router.get('/accounts/:id', AccountController.getOne)
// router.put('/accounts/:id', AccountController.update)
//
// router.put('/accounts/update/:id', AccountController.updateFirstName)
// router.put('/accounts/update/:id', AccountController.updateSecondName)
// router.put('/accounts/update/:id', AccountController.updateThirdName)
//
// router.delete('/accounts/:id', AccountController.delete)

module.exports = router;