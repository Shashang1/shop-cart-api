const product = require('../../models/product')

const getAllProducts = async (req, res) => {
  const response = await product.find()
  res.status(200).json(response)
}

module.exports = { getAllProducts }