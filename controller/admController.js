const produtos = require('../database/produtos.json')

const admUsers = require('../database/admUsers.json')

const {Products, Admins } = require('../models')

const produtoServices = require('../services/produtoServices.js')

const admServices = require("../services/admServices")




const admController = {
    login:(req,res)=>{
        res.render('admLogin.ejs')
    },
    showHome:(req,res) =>{
        res.render('admhome.ejs')
    },
    listarProdutos: async (req,res) =>{
        
        try {
            const mercadorias = await Products.findAll({
                include: ["gallery"],
                
            })
            res.render('admProducts.ejs',{mercadorias});
        } catch (error) {
            console.log(error)
        }

    },
    addProdutos: (req,res) => {
        res.render('adm-form-add.ejs')
    },
    saveProduto: async (req,res) =>{

        const gallery = {
            img_video_path_stored:req.file.filename,
            isImg:1
        }

        const produto = {
            product_name:req.body.name, 
            genre:req.body.genre,
            price:parseFloat(req.body.price),
            categories_id:req.body.category,
            new_released:req.body.released,
            promotion:req.body.promotion,
            active: 1
        }

        console.log(produto)

        await produtoServices.addProduto(produto,gallery)

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

        const index = produtos.findIndex((mercadoria) => mercadoria.id == productId);
        if (index !== -1) {
          produtos.splice(index, 1);
        }

        produtoServices.save(produtos)

        res.redirect('/adm/produtos')
    },
    listarUsuarios: async (req,res)=>{

        try {
            const admUsers = await Admins.findAll()
            res.render('admUsuarios.ejs',{admUsers})
        } catch (error) {
            console.log(error)
        }

    },
    addUsuario:(req,res) =>{
        res.render('admUser-form-add.ejs')
    },
    saveUser:(req,res) =>{

        let user = {
            nome:req.body.name,
            password:req.body.password,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email
        }

        admServices.addUsuario(user)

        res.redirect('/adm/usuarios')


    },
    editUsuario:(req,res) =>{

        let id = req.params.id
        let userAdm = admUsers.find(u => u.id == id)

        res.render('admUser-form-edit.ejs',{userAdm})

    },
    updateUsuario:(req,res) =>{

        let id = req.params.id
        let userAdm = admUsers.find(u => u.id == id)

        userAdm.nome = req.body.nome,
        userAdm.password = req.body.password,
        userAdm.email = req.body.email,
        userAdm.phoneNumber = req.body.phoneNumber

        admServices.save(userAdm)

        res.redirect('/adm/usuarios')

    },
    deleteUsuario: (req, res) => {
        const usuarioId = req.params.id;
        const index = admUsers.findIndex(user => user.id == usuarioId);
    
        if (index === -1) {
            return res.status(404).send("User not found");
        }
    
        admUsers.splice(index, 1);
        admServices.save(admUsers);
    
        return res.redirect("/adm/usuarios");
    }

}


module.exports = admController;