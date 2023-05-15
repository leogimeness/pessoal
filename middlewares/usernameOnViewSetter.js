function usernameOnViewSetter(req, res, next) {
    // console.log(req.session)
    res.locals.username = req.session.username
    
    next();
}

module.exports = usernameOnViewSetter