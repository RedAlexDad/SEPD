const {Schema, model} = require('mongoose');

// Описываем схему (структуру) для нашего поста
const schema = new Schema({
    family: {type:String, unique:true},
    name: {type:String, required:true},
    fatherland: {type:String, required:true},
    group: {type:String, required:true},
    id_request: { type: String, required: false },
    building: { type: String, required: true },
    auditorium: { type: String, required: true },
    discipline: { type: String, required: true },
    schedule: { type: String, required: true },
    DataTime: { type: String, required: true},

    // Массив данных. Types.ObjectID - к какому типу мы обращаемся. ref - к какой коллекции привязываемся
    // links: [{type: Types.ObjectID, ref: 'Link' }]
})

module.exports = model('user', schema);