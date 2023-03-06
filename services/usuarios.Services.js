const usuarios = require('../database/usuarios.json')
const fs = require('fs');
const path = require('path');

function loadUsuarios(){
    return usuarios;
} 

function loadUsuario(usarioId){

    let usuario = usuarios.find(u => u.id == usarioId)

    if(usuario == undefined){throw new Error("Usuario Inexistente")}return usuario;
}

function addUsuario(usuario){

    if(usuarios.length > 0){
        usuario.id = parseInt(usuarios[usuarios.length -1].id) + 1
    } usuario.id = 1;
}

function save(){
    const filePath = path.resolve(__dirname + "/../database/usuarios.json")
    fs.writeFileSync(filePath,JSON.stringify(usuarios,null,4))
}

const usuariosServices = {
    loadUsuarios,
    loadUsuario,
    addUsuario,
    save
}

module.exports = usuariosServices;