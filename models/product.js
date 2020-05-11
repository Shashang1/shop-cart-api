const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productId: { type: String, trim: true, required: true, unique: true },
  categoryId: { type: String, required: true, trim: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  price: { type: Number }
})

const product = mongoose.model("product", productSchema, "product")
module.exports = product