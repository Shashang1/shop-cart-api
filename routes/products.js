const express = require('express')
const router = express.Router()

const productController = require('../controllers/productsController')
const middlewares = require('../middlewares/index')

router.get('/', productController.getAllProducts)
router.get('/add_to_cart', middlewares.checkToken, (req, res) => { res.send({ msg: 'product added' }) })

module.exports = router
