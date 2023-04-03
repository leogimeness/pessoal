const usuarios = require('../database/usuarios.json')
const fs = require('fs');
const path = require('path');

function addUsuario(usuario){

    if(usuarios.length > 0){
        usuario.id = parseInt(usuarios[usuarios.length -1].id) + 1
    } else{usuario.id = 1;}

    usuarios.push(usuario)

    save(usuarios)
}

function save(){
    const filePath = path.resolve(__dirname + "/../database/usuarios.json")
    fs.writeFileSync(filePath,JSON.stringify(usuarios,null,4))
}

const usuariosServices = {
    addUsuario,
    save
}

module.exports = usuariosServices;