const { validationResult } = require('express-validator')

const validatorFunction = {
  signup: (req, res, next) => {
    const err = validationResult(req)
    if (err.isEmpty()) {
      next()
    }
    else {
      res.status(400).send({ error: err.errors[0].msg })
    }
  },
  login: (req, res, next) => {
    const err = validationResult(req)
    if (err.isEmpty()) {
      next()
    }
    else {
      res.status(400).send({ error: err.errors[0].msg })
    }
  }
}

module.exports = validatorFunction