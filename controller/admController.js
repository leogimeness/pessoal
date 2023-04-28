const produtos = require('../database/produtos.json')

const admUsers = require('../database/admUsers.json')

const { Products, Admins, Gallery } = require('../models')

const produtoServices = require('../services/produtoServices.js')

const admServices = require("../services/admServices")




const admController = {
    login: (req, res) => {
        res.render('admLogin.ejs')
    },
    showHome: (req, res) => {
        res.render('admhome.ejs')
    },
    listarProdutos: async (req, res) => {

        try {
            const mercadorias = await Products.findAll({
                include: ["gallery"],

            })
            res.render('admProducts.ejs', { mercadorias });
        } catch (error) {
            console.log(error)
        }

    },
    addProdutos: (req, res) => {
        res.render('adm-form-add.ejs')
    },
    saveProduto: async (req, res) => {

        const gallery = {
            img_video_path_stored: req.file.filename,
            isImg: 1
        }

        const produto = {
            product_name: req.body.name,
            genre: req.body.genre,
            price: parseFloat(req.body.price),
            categories_id: req.body.category,
            new_released: req.body.released,
            promotion: req.body.promotion,
            active: 1
        }

        await produtoServices.addProduto(produto, gallery)

        res.redirect("/adm/produtos")
    },
    editProduct: async (req, res) => {

        const id = req.params.id

        const produto = await Products.findByPk(id)

        res.render('adm-form-edit.ejs', { produto })
    },
    updateProduct: async (req, res) => {

        const id = req.params.id

        const produto = await Products.findByPk(id)


        produto.product_name = req.body.nome;
        produto.genre = req.body.genre;
        produto.categories_id = req.body.category;
        produto.price = req.body.price;
        produto.promotion = req.body.promotion;
        produto.new_released = req.body.released
        produto.active = 1
        produto.img_video_path_stored = req.file.filename;

        await produto.save()

        Gallery.destroy({ where: { products_id: produto.id } })

        const newImage = await Gallery.create
            ({
                products_id: produto.id,
                img_video_path_stored: req.file.filename,
                isImg: 1
            })

        res.redirect("/adm/produtos")
    },
    deleteProduct:async (req, res) => {

        const productId = req.params.id;

        try {
            const produtoDeletar = await Products.findByPk(productId)

            produtoDeletar.destroy()
    
            res.redirect('/adm/produtos')

        } catch (error) {
            console.log(error)
        }
       
       
    },
    listarUsuarios: async (req, res) => {

        try {
            const admUsers = await Admins.findAll()
            res.render('admUsuarios.ejs', { admUsers })
        } catch (error) {
            console.log(error)
        }

    },
    addUsuario: (req, res) => {
        res.render('admUser-form-add.ejs')
    },
    saveUser: async (req, res) => {

        try {
            const user = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                passcode: req.body.password,
                email: req.body.email,
            }
            
            await admServices.addUsuario(user)
            res.redirect('/adm/usuarios')

        } catch (error) {
            console.log(error)
        }


    },
    editUsuario: async (req, res) => {

        const id = req.params.id

        try {
            const userAdm = await Admins.findByPk(id)
            res.render('admUser-form-edit.ejs', { userAdm })

        } catch (error) {
            console.log(error)
        }
    },
    updateUsuario: async (req, res) => {


        const id = req.params.id

        const userAdm = await Admins.findByPk(id)

        userAdm.first_name = req.body.first_name,
        userAdm.last_name = req.body.last_name,
        userAdm.email = req.body.email,
        userAdm.passcode = req.body.password

        userAdm.save()

        res.redirect('/adm/usuarios')
    },
    deleteUsuario: async (req, res) => {

        const usuarioId = req.params.id;

        try {
            const usuarioDeletar = await Admins.findByPk(usuarioId)
            usuarioDeletar.destroy();
            return res.redirect("/adm/usuarios");
        } catch (error) {
            console.log(error)
        }
    }

}


module.exports = admController;