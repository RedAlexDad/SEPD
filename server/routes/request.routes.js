//          Маршрутизация

const { Router } = require("express");
const user = require("../models/full_db");
// const Post = require('../models/post.js');
const router = new Router();

// Обработка запроса
// /api/request
class requestBuilding {
  async request(req, res) {
    try {
      // console.log('Body: ', req.body);
      // Передаем и сохраняем нашу структуру
      const {
        family,
        name,
        fatherland,
        group,
        id_request,
        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      } = req.body;
      // console.log("body: ", req.body);
      const post = await user.create({
        family,
        name,
        fatherland,
        group,
        id_request,
        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      });
      res.json(post);
      console.log(post);
    } catch (error) {
      res.status(500).json({
        message: "ERROR! Проверьте! Тип ошибка: ",
        error: error.message,
      });
      console.log("ERROR! Проверьте!");
    }
  }
}

module.exports = new requestBuilding();
