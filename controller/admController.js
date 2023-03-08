const produtos = require('../database/produtos.json')

const usuarios = require('../database/usuarios.json')

const produtoServices = require('../services/produtoServices.js')

const usuariosServices = require("../services/usuarios.Services")

const fs = require('fs')



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

        let id = req.params.id
        let produto = produtos.find(p => p.id == id)

        produto.nome = req.body.nome;
        produto.genre = req.body.genre;
        produto.categoryID = req.body.category;
        produto.price = req.body.price;
        produto.type = req.body.type;
        produto.Promotion = req.body.promotion;
        produto.NewReleased = req.body.released
        produto.img =  req.file.filename;

        produtoServices.save(produtos)

        res.redirect("/adm/produtos")
    },
    deleteProduct:(req,res) => {

        const productId = req.params.id;

        const index = produtos.findIndex((mercadoria) => mercadoria.id === productId);
        if (index !== -1) {
          produtos.splice(index, 1);
        }

        produtoServices.save(produtos)

        res.redirect('/adm/produtos')
    },
    listarUsuarios:(req,res)=>{
        res.render('admUsuarios.ejs',{usuarios})
    },
    addUsuario:(req,res) =>{
        res.render('admUser-form-add.ejs')
    },
    saveUser:(req,res) =>{

        let user = {
            nome:req.body.name,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email
        }

        usuariosServices.addUsuario(user)

        res.redirect('/adm/usuarios')


    }

}


module.exports = admController;