function executar() {
    limpar();
    validar();

    var emprestimo = document.entrada.emprestimo.value;
    var parcelas = document.entrada.parcelas.value;
    var amortizacao = emprestimo / parcelas;
    var taxaJuros = document.entrada.taxaJuros.value / 100;

    var tr = document.createElement('tr');

    var td = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
    ];

    var textnode = [
        document.createTextNode(0),
        document.createTextNode(emprestimo),
        document.createTextNode("-"),
        document.createTextNode("-"),
        document.createTextNode("-"),
    ]

    for (var j = 0; j < 5; j++) {
        td[j].appendChild(textnode[j]);
        tr.appendChild(td[j]);
    }
    element = document.getElementById('tabela');
    element.appendChild(tr);

    var totalJuros = 0;
    var totalPrestacao = 0;
    for (var i = 1; i <= parcelas; i++) {
        var juros = emprestimo * taxaJuros;
        var prestacao = juros + amortizacao;  
        var emprestimo = emprestimo - amortizacao;

        var tr = document.createElement('tr');

        var td = [
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
        ];

        var textnode = [
            document.createTextNode(i),
            document.createTextNode(emprestimo.toFixed(2)),
            document.createTextNode(amortizacao.toFixed(2)),
            document.createTextNode(juros.toFixed(2)),
            document.createTextNode(prestacao.toFixed(2)),
        ]

        for (var j = 0; j < 5; j++) {
            td[j].appendChild(textnode[j]);
            tr.appendChild(td[j]);
        }
        element = document.getElementById('tabela');
        element.appendChild(tr);

        totalJuros += juros;
        totalPrestacao += prestacao;
    }

    var tr = document.createElement('tr');

    var td = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
    ];

    var textnode = [
        document.createTextNode("Total"),
        document.createTextNode(""),
        document.createTextNode((amortizacao*parcelas).toFixed(2)),
        document.createTextNode(totalJuros.toFixed(2)),
        document.createTextNode(totalPrestacao.toFixed(2)),
    ]

    for (var j = 0; j < 5; j++) {
        td[j].appendChild(textnode[j]);
        tr.appendChild(td[j]);
    }
    element = document.getElementById('tabela');
    element.appendChild(tr);

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
    if(erro) process.exit(1);
}

function limpar() {
    var table = document.getElementById("tabela");

    for(var i = table.rows.length - 1; i > 0; i--) //do último para o primeiro
    {
        table.deleteRow(i);
    }
}