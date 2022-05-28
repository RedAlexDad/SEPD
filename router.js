const Router = require('express');

const requestBuilding = require('./request.routes.js')

const router = new Router();

router.post('/requests', requestBuilding.request_post)

router.get('/requests', requestBuilding.request_get)

module.exports = router;