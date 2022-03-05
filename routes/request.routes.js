const { Router } = require('express');
const user = require('../models/user');
const router = Router();

// Обработка запроса
// /api/auth/register
router.post('/register', async(req, res) => {
    try {
        const{building, auditorium, discipline, shedule} = req.body;
    } catch (error) {
        res.status(500).json({ message: 'ERROR! Проверьте' });
    }

})

module.exports = router;