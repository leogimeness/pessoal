const express = require('express');
const paginasController = require('./controller/pagesController');

const router = express.Router()


router.get('/', paginasController.showIndex)
router.get('/sign-in',paginasController.showAccount)
router.get('/sign-up',paginasController.showSignUp)


module.exports = router