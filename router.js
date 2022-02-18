const Router = require('express');
const AccountController = require('./account_controller.js');

const router = new Router();

router.post('/registration', AccountController.create)
router.get('/accounts', AccountController.getAll)
router.get('/accounts/:id', AccountController.getOne)
router.put('/accounts/:id', AccountController.update)
router.delete('/accounts/:id', AccountController.delete)

module.exports = router;