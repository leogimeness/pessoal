const produtos = require('../database/produtos.json')
const usuarios = require("../database/usuarios.json")
const usuariosServices = require("../services/usersServices.js")
const { user } = require('../models')


const paginasController = {

    showIndex: (req, res) => {

        let mercadorias = produtos.filter(p => p.Promotion == true)
        res.render('index.ejs', { mercadorias })

    },
    showAccount: (req, res) => {
        // const {logOutMessage} = req.query
        let logOutMessage = undefined
        let { logOut } = req.query;
        let isLogOut = Boolean(logOut);
        if (isLogOut) {
            logOutMessage = "You have been logout successfully!"
        }
        res.render('sign-in.ejs', { logOutMessage })
    },
    showSignUp: (req, res) => {
        res.render('sign-up.ejs')
    },
    saveRegisteredUser: (req, res) => {

        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        }

        usuariosServices.addUsuario(user)

        res.redirect('/')
    },
    showProduct: (req, res) => {

        let categoryID = Number(req.params.category)
        let produtosFiltrados = produtos.filter(p => p.categoryID == categoryID)
        let price = req.query.price
        let genres = req.query.genre


        if (genres && genres.length > 0) {
            produtosFiltrados = produtosFiltrados.filter(p => genres.includes(p.genre));
        }

        if (price !== undefined) {
            switch (price) {

                case "50": produtosFiltrados = produtosFiltrados.filter(p => p.price <= 50)
                    break;

                case "51": produtosFiltrados = produtosFiltrados.filter(p => p.price > 50)
                    break;

                default:
            }
        }

        res.render('products.ejs', { produtosFiltrados, categoryID });
    },
    showProductDetail: (req, res) => {

        let id = req.params.idProduto;

        let produto = produtos.find(p => p.id == id)

        if (produto !== undefined) {
            res.render('detail.ejs', { produto })
        } else {
            res.render('error404.ejs')
        }
    },
    contact: (req, res) => {
        res.render('contact.ejs')

    },
    test: async (req, res) => {
        try {
            let mercadorias = await user.findAll()
            // console.log(teste)
            // const mercadorias  = produtos;
            res.render('test.ejs', { mercadorias })

        } catch (error) {
            console.log("pagesController_test", error)
        }

    }

}

module.exports = paginasController;