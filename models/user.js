const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
})

const userModel = new mongoose.model('user', userSchema, 'user')

module.exports = userModel