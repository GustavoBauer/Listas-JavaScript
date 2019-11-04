function executar(){
    var resultado = "";
    var nome = document.entrada.nome.value;
    var salBruto = document.entrada.salBruto.value;

    if(nome == ""){
        alert("Valor inválido");
        document.entrada.nome.focus() ;
        return false;
    }else if(salBruto == ""){
        alert("Valor inválido");
        document.entrada.salBruto.focus() ;
        return false;
    }

    salBruto = parseFloat(salBruto);
    var inss = salBruto * 0.085;
    var irrf = (salBruto-inss) * 0.125;
    var salLiq = salBruto - inss - irrf;

    resultado+= "Nome: " + nome + "\n";
    resultado+= "Salário Bruto: R$ " + salBruto.toFixed(2) + "\n";
    resultado+= "Salário Líquido: R$ " + salLiq.toFixed(2) + " (Desconto INSS: R$ " + inss.toFixed(2) + " e Desconto IRRF: R$ "+irrf.toFixed(2) + ")";

    document.getElementById('resultado').value = resultado;
}