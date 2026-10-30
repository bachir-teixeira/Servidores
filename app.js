const express = require('express')
const cors = require('cors')
const routas = require('./src/routs/routs.js')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/pessoas', routas)
module.exports = app  