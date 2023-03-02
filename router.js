const express = require('express');
const path = require('path');
const admController = require('./controller/admController');
const paginasController = require('./controller/pagesController');
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
    destination:(req,file,callback) =>{
        const folder = path.join(__dirname, "../projetoPessoal/public/img/jogos")
        callback(null,folder)
    },
    filename:(req,file,callback) =>{
        const imageName = file.originalname;
        callback(null,imageName)
    }
})

const upload = multer({storage: multerDiskStorage})

const router = express.Router()


router.get('/', paginasController.showIndex)
router.get('/sign-in',paginasController.showAccount)
router.get('/sign-up',paginasController.showSignUp)
router.get('/cart',paginasController.showCart)
router.get('/products/:category',paginasController.showProduct)
router.get('/detail/:idProduto',paginasController.showProductDetail)



router.get('/adm',admController.showHome)
router.get('/adm/produtos',admController.listarProdutos);
router.get('/adm/produtos/add',admController.addProdutos);
router.post('/adm/produtos/store',upload.single('imagem'),admController.saveProduto);
router.get('/adm/produtos/:id/edit',admController.editProduct);
router.put('/adm/produtos/:id/edit',admController.updateProduct)



module.exports = router 