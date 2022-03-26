const jwt = require ("jsonwebtoken")
const {secret} = require("../config.js")

module.exports = function (role_user) {
    return function (req, res, next){
        if(req.method === "OPTIONS"){
            next()
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return res.status(403).json({message: "Пользователь не авторизован"})
            }
            const {role_user:userRole} = jwt.verify(token, secret) 
            let hasRoles = false
            userRole.forEach(role => {
                if(role_user.includes(role)){ 
                    hasRoles = true
                }
            })

            if(!hasRoles){
                return res.status(403).json({message: "У вас нет доступа"})
            }
            next()
        } catch (e) {
            console.log(e);
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
    }
}