const express = require('express')
const Book = require('../models/books')
const router = express.Router()

// Create new book
router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body)
        await book.save()
        res.status(201).send()
    } catch (error) {
        res.status(500).send()
    }
})

// Read all books
router.get('/', async (req, res) => {
    try {
        const allBooks = await Book.find()
        res.send(allBooks)
    } catch (error) {
        res.status(500).send()
    }
})

// Read single book
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        if (!book) {
            return res.status(404).send()
        }
        res.send(book)
    } catch (error) {
        res.status(500).send()
    }
})

// Update book
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        if (!book) {
            return res.status(404).send()
        }
        res.send(book)
    } catch (error) {
        res.status(500).send()
    }
})

// Delete book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findByIdAndDelete(id)
        if (!book) {
            return res.status(404).send()
        }
        res.send(book)
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router