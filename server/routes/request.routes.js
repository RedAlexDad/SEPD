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
        surdo_family,
        surdo_name,
        surdo_fatherland,
        
        _id,
        post_user,

        family,
        name,
        fatherland,
        group,

        id_request,
        number_request,
        status_request,

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
        surdo_family,
        surdo_name,
        surdo_fatherland,

        _id,
        post_user,
        
        family,
        name,
        fatherland,
        group,

        id_request,
        number_request,
        status_request,

        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      });

      console.log(post);
      // console.log(post._id);
      return res.json(post);
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
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message:"Ошибка! ID не указан!"});
      }
      const post_update = await User.findByIdAndUpdate(
        post._id,
        post, {new: true}
      );
      console.log("Обновлено:", post_update);
      return res.json(post_update);
    } catch (error) {
      res.status(500).json({
        message: "ERROR! Проверьте! Тип ошибка: ",
        error: error.message,
      });
      console.log("ERROR! Проверьте!");
      console.log("Тип ошибка: ", error.message);
    }
  }
  async delete(req, res) {
    const post = req.body;
    if (!post._id) {
      res.status(400).json({ message:"Ошибка! ID не указан!"});
    }
    const post_delete = await User.findByIdAndDelete(post._id, {new: false});
    console.log("Удалено:", post_delete);
    return res.json(post_delete);
  }
}

module.exports = new requestBuilding();
