function executar() {
    var resultado = "";
    var numero = document.entrada.numero.value;

    if(numero == ""){
        alert("Valor inválido");
        document.entrada.numero.focus() ;
        return false;
    }
    
    if (Number.isInteger(parseFloat(numero))) {
        resultado += numero + " é um número inteiro! \n";
        if (numero % 2 == 0) {
            resultado += "É par! \n";
        } else {
            resultado += "É ímpar! \n";
        }
    } else {
        resultado += numero + " é uma string! \n";
    }

    document.getElementById('resultado').value = resultado;
}


