const { Schema, model } = require("mongoose");

// Полная БД для запросов (Можно и отправить и получить данные для сурдопереводчика)
const database = new Schema({
  family: { type: String, required: false },
  name: { type: String, required: false },
  fatherland: { type: String, required: false },
  group: { type: String, required: false },
  
  building: { type: String, required: false },
  auditorium: { type: String, required: false },
  discipline: { type: String, required: false },
  schedule: { type: String, required: false },
  DataTime: { type: String, required: false },
});

module.exports = model("user", database);