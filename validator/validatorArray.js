const { check } = require('express-validator')

const validatorArray = {
  signup: [
    check('email').notEmpty().isEmail().withMessage('invalid email'),
    check('firstName').notEmpty().withMessage('first name invalid'),
    check('lastName').notEmpty().withMessage('last name invalid'),
    check('password').notEmpty().isLength({ min: 6 }).withMessage('password invalid'),
    check('phone').notEmpty().isMobilePhone().withMessage('phone number invalid'),
    check('address').notEmpty().withMessage('address invalid')
  ],
  login: [
    check('email').notEmpty().isEmail().withMessage('invalid email'),
    check('password').notEmpty().isLength({ min: 6 }).withMessage('password invalid')
  ]
}

module.exports = validatorArray