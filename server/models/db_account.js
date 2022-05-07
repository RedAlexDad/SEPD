const mongoose = require("mongoose");

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
  group: { type: String, required: true },

  // Номер заявления
  number_request: { type: Number, required: false },

  // Роль доступа, USER и ADMIN
  // role_user: [{ type: String, ref: "Role" }],
  // value: {type:String, unique: true, default: "USER"} 
});

module.exports = mongoose.model("Account", Account);
