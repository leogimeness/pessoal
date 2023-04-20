const { Orders, sequelize } = require('../models');

async function teste(){
    let table = await Orders.findAll({include: "payment_methods"});
    console.log(table)
 
    sequelize.close();
}

module.exports = teste;