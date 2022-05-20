const Router = require('express');

const requestBuilding = require('./request.routes.js')

const router = new Router();

router.post('/requests', requestBuilding.request)

module.exports = router;