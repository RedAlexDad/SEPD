const express = require('express');
const mongoose = require('mongoose');
const UserDB = require("../models/full_db.js");

class infoDB {
    // Получение данные с БД
    async getInfoAll(req, res){
        // Нахождение данных
        UserDB.find()
            .then((users) => res.send(users))
            .catch((err) => res.send(err));
    }
    async getInfoName(req, res){
        // Нахождение данных
        UserDB.find({name: "Dima"})
            .then((users) => res.send(users))
            .catch((err) => res.send(err));
    }
    async getInfoFIO(req, res){
        // Нахождение данных
        UserDB.find({name: "Alex", family: "Dad", fatherland: "Vladimirovich"})
            .then((users) => res.send(users))
            .catch((err) => res.send(err));
    }
    async getInfoNumReq(req, res){
        // Нахождение данных
        UserDB.findOne()
            .then((users) => res.send(users))
            .catch((err) => res.send(err));
    }
}

module.exports = new infoDB();
