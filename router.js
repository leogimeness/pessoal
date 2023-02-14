const express = require('express');
const paginasController = require('./controller/pagesController');

const router = express.Router()


router.get('/', paginasController.showIndex)
router.get('/sign-in',paginasController.showAccount)


module.exports = router