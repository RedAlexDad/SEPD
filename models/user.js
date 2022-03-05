const {Schema, model, Types} = require('mongoose');

// Структура
const schema = new Schema({
    building: { type: String, required: true },
    auditorium: { type: String, required: true },
    discipline: { type: String, required: true },
    schedule: { type: String, required: true },

    // Массив данных. Types.ObjectID - к какому типу мы обращаемся. ref - к какой коллекции привязываемся
    // links: [{type: Types.ObjectID, ref: 'Link' }]
})

module.exports = model('user', schema);