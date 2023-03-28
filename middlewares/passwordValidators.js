const { validationResult, body } = require('express-validator')

const errorMensagem = "Senha deve ter no mínimo 8 caracteres, incluir pelo menos uma letra, um número e um caractere especial"
const minPasswordLength = 8;

const upperCaseValidation = body('password').isStrongPassword({ minUppercase: 1 }).withMessage(errorMensagem);

const minLengthValidation = body('password').isLength({ min: minPasswordLength }).withMessage(errorMensagem);

const specialCharValidation = body('password').isStrongPassword({ minSymbols: 1 }).withMessage(errorMensagem);

const passwordValidators = [minLengthValidation, upperCaseValidation,specialCharValidation]

module.exports = passwordValidators;