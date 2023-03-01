const produtos = require('../database/produtos.json')
const produtoServices = require('../services/produtoServices.js')

const admController = {

    showHome:(req,res) =>{
        res.render('admhome.ejs')
    },
    listarProdutos: (req,res) =>{
        
        const mercadorias  = produtos;
        res.render('admProducts.ejs',{mercadorias});

    },
    addProdutos: (req,res) => {
        res.render('adm-form-add.ejs')
    },
    saveProduto:(req,res) =>{

        let produto = {
            nome:req.body.name,
            genre:req.body.genre,
            price:parseFloat(req.body.price),
            img:[req.file.filename],
            categoryID:req.body.category,
            newRelease:req.body.released,
            promotion:req.body.promotion,
            type:req.body.type  
        }
        console.log(produto)

        produtoServices.addProduto(produto)

        res.redirect("/adm/produtos")
    }
}


module.exports = admController;