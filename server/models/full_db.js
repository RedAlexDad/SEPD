const { Schema, model } = require("mongoose");

// Полная БД для запросов (Можно и отправить и получить данные для сурдопереводчика)
const database = new Schema({
  // Идентификатор пользователя автоматически отобразится при получении данных
  // myID: { type: Number, required: false },

  surdo_family: { type: String, required: false },
  surdo_name: { type: String, required: false },
  surdo_fatherland: { type: String, required: false },

  // Студент, переводчик, администратор, и т.д. (должность)
  post_user: { type: Number, required: false},

  // ФИО и группа пользователя
  family: { type: String, required: false },
  name: { type: String, required: false },
  fatherland: { type: String, required: false },
  group: { type: String, required: false },

  // Идентификатор заявления
  id_request: { type: Number, required: false },

  // Статус заявления
  // 0 - не принято, 1 - принято
  status_request: { type: String, default: "В процессе", required: false },

  // Номер заявления
  number_request: { type: Number, required: false },

  // Данные заявления
  building: { type: String, required: false },
  auditorium: { type: String, required: false },
  discipline: { type: String, required: false },
  schedule: { type: String, required: false },
  DataTime: { type: String, required: false },

  // Массив данных. Types.ObjectID - к какому типу мы обращаемся. ref - к какой коллекции привязываемся
//   links: [{type: Types.ObjectID, ref: 'Link' }]
    // _id: { type: Number, required: true },
});

module.exports = model("user", database);
