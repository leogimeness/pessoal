const{Admins} = require('../models')

async function addUsuario(usuario){

    const newUser = await Admins.create(usuario)
    return newUser
}

const admServices = {
    addUsuario,
}

module.exports = admServices;