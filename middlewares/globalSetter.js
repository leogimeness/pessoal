function globalSetter(req, res, next) {
    // console.log(req.session)
    res.locals.username = req.session.username
    res.locals.cart = req.session.cart

    let totItemCart = 0
    let totValue = 0

    if (req.session.cart) {


        req.session.cart.forEach((item) => {
            totItemCart += item.quantity;
            totValue += Number(item.total);
        })


    }
    res.locals.totItemCart = totItemCart;
    res.locals.totValue = totValue;

    next();
}

module.exports = globalSetter