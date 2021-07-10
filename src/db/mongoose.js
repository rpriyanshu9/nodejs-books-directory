const mongoose = require('mongoose')
const Book = require('../models/books')

mongoose.connect('mongodb://127.0.0.1:27017/books-directory', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, () => {
    console.log("Connected to mongodb.")
});
