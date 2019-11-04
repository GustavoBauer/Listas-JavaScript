function executar() {
    validar();

    var salBruto = document.entrada.salBruto.value;
    salBruto = parseFloat(salBruto);
    var dependentes = document.entrada.dependentes.value;
    dependentes = parseInt(dependentes);
    var outrosDesc = document.entrada.outrosDesc.value;
    outrosDesc = parseFloat(outrosDesc);

    var aliquotaINSS = 0;
    var INSS = 0;
    var IRRF = 0;
    var aliquotaIRRF = 0;
    var deducao = 0;
    var totalDesc = 0;
    var salLiquido = 0;

    document.getElementById('td-salBruto').innerHTML = "R$ " + salBruto.toFixed(2);

    if (salBruto <= 1751.81) {
        aliquotaINSS = 8/100;
    } else if (salBruto >= 1751.82 && salBruto <= 2919.72) {
        aliquotaINSS = 9/100;
    } else if (salBruto >= 2919.73 && salBruto <= 5839.45) {
        aliquotaINSS = 11/100;
    } else {
        aliquotaINSS = "TETO";
    }

    if (aliquotaINSS == "TETO") {
        document.getElementById('td-aliquotaINSS').innerHTML = aliquotaINSS;
        INSS = 642.34;
    } else {
        document.getElementById('td-aliquotaINSS').innerHTML = (aliquotaINSS * 100) + "%";
        INSS = salBruto * aliquotaINSS;
    }
    document.getElementById('td-INSS').innerHTML = "R$ " + INSS.toFixed(2);

    //DEDUÇÕES IRRF
    IRRF = INSS + (189.59 * dependentes);
    //BASE IRRF
    IRRF = salBruto - IRRF;
    //VALOR IRRF
    if (IRRF >= 1903.99 && IRRF <= 2826.65) {
        aliquotaIRRF = 7.5/100;
        deducao = 142.80;
    } else if (IRRF >= 2826.66 && IRRF <= 3751.05) {
        aliquotaIRRF = 15/100;
        deducao = 354.80;
    } else if (IRRF >= 3751.06 && IRRF <= 4664.68) {
        aliquotaIRRF = 22.5/100;
        deducao = 636.13;
    } else if (IRRF > 4664.68) {
        aliquotaIRRF = 27.5/100;
        deducao = 869.36;
    }

    if (aliquotaIRRF == 0 && deducao == 0) {
        document.getElementById('td-aliquotaIRRF').innerHTML = "-";
    } else {
        document.getElementById('td-aliquotaIRRF').innerHTML = (aliquotaIRRF * 10)*10 + "%";
    }
    IRRF = IRRF * aliquotaIRRF - deducao;
    document.getElementById('td-descontoIRRF').innerHTML = "R$ " + IRRF.toFixed(2);

    document.getElementById('td-outrosDesc').innerHTML = "R$ " + outrosDesc.toFixed(2);

    document.getElementById('td-salBruto2').innerHTML = "R$ " + salBruto.toFixed(2);
    totalDesc = outrosDesc + INSS + IRRF;
    document.getElementById('td-totalDesc').innerHTML = "R$ " + totalDesc.toFixed(2);

    salLiquido = salBruto - totalDesc;
    document.getElementById('td-salLiquido').innerHTML = "R$ " + salLiquido.toFixed(2);

    document.getElementById("container-tabela").style.display = "block";
}

function validar() {
    var erro = false;
    var inpObj1 = document.getElementById("input1");
    var inpObj2 = document.getElementById("input2");
    var inpObj3 = document.getElementById("input3");
    if (!inpObj1.checkValidity()) {
        alert(inpObj1.validationMessage);
        erro = true;
    }
    if (!inpObj2.checkValidity()) {
        alert(inpObj2.validationMessage);
        erro = true;
    }
    if (!inpObj3.checkValidity()) {
        alert(inpObj3.validationMessage);
        erro = true;
    }
    if (erro) process.exit(1);
}