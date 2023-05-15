const {check} = require('express-validator')

const signUpValidator = [
    check("password").isStrongPassword({minLength: 8,minUppercase: 1,minNumbers: 1,minSymbols: 1}).withMessage("Password does not match criterias")
]


module.exports = signUpValidator;