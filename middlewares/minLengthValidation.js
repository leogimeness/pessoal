const {validationResult, body} = require('express-validator')

const minPasswordLength = 8;

const minLengthValidation = body('password').isLength({min:minPasswordLength})

module.exports = minLengthValidation;