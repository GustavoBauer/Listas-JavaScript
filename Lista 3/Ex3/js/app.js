function executar(){
    var resultado = "";
    var cpf = "";
    var digitos = [];
    var digito = 0;
    var somatorio = 0;
    var resto = 0;

    for (var i = 10; i >= 2; i--) {
        digito = Math.floor(Math.random() * 9);
        digitos.push(digito);
        somatorio = somatorio + (digito * i);
    }

    resto = somatorio%11;
    if(resto<2){
        digitos.push(0);
    }else{
        digitos.push((11-resto));
    }

    somatorio = 0;
    for (var i = 11, j = 0; i >= 2; i--, j++) {
        digito = digitos[j];
        somatorio = somatorio + (digito * i);
    }

    resto = somatorio%11;
    if(resto<2){
        digitos.push(0);
    }else{
        digitos.push((11-resto));
    }
    
    cpf = digitos.join("");
    resultado+= cpf.substr(0,3);
    resultado+= ".";
    resultado+= cpf.substr(3,3);
    resultado+= ".";
    resultado+= cpf.substr(6,3);
    resultado+= "-";
    resultado+= cpf.substr(9,2);

    document.getElementById('resultado').value = resultado;
}
