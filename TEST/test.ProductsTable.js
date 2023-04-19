const { Products, sequelize } = require('../models');

async function teste(){
    let products = await Products.findAll();
    console.log(products)
 
    sequelize.close();
}

module.exports = teste;