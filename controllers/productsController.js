const product = require('../models/product')

const productController = {
  getAllProducts: async (req, res) => {
    try{
    const response = await product.find()
    res.status(200).json(response)
    }catch(error){
      console.log(error)
    }
  }
}

module.exports = productController