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
    async getInfoFIO_student(req, res){
        const { family, name, fatherland } = req.body;

        console.log("getInfoFIO_student: ", req.body);
        // Нахождение данных
        UserDB.find({family: family, name: name, fatherland: fatherland})
        // UserDB.find({name: "Alex", family: "Dad", fatherland: "Vladimirovich"})
            .then((users) => res.send(users))
            .catch((err) => res.send(err));
    }
    async getInfoFIO_translator(req, res){
        const { surdo_family, surdo_name, surdo_fatherland } = req.body;
        
        console.log("getInfoFIO_translator: ", req.body);
        // Нахождение данных
        UserDB.find({surdo_family: surdo_family, surdo_name: surdo_name, surdo_fatherland: surdo_fatherland})
        // UserDB.find({name: "Alex", family: "Dad", fatherland: "Vladimirovich"})
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
