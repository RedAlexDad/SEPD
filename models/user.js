const {Schema, model} = require('mongoose');

// Описываем схему (структуру) для нашего поста
const schema = new Schema({
    id_request: { type: integer, required: true },
    building: { type: String, required: true },
    auditorium: { type: String, required: true },
    discipline: { type: String, required: true },
    schedule: { type: String, required: true },

    // Массив данных. Types.ObjectID - к какому типу мы обращаемся. ref - к какой коллекции привязываемся
    // links: [{type: Types.ObjectID, ref: 'Link' }]
})

module.exports = model('user', schema);