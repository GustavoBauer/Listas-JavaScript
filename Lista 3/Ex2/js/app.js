function criar() {
    var nome = document.entrada.nome.value;
    if (nome == "") {
        document.getElementById('resultado').value = "Nome vazio";
    } else {
        localStorage.setItem("nome", nome);
        document.getElementById('resultado').value = "Nome cadastrado!";
    }

}

function recuperar() {
    var nome = localStorage.getItem("nome");
    if (nome == null) {
        document.getElementById('resultado').value = "Erro ao recuperar - Nenhum nome em local storage";
    } else {
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();

        if (h >= 0 && h <= 11) {
            document.getElementById('resultado').value = "Bom dia, " + nome;
        } else if (h >= 12 && h <= 18) {
            document.getElementById('resultado').value = "Boa tarde, " + nome;
        } else if (h <= 19 && h <= 23) {
            document.getElementById('resultado').value = "Boa noite, " + nome;
        }

        if ((h == 7 && m == 0)|| (h == 13 && m == 15)) {
            document.getElementById('resultado').value+= "\n"+nome + ", vamos para aula!";
        } else if ((h == 9 && m == 15) || (h == 15 && m == 30)) {
            document.getElementById('resultado').value+= "\n"+nome + ", hora do RECREIO!";
        } else if ((h == 18 && m == 0)|| (h == 11 && m == 45)) {
            document.getElementById('resultado').value+= "\n"+nome + ", a aula terminou! Vamos embora!";
        }
    }
}

function excluir() {
    var nome = localStorage.getItem("nome");
    if (nome == null) {
        document.getElementById('resultado').value = "Erro ao excluir - Nenhum nome em local storage";
    } else {
        localStorage.removeItem("nome");
        document.getElementById('resultado').value = "Nome excluído!";
    }

}
