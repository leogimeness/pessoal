function admNameOnViewSetter(req,res,next){

    res.locals.admName = req.session.admName
    next();
}

module.exports = admNameOnViewSetter;