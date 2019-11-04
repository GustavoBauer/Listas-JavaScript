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
        if (h >= 0 && h <= 11) {
            document.getElementById('resultado').value = "Bom dia, " + nome;
        } else if (h >= 12 && h <= 18) {
            document.getElementById('resultado').value = "Boa tarde, " + nome;
        } else if (h <= 19 && h <= 23) {
            document.getElementById('resultado').value = "Boa noite, " + nome;
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
