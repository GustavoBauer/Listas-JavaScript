function executar() {
    var inpObj = document.getElementById("input1");
    if (!inpObj.checkValidity()) {
        document.getElementById("resultado").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("resultado").innerHTML = "Input OK";
    }
}


