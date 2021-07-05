require('./db/mongoose')
const express = require('express')
const app = express()
const booksRoute = require('./routes/booksRoute')

app.use(express.json())

app.use('/books', booksRoute)

app.listen(3000, () => {
    console.log("Listening on port 3000.")
})