
function loadOptions() {
    var select = [document.getElementById("decada-1"), document.getElementById("decada-2")];

    var opcao = null, texto = null

    for (var j in select) {
        for (var i = 1930; i <= 2010; i += 10) {
            opcao = document.createElement('option');
            opcao.setAttribute("value", i);
            texto = document.createTextNode(i);
            opcao.appendChild(texto);
            select[j].appendChild(opcao);
        }
    }
}

function executar() {
    limpar();
    var urlDecada1 = document.getElementById("decada-1").value;
    urlDecada1 = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=" + urlDecada1

    var urlDecada2 = document.getElementById("decada-2").value;
    urlDecada2 = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=" + urlDecada2

    axios.get(urlDecada1)
        .then(function (response) {
            console.log(response.data[0].res);

            for (var i = 0; i < response.data[0].res.length; i++) {
                var tr = document.createElement('tr');

                var td = [
                    document.createElement('td'),
                    document.createElement('td'),
                    document.createElement('td')
                ];

                var textnode = [
                    document.createTextNode(response.data[0].res[i].nome),
                    document.createTextNode(response.data[0].res[i].frequencia),
                    document.createTextNode(response.data[0].res[i].ranking)
                ]

                for (var j = 0; j < 3; j++) {
                    td[j].appendChild(textnode[j]);
                    tr.appendChild(td[j]);
                }
                element = document.getElementById('tabela-1');
                element.appendChild(tr);
            }
            document.getElementById("tabela-1").style.display = "block";
        })

        .catch(function (error) {
            console.warn(error);
        });

    axios.get(urlDecada2)
        .then(function (response) {
            console.log(response.data[0].res);

            for (var i = 0; i < response.data[0].res.length; i++) {
                var tr = document.createElement('tr');

                var td = [
                    document.createElement('td'),
                    document.createElement('td'),
                    document.createElement('td')
                ];

                var textnode = [
                    document.createTextNode(response.data[0].res[i].nome),
                    document.createTextNode(response.data[0].res[i].frequencia),
                    document.createTextNode(response.data[0].res[i].ranking)
                ]

                for (var j = 0; j < 3; j++) {
                    td[j].appendChild(textnode[j]);
                    tr.appendChild(td[j]);
                }
                element = document.getElementById('tabela-2');
                element.appendChild(tr);
            }
            document.getElementById("tabela-2").style.display = "block";
        })

        .catch(function (error) {
            console.warn(error);
        });

        var cells = document.getElementById("tabela-1");
        var cells = cells.getElementsByTagName("td");

        console.log(cells.length);
    
}

function limpar() {
    var table1 = document.getElementById("tabela-1");
    var table2 = document.getElementById("tabela-2");

    for (var i = table1.rows.length - 1; i > 0; i--) //do último para o primeiro
    {
        table1.deleteRow(i);
        table2.deleteRow(i);
    }
}