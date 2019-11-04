function executar(){
    validar();
    var resultado = true;
    var somatorio = 0;
    var resto = 0;
    var cpf = (document.entrada.cpf.value).split("");
    cpf = cpf.join("");

    for (var i = 10, j = 0; i >= 2; i--, j++) {
        somatorio = somatorio + (cpf[j] * i);
    }
    resto = somatorio%11;
    if(resto<2){
        if(cpf[9]!=0) {
            resultado = false;
        }
    }else{
        if(cpf[9]!=(11-resto)){
            resultado = false;
        }
    }

    somatorio = 0;
    for (var i = 11, j = 0; i >= 2; i--, j++) {
        somatorio = somatorio + (cpf[j] * i);
    }
    resto = somatorio%11;
    if(resto<2){
        if(cpf[10]!=0) {
            resultado = false;
        }
    }else{
        if(cpf[10]!=(11-resto)){
            resultado = false;
        }
    }

    if(resultado){
        document.getElementById('resultado').value= "CPF válido";
    }else{
        document.getElementById('resultado').value= "CPF inválido";
    }
}

function validar() {
    var erro = false;
    var inpObj1 = document.getElementById("input1");

    if (!(inpObj1.checkValidity())) {
        document.getElementById("resultado").innerHTML = inpObj1.validationMessage;
        erro = true;
    } 
    if(erro) process.exit(1);
}