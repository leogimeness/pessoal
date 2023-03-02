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


        produtoServices.addProduto(produto)

        res.redirect("/adm/produtos")
    },
    editProduct:(req,res)=>{

        let id = req.params.id
        let produto = produtos.find(p => p.id == id)

        res.render('adm-form-edit.ejs',{produto})
    },
    updateProduct:(req,res) =>{
        
        console.log(req.body)

        let id = req.params.id
        let produto = produtos.find(p => p.id == id)

        

        // produto.nome = req.body.name;

        // console.log(produtos)
        // produtoServices.save()

        res.redirect("/adm/produtos")
    }
}


module.exports = admController;