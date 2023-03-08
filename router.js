const express = require('express');
const path = require('path');
const admController = require('./controller/admController');
const paginasController = require('./controller/pagesController');
const multer = require('multer');
const cartController = require('./controller/cartController')

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


router.get('/', paginasController.showIndex)
router.get('/sign-in',paginasController.showAccount)
router.get('/sign-up',paginasController.showSignUp)
router.get('/products/:category',paginasController.showProduct)
router.get('/detail/:idProduto',paginasController.showProductDetail)

// produtos
router.get('/cart',cartController.showCart)
router.get('/addInCart/:id',cartController.addCart)


// adm crud 
router.get('/adm',admController.showHome)

router.get('/adm/produtos',admController.listarProdutos);
router.get('/adm/produtos/add',admController.addProdutos);
router.post('/adm/produtos/store',upload.single('imagem'),admController.saveProduto);
router.get('/adm/produtos/:id/edit',admController.editProduct);
router.put('/adm/produtos/:id/edit',upload.single('imagem'),admController.updateProduct);
router.get('/adm/produtos/:id/delete',admController.deleteProduct)

router.get("/adm/usuarios",admController.listarUsuarios);
router.get('/adm/usuarios/add');
// router.post("adm/usuarios/store",admController.saveUsuario);



module.exports = router 