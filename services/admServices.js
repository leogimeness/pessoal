const admUsers = require('../database/admUsers.json')
const{Admins} = require('../models')
const fs = require('fs');
const path = require('path');

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