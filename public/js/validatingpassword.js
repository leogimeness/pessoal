let senhaInput = document.getElementById("Password");
let senhaInput2 = document.getElementById("Password2")
let form = document.querySelector('form');

let textPassword = document.getElementById('textPassword')
let textPassword2 = document.getElementById('textPassword2')


// Validacao da Senha Qnd Submete 
form.addEventListener('submit',(e) => {
    e.preventDefault()

    if (senhaInput.value != senhaInput2.value){
        textPassword.textContent = ("Senhas nao sao iguais")
    }else{
        form.submit()
    }
})

// mensagem de erro para mostrar ao usuario o padrao da senha
senhaInput.addEventListener("keyup", () =>{
    if(!validadorSenha(senhaInput.value)){
        textPassword.textContent = ("Senha deve ter no mínimo 8 caracteres, incluir pelo menos uma letra, um número e um caractere especial")
}   else{
        textPassword.textContent =("");
}
})

senhaInput2.addEventListener("keyup", () =>{
    if(!validadorSenha(senhaInput2.value)){
        textPassword2.textContent = ("Senha deve ter no mínimo 8 caracteres, incluir pelo menos uma letra, um número e um caractere especial")
}else{
        textPassword2.textContent =("");
}
})


// Validacao das senhas

function validadorSenha(senha){
    // Minimum eight characters, at least one letter, one number and one special character:
    let senhaRequirements = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return senhaRequirements.test(senha);
}





