const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    sold: {
        type: Number,
        required: true
    },
    published: Date
})

const Book = new mongoose.model('book', bookSchema)

module.exports = Book