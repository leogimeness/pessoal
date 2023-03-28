const {validationResult} = require('express-validator')

const redirectedOnPasswordError = (req, res,next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.locals.errors = errors.array();
        return res.render('sign-up.ejs')
    }
    next();

}

module.exports = redirectedOnPasswordError;