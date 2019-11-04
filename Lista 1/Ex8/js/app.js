var i = 0;

function executar() {
    i = 0;
    document.getElementById('resultado').value = "";
    var numero = document.entrada.numero.value;
    if(numero == "" || numero < 0 ){
        alert("Valor inválido");
        document.entrada.numero.focus() ;
        return false;
    }

    sequencia();
}

function sequencia(){
    var resultado = "";
    var numero = document.entrada.numero.value - i;
    if (numero >= 0) {
        document.getElementById("btn1").disabled = true;
        document.getElementById("input1").readOnly = true;
        resultado += numero + "\n";
        i++;
        document.getElementById('resultado').value += resultado;
        var timer = setTimeout(sequencia, 1000);
    }else{ 
        document.getElementById("btn1").disabled = false;
        document.getElementById("input1").readOnly = false;
        clearTimeout(timer); }
}


