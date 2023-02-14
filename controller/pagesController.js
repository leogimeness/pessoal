
const paginasController = {

    showIndex:(req,res) =>{
        res.render('index.ejs')
    },
    showAccount:(req,res) =>{
        res.render('sign-in.ejs')
    }

}




module.exports = paginasController;