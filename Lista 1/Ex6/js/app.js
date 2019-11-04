function executar() {
    var resultado = "";
    var array = [];

    for (var i = 0; i < 10; i++) {
        var random = Math.floor((Math.random() * 25)) + 1;
        array.push(random);
    }
    array.sort(sortfunction);
    resultado += array;
    document.getElementById('resultado').value = resultado;
}

function sortfunction(a, b) {
    return (b - a) //faz com que o array seja ordenado numericamente e de ordem decrescente.
}