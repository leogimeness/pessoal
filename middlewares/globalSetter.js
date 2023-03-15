function globalSetter (req,res,next){
    // console.log(req.session)
    res.locals.username = req.session.username
    // console.log(res.locals)
    next();
}

module.exports = globalSetter