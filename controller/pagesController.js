const { Categories, Products } = require('../models')



const paginasController = {

    showIndex: async (req, res) => {

       
        try {
            const mercadorias = await Products.findAll({
                include: ["gallery"],
                where: { promotion: true }
            })
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

            res.render('products.ejs', { produtosFiltrados, categoryId });

        } catch (error) {
            console.log(error)

        }

    },
    showProductDetail: async (req, res) => {

        try {
            const id =req.params.idProduto
            const produto = await Products.findByPk(id,{
                include: "gallery"
            })
            console.log('aqui', produto)
            res.render('detail.ejs', { produto })
            
        } catch (error) {
            console.log(error)
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