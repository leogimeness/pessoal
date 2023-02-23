const produtos = require('../database/produtos.json')

const admController = {

    showHome:(req,res) =>{
        res.render('admhome.ejs')
    }
}


module.exports = admController;