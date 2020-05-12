const jwt = require('jsonwebtoken')

const config = require('../config')

const middlewares = {
  checkToken: (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length)
    }

    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.status(400).send({ error: 'no token' })
        } else {
          req.decoded = decoded
          next()
        }
      })
    } else {
      return res.status(400).send({ error: "no token" })
    }
  }
}

module.exports = middlewares