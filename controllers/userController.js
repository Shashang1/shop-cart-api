const bcrypt = require('bcrypt')
const userModel = require('../models/user')
const config = require('../config')
const jwt = require('jsonwebtoken')

const userController = {
  signup: async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      address
    } = req.body
    try {
      let user = await userModel.findOne({ email: email })

      if (user) res.status(400).send({ error: 'email already registered' })
      else {

        const passwordHash = await bcrypt.hash(password, 10)
        const userData = { firstName, lastName, email, phone, address }
        const user = await new userModel({ ...userData, password: passwordHash })

        await user.save()
        let token = await jwt.sign(
          { userId: user._id, username: user.email },
          config.secret,
          { expiresIn: '1h' })

        await res.status(200).send({ userData, token })
      }
    } catch (error) { console.log(error) }
  },
}

module.exports = userController