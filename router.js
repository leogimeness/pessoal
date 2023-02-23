const express = require('express');
const admController = require('./controller/admController');
const paginasController = require('./controller/pagesController');

const router = express.Router()


router.get('/', paginasController.showIndex)
router.get('/sign-in',paginasController.showAccount)
router.get('/sign-up',paginasController.showSignUp)
router.get('/cart',paginasController.showCart)
router.get('/products/:category',paginasController.showProduct)
router.get('/detail/:idProduto',paginasController.showProductDetail)



router.get('/adm',admController.showHome)


module.exports = router 