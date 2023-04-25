const usuariosServices = require("../services/usersServices.js")
const { Clientes, Products } = require('../models')



const paginasController = {

    showIndex: async (req, res) => {

        // let mercadorias = produtos.filter(p => p.Promotion == true)
        try {
            const mercadorias = await Products.findAll({
                include: ["gallery"],
                where: { promotion: true }
            })
            // console.log(mercadorias.gallery[0].img_video_path_stored)
            res.render('index.ejs', { mercadorias })
        } catch (error) {
            console.log(error)
        }
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
    showProduct: async (req, res) => {

        try {
            const price = req.query.price
            const genres = req.query.genre    
            const categoryId = Number(req.params.category)
            let produtosFiltrados = await Products.findAll({
                include: ["gallery"],
                where: { categories_id: req.params.category }
            })

            console.log(req.params.category)
            console.log(produtosFiltrados)
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

            console.log(produtosFiltrados)

            res.render('products.ejs', { produtosFiltrados, categoryId });

        } catch (error) {
            console.log(error)

        }
        // let categoryID = Number(req.params.category)
        // let produtosFiltrados = produtos.filter(p => p.categoryID == categoryID)
       

        

        


    },
    showProductDetail: async (req, res) => {

        

        try {
            let id = Number(req.params.idProduto)
            console.log(id)
            const produto = await Products.findByPk(id,{
                include: "gallery"
            })
            console.log('aqui', produto.gallery[0].img_video_path_stored)
            // console.log(produto)
            res.render('detail.ejs', { produto })
            
        } catch (error) {
            console.log(error)
        }

        // let id = req.params.idProduto;

        // let produto = produtos.find(p => p.id == id)

        // if (produto !== undefined) {
        //     res.render('detail.ejs', { produto })
        // } else {
        //     res.render('error404.ejs')
        // }
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