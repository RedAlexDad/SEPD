const mongoose = require("mongoose");

// Полная БД для всех
// Для регистрации и проверка учетной записи при авторизации
const Account = new mongoose.Schema({
  // Уч. запись для авторизации и регистрации
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  
  // Студент, переводчик, администратор, и т.д. (должность)
  // Студент - 0, переводчик - 1, администратор - 2.
  post_user: { type: Number, default: 0, required: true},

  // Персональные данные
  family: { type: String, required: true },
  name: { type: String, required: true },
  fatherland: { type: String, required: true },
  // Если сурдопереводчик, то можно пропустить
  group: { type: String, required: false },

  // Номер заявления (08.05.2022 - по плану должен быть порядковый номер запроса, в данный момент эта функция отключена)
  number_request: { type: Number, required: false },

  // Роль доступа, USER и ADMIN
  // role_user: [{ type: String, ref: 'Role' }],
  // value: {type:String, unique: true, default: "USER"} 
});

module.exports = mongoose.model("Account", Account);
