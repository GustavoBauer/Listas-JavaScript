function executar(){
    var resultado = "";
    var chico = 150;
    var ze = 110;

    for(var anos = 0; chico>=ze; anos++){
        chico+= 2;
        ze+= 3;
    }

    resultado+= "Serão necessários " + anos + " anos para Zé ser mais alto que Chico";
    document.getElementById('resultado').value = resultado;
}