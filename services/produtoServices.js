const produtos = require('../database/produtos.json');
const {Products,Gallery} = require('../models')
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

async function addProduto(produto,gallery) {
    const newProduct = await Products.create(produto)
    
    const newImage = await Gallery.create
    ({products_id: newProduct.id,
        img_video_path_stored: gallery.img_video_path_stored,
        isImg: gallery.isImg})

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

function save(produtos) {
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