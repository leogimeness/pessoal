const { Address, sequelize } = require('../models');

async function teste(){
    let table = await Address.findAll({include: "clients"});
    console.log(table[0].clients)
 
    sequelize.close();
}

module.exports = teste;