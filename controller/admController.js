const produtos = require('../database/produtos.json')

const admController = {

    showHome:(req,res) =>{
        res.render('admhome.ejs')
    },
    listarProdutos: (req,res) =>{
        
        const mercadorias  = produtos;
        res.render('admProducts.ejs',{mercadorias});

    }
}


module.exports = admController;