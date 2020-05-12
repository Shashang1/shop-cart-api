const express = require('express')
const router = express.Router()

const validatorArray = require('../validator/validatorArray')
const validatorFunction = require('../validator/validatorFunction')
const userController = require('../controllers/userController')

router.post('/signup', validatorArray.signup, validatorFunction.signup, userController.signup)
router.post('/login', validatorArray.login, validatorFunction.login, userController.login)

module.exports = router;
