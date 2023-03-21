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
    saveUser:(req,res) =>{
        
    },
    showProduct:(req,res) =>{

        let categoryID = Number(req.params.category)
        let produtosFiltrados = produtos.filter(p => p.categoryID  == categoryID)
        let price = req.query.price
        let genres = req.query.genre


        if  (genres && genres.length > 0) {
            produtosFiltrados = produtosFiltrados.filter(p => genres.includes(p.genre));
        }

        if (price !== undefined){
        switch(price){

            case "50": produtosFiltrados = produtosFiltrados.filter(p => p.price <= 50)
            break;

            case "51": produtosFiltrados = produtosFiltrados.filter(p => p.price > 50)
            break;

            default:
        }}

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