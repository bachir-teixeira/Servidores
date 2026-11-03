const rotas = require('./src/routes/routes.js')

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors()) 
app.use('/', rotas) 
module.exports = app