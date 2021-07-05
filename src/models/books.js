const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: String,
    author: String,
    sold: Number,
    published: Date
})

const Book = new mongoose.model('book', bookSchema)

module.exports = Book