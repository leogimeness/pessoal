const express = require('express');
const path = require('path');
const admController = require('./controller/admController');
const paginasController = require('./controller/pagesController');
const loginController = require('./controller/loginController');
const cartController = require('./controller/cartController');
const multer = require('multer');
const usernameOnViewSetter = require('./middlewares/usernameOnViewSetter');
const cartOnViewSetter = require('./middlewares/cartOnViewSetter');
const { login } = require('./controller/admController');
const admNameOnViewSetter = require('./middlewares/admNameOnViewSetter');
const signUpValidator = require('./middlewares/signUpValidator');
const passwordValidators = require('./middlewares/passwordValidators');
const redirectedOnPasswordError = require('./middlewares/redirectedOnPasswordError');
const teste = require('./TEST/test.ProductsTable');


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





router.use('/adm',admNameOnViewSetter)
// adm login
router.get('/adm/login', admController.login)
router.post('/adm/login', loginController.verifyAdmAccount)

router.get('/adm/test',paginasController.test)

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


router.use('/',usernameOnViewSetter, cartOnViewSetter);
router.get('/',paginasController.showIndex);
router.get('/sign-in',paginasController.showAccount);
router.get('/contact',paginasController.contact)
router.get('/sign-up',paginasController.showSignUp);
router.post('/sign-up',...passwordValidators,redirectedOnPasswordError,paginasController.saveRegisteredUser)//signUpValidator,
router.get('/products/:category',paginasController.showProduct);
router.get('/detail/:idProduto',paginasController.showProductDetail);
router.get('/test',teste)

//clientes
router.get('/logout',loginController.logout)
router.post('/login/store',loginController.verifyAccount);


// produtos
router.get('/cart',cartController.showCart)
router.get('/addInCart/:id',cartController.addCart)
router.get('/cart/delete/:id',cartController.deleteProductInCart)







    



module.exports = router 