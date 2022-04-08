const User = require("./db_account.js");
const Role = require("./db_account_role.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("./config.js");

const generateAccessToken = (id, role_user) => {
  const payload = {
    id,
    role_user,
  };
  return jwt.sign(payload, secret, { expiresIn: "3h" });
};

const add_man_db = (_id, family, name, fatherland, group, token) => {
  const MAN = {
    _id,
    family,
    name,
    fatherland,
    group,
    token,
  };
  return MAN;
};

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }
      console.log("-----------------");
      console.log("Error: ", errors);
      // const {password, login} = req.body // --------
      // const {password, login, value} = req.body
      const { password, login, value, family, name, fatherland, group } =
        req.body;
      const candidate = await User.findOne({ login });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }

      console.log("Candidate: ", candidate);

      // const {family, name, fatherland, group} = req.body;
      // const Man = await User.create(family, name, fatherland, group);
      // // Для проверки
      // res.json(Man)
      // console.log(Man)

      const hashPassword = bcrypt.hashSync(password, 7);
      // const userRole = await Role.findOne( {value:"USER"} ) // --------
      // const user = new User( {login, password: hashPassword, role_user: [value]} ) //не записывает значение роли
      const user = new User({
        login,
        password: hashPassword,
        role_user: [value],
        family,
        name,
        fatherland,
        group,
      }); //не записывает значение роли

      await user.save();
      return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  //предложенные варианты заполнения зданий, аудиторий (text), время (dataTime)
  //система оповещения при принятии заявки
  //страницы: мои заявка, поданые заявки

  async login(req, res) {
    try {
      const { login, password, family, name, fatherland, group } = req.body;
      // const {login, password} = req.body
      // const user = await User.findOne({login})

      const user = await User.findOne({ login });

      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь с ${login} не найден` });
      }

      const vaildPassword = bcrypt.compareSync(password, user.password);

      if (!vaildPassword) {
        return res.status(400).json({ message: "Введен неверный пароль" });
      }

    const token = generateAccessToken(user._id, user.role_user);

    // Полная информация
    const Man = add_man_db( user._id, user.family, user.name, user.fatherland, user.group, token );
    //   const Man = await User.create( user._id, user.family, user.name, user.fatherland, user.group );
    // const Man = await user.create({ login, password, family, name, fatherland, group });
    //   const Man = await User.findOne({ login, password})

    // Все данные 
    // const users = await User.find({});
    // res.json(users);
    res.json(Man);

    //   res.json(user._id && {token})
    // return res.json( Man )
    //   res.json({token})
      // console.log(token)
      // res.json(Man);

      // return res.json({token})
      // return res.json({_id})
      // return res.json({family, name, fatherland, group});
      // return res.json({Man});
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new authController();
