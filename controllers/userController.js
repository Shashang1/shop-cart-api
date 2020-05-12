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
  login: async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await userModel.findOne({ email })

      if (!user) res.status(400).send({ error: 'username or password invalid' })

      else {
        const result = await bcrypt.compare(password, user.password)
        if (result) {
          const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phone: user.phone,
            email: user.email
          }
          const token = await jwt.sign(
            { userId: user._id, username: user.email },
            config.secret,
            { expiresIn: '1h' }
          )

          await res.status(200).send({ userData, token })
        }
        else { res.status(400).send({ error: 'username or email invalid' }) }
      }
    } catch (error) { console.log(error) }
  }
}

module.exports = userController