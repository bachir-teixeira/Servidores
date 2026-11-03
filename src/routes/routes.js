const { autobots, decepticons  } = require('../controllers/controllers.js')
const express = require('express')
const router = express.Router() 
router.get('/autobots',autobots) 
router.get('/decepticons',decepticons)
module.exports =  router 