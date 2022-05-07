const { Schema, model } = require("mongoose");

// Описываем схему (структуру) для нашего поста
const database = new Schema({
  // Идентификатор пользователя автоматически отобразится при получении данных
//   myID: { type: Number, required: false },

  // Студент, переводчик, администратор, и т.д. (должность)
  post_user: { type: Number, required: true},


  // ФИО и группа пользователя
  family: { type: String, required: true },
  name: { type: String, required: true },
  fatherland: { type: String, required: true },
  group: { type: String, required: true },

  // Идентификатор заявления
  id_request: { type: Number, required: true },

  // Номер заявления
  number_request: { type: Number, required: true },

  // Данные заявления
  building: { type: String, required: true },
  auditorium: { type: String, required: true },
  discipline: { type: String, required: true },
  schedule: { type: String, required: true },
  DataTime: { type: String, required: true },

  // Массив данных. Types.ObjectID - к какому типу мы обращаемся. ref - к какой коллекции привязываемся
//   links: [{type: Types.ObjectID, ref: 'Link' }]
    // _id: { type: Number, required: true },
});

module.exports = model("user", database);
