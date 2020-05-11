var express = require('express');
var router = express.Router();

const ProductRoutes = require('../api/product/index')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.use('/product', ProductRoutes)

module.exports = router;
