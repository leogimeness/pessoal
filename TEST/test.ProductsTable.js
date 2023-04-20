const { Orders, sequelize } = require('../models');

async function teste(){
    let table = await Orders.findAll({include: "delivery_fee"});
    console.log(table[0])
 
    sequelize.close();
}

module.exports = teste;