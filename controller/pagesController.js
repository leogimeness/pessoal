const produtos = require('../database/produtos.json')


const paginasController = {

    showIndex:(req,res) =>{

        let mercadorias = produtos.filter(p => p.Promotion == true)
        res.render('index.ejs',{mercadorias})
        
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

        let price = req.query.price

        if (price != undefined){ //switch
            produtosFiltrados = produtosFiltrados.filter(p => p.price <= 50)
        }

        res.render('products.ejs',{produtosFiltrados,categoryID});
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