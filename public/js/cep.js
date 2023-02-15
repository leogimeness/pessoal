// capture de elementos 
const inputCep = document.getElementById("cepInput");

const inputRua = document.getElementById("ruaInput");

const inputBairro = document.getElementById("bairroInput");

const inputCidade = document.getElementById("cidadeInput");

const inputEstado = document.getElementById("estadoInput");

//====================================================

// funcoes q lidam com os eventos: handlers
function onInputKeyUp(){    
    if (inputCep.value.length == 9){
        carregaInfoDoCep(inputCep.value);
    }
    
}

// ===================================================
function carregaInfoDoCep(cep){

    let url = `https://viacep.com.br/ws/${cep}/json/`;
     
    fetch(url)
    .then(resposta =>{
        return resposta.json()
    })
    .then (data => {
        console.log(data)

        inputRua.value = data.logradouro;
        inputBairro.value = data.bairro;
        inputCidade.value = data.localidade;
        inputEstado.value = data.uf;
    })
}   

// ====================================================
// associacao de eventos e handlers 

inputCep.addEventListener("keyup",onInputKeyUp)

// ======================================================