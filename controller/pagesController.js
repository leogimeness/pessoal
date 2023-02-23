const produtos = require('../database/produtos.json')


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
    },
    showProduct:(req,res) =>{

        let categoryID = Number(req.params.category)

        let produtosFiltrados = produtos.filter(p => p.categoryID.includes(categoryID))

        res.render('products.ejs',{produtosFiltrados});
    },

    showProductDetail:(req,res) =>{

        let id = req.params.idProduto;

        let produto = produtos.find(p => p.id == id)

        if(produto !== undefined){
            res.render('detail.ejs',{produto})
        }else{
            res.render('error404.ejs')
        }
    }

}




module.exports = paginasController;