function executar(){
    var resultado = "";
    var real = document.entrada.real.value;

    if(real == ""){
        alert("Valor inválido");
        document.entrada.real.focus() ;
        return false;
    }

    real = parseFloat(real);
    var dolar = real/(3.7);
    dolar = dolar.toFixed(2);

    resultado = "Valor em dólar: US$ "+ dolar;
    document.getElementById('resultado').value = resultado;
}