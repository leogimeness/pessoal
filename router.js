const express = require('express');
const paginasController = require('./controller/pagesController');

const router = express.Router()


router.get('/', paginasController.showIndex)

module.exports = router