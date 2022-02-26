import mongoose from 'mongoose';

// Описываем схему (структуру) для нашего поста

const Post = new mongoose.Schema({
    building: { type: String, required: true },
    auditorium: { type: String, required: true },
    discipline: { type: String, required: true },
    schedule: { type: String, required: true }
})

export default mongoose.model('Post', Post)