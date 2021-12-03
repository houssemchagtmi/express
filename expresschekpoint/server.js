const express = require('express')
const logger = require('./mid/logger')

const app = express()

app.use(logger)

app.use(express.static (__dirname+'/public'))
console.log(__dirname)
const PORT = 4000
app.listen(PORT, (err) => err ? console.error(err) : console.log(`app te5dm`))
