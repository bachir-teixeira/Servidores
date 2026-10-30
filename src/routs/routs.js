const { list, add} = require('../controllers/controllers.js')
const validar = require('../middlewares/middlewares.js')
const express = require('express')
const router = express.Router()
router.get('/', list) 
router.post('/', validar, add) 
module.exports = router 