const{Admins} = require('../models')


function loadUsuarios(){
    return admUsers;
} 

function loadUsuario(usarioId){

    let usuario = admUsers.find(u => u.id == usarioId)

    if(usuario == undefined){throw new Error("Usuario Inexistente")}return usuario;
}

async function addUsuario(usuario){

    const newUser = await Admins.create(usuario)
    return newUser
}

const admServices = {
    loadUsuarios,
    loadUsuario,
    addUsuario,
}

module.exports = admServices;