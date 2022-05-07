//          Маршрутизация

const { Router } = require("express");
const User = require("../models/full_db");
const authController = require("./authController.js");
// const user = require("../models/man");
// const Post = require('../models/post.js');
const router = new Router();

// Обработка запроса
// /api/request
class requestBuilding {
  async request(req, res) {
    try {
      // Передаем и сохраняем нашу структуру
      const {
        _id,
        post_user,

        family,
        name,
        fatherland,
        group,

        id_request,
        number_request,

        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      } = req.body;

      // Получение ID пользователя
      // const ID_user = await User.findOne({ name }, {_id: true});
      // console.log("ID_user: ", ID_user);

      // console.log("body: ", req.body);
      const post = await User.create({
        _id,
        post_user,
        
        family,
        name,
        fatherland,
        group,

        id_request,
        number_request,

        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      });

      res.json(post);
      console.log(post);
      // console.log(post._id);
    } catch (error) {
      res.status(500).json({
        message: "ERROR! Проверьте! Тип ошибка: ",
        error: error.message,
      });
      console.log("ERROR! Проверьте!");
      console.log("Тип ошибка: ", error.message);
    }
  }

  async update(req, res) {
    try {
      // Передаем и сохраняем нашу структуру
      const {
        _id,

        family,
        name,
        fatherland,
        group,

        id_request,
        number_request,

        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      } = req.body;

      const post = await User.create({
        _id,

        family,
        name,
        fatherland,
        group,

        id_request,
        number_request,

        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      });

      res.json(post);
      console.log(post);
      // console.log(post._id);
      
    } catch (error) {
      res.status(500).json({
        message: "ERROR! Проверьте! Тип ошибка: ",
        error: error.message,
      });
      console.log("ERROR! Проверьте!");
      console.log("Тип ошибка: ", error.message);
    }
  }
}

module.exports = new requestBuilding();
