const express = require('express')
const router = express.Router()

const productRoutes = require('./products')
const userRoutes = require('./users')

router.use('/products', productRoutes)
router.use('/user', userRoutes)

module.exports = router;
