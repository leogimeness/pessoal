const produtos = require('../database/produtos.json')

const cartController = {
    showCart:(req,res) =>{
        res.render('cart.ejs')
    },
    addCart:(req,res) =>{
        let id = req.params.id
        let produto = produtos.find(p => p.id == id)    

        if(req.session.cart != undefined){
            let produtoSelecionado = req.session.cart.find(i => parseInt(i.id) == parseInt(id))
            if (produtoSelecionado){
                produtoSelecionado.quantity +=1
                produtoSelecionado.total = produtoSelecionado.quantity * produtoSelecionado.price
            }else{
                req.session.cart.push({
                    id:produto.id,
                    nome:produto.nome,
                    price:produto.price,
                    img:produto.img,
                    quantity: 1,
                    total:produto.price
                })
            }

        }else{
            req.session.cart = [{
                id:produto.id,
                nome:produto.nome,
                price:produto.price,
                img:produto.img,
                quantity: 1,
                total:produto.price
            }]
        }


        res.redirect("/cart")

        
    },
    deleteProductInCart: (req,res) => {
        let id = req.params.id

        // let produto = req.session.cart.find(p => p.id == id)

        let index = req.session.cart.findIndex(i => i.id == id)
        
        req.session.cart.splice(index,1)

        res.redirect('/cart')   
    }
}



module.exports = cartController;