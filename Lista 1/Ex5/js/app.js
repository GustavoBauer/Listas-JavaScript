function executar(){
    var resultado = "";
    var array = [];
    var menorQue8 = 0;
    var maiorQue10 = 0;

    for(var i = 1; i<=30; i++){
        var random = Math.floor(Math.random() * 15);
        if(random<8) {
            menorQue8++;
        }          
        else if (random>10){
            maiorQue10++;
        }      
        array.push(random);
        resultado+= i + "°: "+ random + "\n";
    }
    resultado += "\nMaiores que 10: " + maiorQue10/30 * 100 + "%";
    resultado += "\nMenores que 8: " + menorQue8/30 * 100 + "%";
    document.getElementById('resultado').value = resultado;
}