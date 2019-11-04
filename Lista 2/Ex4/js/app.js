function executar(){
    validar();
    var resultado = "";
    var cpf = document.entrada.cpf.value;

    resultado+= cpf.substr(0,3);
    resultado+= ".";
    resultado+= cpf.substr(3,3);
    resultado+= ".";
    resultado+= cpf.substr(6,3);
    resultado+= "-";
    resultado+= cpf.substr(9,2);

    document.getElementById('resultado').value = resultado;
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