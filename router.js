const express = require('express');
const path = require('path');
const admController = require('./controller/admController');
const paginasController = require('./controller/pagesController');
const loginController = require('./controller/loginController');
const cartController = require('./controller/cartController');
const multer = require('multer');
const usernameOnViewSetter = require('./middlewares/usernameOnViewSetter');
const cartOnViewSetter = require('./middlewares/cartOnViewSetter');

const multerDiskStorage = multer.diskStorage({
    destination:(req,file,callback) =>{
        const folder = path.join(__dirname, "../projetoPessoal/public/img/jogos")
        callback(null,folder)
    },
    filename:(req,file,callback) =>{
        const imageName = Date.now() + file.originalname;
        callback(null,imageName)
    }
})

const upload = multer({storage: multerDiskStorage})

const router = express.Router()


// adm crud Produtos
router.get('/adm',admController.showHome)
router.get('/adm/produtos',admController.listarProdutos);
router.get('/adm/produtos/add',admController.addProdutos);
router.post('/adm/produtos/store',upload.single('imagem'),admController.saveProduto);
router.get('/adm/produtos/:id/edit',admController.editProduct);
router.put('/adm/produtos/:id/edit',upload.single('imagem'),admController.updateProduct);
router.get('/adm/produtos/:id/delete',admController.deleteProduct)

// adm crud Usuarios
router.get("/adm/usuarios",admController.listarUsuarios);
router.get('/adm/usuarios/add',admController.addUsuario);
router.post('/adm/usuarios/add',admController.saveUser);
router.get("/adm/usuarios/:id/edit",admController.editUsuario);
router.put("/adm/usuarios/:id/edit",admController.updateUsuario);
router.get('/adm/usuarios/:id/delete',admController.deleteUsuario)


router.use('/',usernameOnViewSetter, cartOnViewSetter)
router.get('/',paginasController.showIndex)
router.get('/sign-in',paginasController.showAccount)
router.get('/sign-up',paginasController.showSignUp)
router.get('/products/:category',paginasController.showProduct)
router.get('/detail/:idProduto',paginasController.showProductDetail)

//clientes

router.post('/login/store',loginController.verifyAccount);


// produtos
router.get('/cart',cartController.showCart)
router.get('/addInCart/:id',cartController.addCart)





    



module.exports = router 