const admUsers = require('../database/admUsers.json')
const fs = require('fs');
const path = require('path');

function loadUsuarios(){
    return admUsers;
} 

function loadUsuario(usarioId){

    let usuario = admUsers.find(u => u.id == usarioId)

    if(usuario == undefined){throw new Error("Usuario Inexistente")}return usuario;
}

function addUsuario(usuario){

    if(admUsers.length > 0){
        usuario.id = parseInt(admUsers[admUsers.length -1].id) + 1
    } else{usuario.id = 1;}

    admUsers.push(usuario)

    save(admUsers)
}

function save(){
    const filePath = path.resolve(__dirname + "/../database/admUsers.json")
    fs.writeFileSync(filePath,JSON.stringify(admUsers,null,4))
}

const admServices = {
    loadUsuarios,
    loadUsuario,
    addUsuario,
    save
}

module.exports = admServices;