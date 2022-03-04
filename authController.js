const User = require('./db_account.js')
const Role = require('./db_account_role.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require('./config.js')

const generateAccessToken =  (id, role_user) => {
    const payload = {
        id,
        role_user
    }
    return jwt.sign(payload, secret, {expiresIn: "3h"} )
}

class authController{
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty){
                return res.status(400).json({message:'Ошибка при регистрации', errors})
            }
            const {password, login} = req.body
            const candidate = await User.findOne({login})
            if(!candidate){
                res.status(400).json( {message:'Пользователь с таким имене уже существует'} )
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne( {value:"USER"} )
            const user = new User( {login, password: hashPassword, role_user: [userRole.value]} ) //roles is array in db_account.js
            await user.save()
            return res.json( {message: 'Пользователь успешно зарегистрирован'} )

        } catch (e) {
            console.log(e);
            res.status(400).json( {message:'Registration error'} )
        }
    }
    
    async login(req, res) {
        try {
            const {login, password} = req.body
            const user = await User.findOne({login})
            if(!user){
                return res.status(400).json({message: "Пользователь с ${login} не найден"})
            }
            const vaildPassword = bcrypt.compareSync(password, user.password)
            if(!vaildPassword){
                return res.status(400).json({message:'Введен неверный пароль'})
            }
            const token = generateAccessToken(user._id, user.role_user)
            return res.json
        } catch (e) {
            console.log(e);
            res.status(400).json({message:'Login error'})
        }
    }
    
    async getUsers(req, res) {
        try {
               
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = new authController();