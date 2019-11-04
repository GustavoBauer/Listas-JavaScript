function executar(){
    var resultado = "";
    validar();
    var sexo = document.entrada.sexo.value;
    var massa = document.entrada.massa.value;
    var altura = document.entrada.altura.value;

    var imc = 0;
    imc = massa/(altura*altura);
    imc= imc.toFixed(1);
    resultado+= "IMC: " + imc + "\n";
    if(sexo == "m"){
        if(imc < 20.7){
            resultado+= "Abaixo do peso ideal";
        }else if ( imc < 26.4){
            resultado+= "Peso ideal";
        }else if (imc >= 26.4){
            resultado+= "Acima do peso ideal";
        }
    }else if(sexo == "f"){
        if(imc < 19){
            resultado+= "Abaixo do peso ideal";
        }else if ( imc < 25.8){
            resultado+= "Peso ideal";
        }else if (imc >= 25.8){
            resultado+= "Acima do peso ideal";
        }
    }

    document.getElementById('resultado').value = resultado;
}

function validar() {
    var erro = false;
    var inpObj1 = document.getElementById("input1");
    var inpObj2 = document.getElementById("input2");
    var inpObj3 = document.getElementById("input3");
    var inpObj4 = document.getElementById("input4");
    if (!inpObj1.checkValidity()) {
        document.getElementById("resultado").innerHTML = inpObj1.validationMessage;
        erro = true;
    } 
    if (!inpObj2.checkValidity()) {
        document.getElementById("resultado").innerHTML = inpObj2.validationMessage;
        erro = true;
    } 
    if (!inpObj3.checkValidity()) {
        document.getElementById("resultado").innerHTML = inpObj3.validationMessage;
        erro = true;
    } 
    if (!inpObj4.checkValidity()) {
        document.getElementById("resultado").innerHTML = inpObj4.validationMessage;
        erro = true;
    } 
    if(erro) process.exit(1);
}