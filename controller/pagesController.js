
const paginasController = {

    showIndex:(req,res) =>{
        res.render('index.ejs')
    },
    showAccount:(req,res) =>{
        res.render('sign-in.ejs')
    },
    showSignUp:(req,res) =>{
        res.render('sign-up.ejs')
    },
    showCart:(req,res) =>{
        res.render('cart.ejs')

    }

}




module.exports = paginasController;