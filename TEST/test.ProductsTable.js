const { Orders, sequelize } = require('../models');

async function teste(){
    let table = await Orders.findAll({include: "address"});
    console.log(table[0].address)
 
    sequelize.close();
}

module.exports = teste;