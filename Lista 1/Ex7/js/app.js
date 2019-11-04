function executar(){
    var resultado = "";
    var numero = document.entrada.numero.value;

    if(numero == "" || numero < 0 ){
        alert("Valor inválido");
        document.entrada.numero.focus() ;
        return false;
    }
    
    var fat = 1;
    for (var i = 2; i <= numero; i++) {
        fat = fat * i;
    }
    resultado += "Fatorial de " + numero + ": " + fat;
    document.getElementById('resultado').value = resultado;
}