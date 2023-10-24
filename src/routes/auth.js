const express = require('express')
const AuthController = require('../controllers/AuthController')
const router = express.Router()
const isAuthenticated = require('../middlewares/isAuthenticated')
const validateLogin = require('../middlewares/validateLogin')


router.get('/login', AuthController.show)

router.post('/login', validateLogin, AuthController.login)

router.post('/logout', isAuthenticated, AuthController.logout)

module.exports = router

