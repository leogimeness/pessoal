const produtos = require('../database/produtos.json');
const fs = require('fs');
const path = require('path');

function loadProdutos(){
    return produtos;
};

function loadProduto(idDoProduto){

    let produto = produtos.find(p => p.id == idDoProduto);

    if(produto == undefined){
        throw new Error("Produto inexistente");
    }return produto;
}

function addProduto(produto){

    if (produtos.length > 0){
    produto.id = parseInt(produtos[produtos.length -1].id) + 1;
    } else{
        produto.id = 1;
    }
    
    produtos.push(produto);

    save();
}

function removeProduto(idDoProduto){
    let posicao = produtos.findIndex(p => p.id == idDoProduto);
    if(posicao == -1){
        throw new Error("Pizza inexistente");
    }
    produtos.splice(posicao, 1);
    save();
}

function editProduto(idDoProduto, produtoInfo){

    let produto = produtos.find(p => p.id == idDoProduto);
    if(produto == undefined){
        throw new Error("Produto inexistente");
    }

    produto.nome = produtoInfo.nome;
    produto.genre = produtoInfo.genre;
    produto.price = produtoInfo.price;
    produto.categoryId = produtoInfo.categoryId;

    save();

}

function save(){
    const filePath = path.resolve(__dirname + "/../database/produtos.json");
    fs.writeFileSync(filePath, JSON.stringify(produtos, null, 4));
}


const produtoServices = {
    loadProdutos,
    loadProduto,
    addProduto,
    removeProduto,
    editProduto,
    save
}

module.exports = produtoServices;