function executar(){
    var resultado = "";
    validar();
    var data = document.entrada.data.value;
    data = data.toString();

    var array = data.split("-");
    switch(array[1]){
        case "01":{
            array[1]="Janeiro";
            break;
        }
        case "02":{
            array[1]="Fevereiro";
            break;
        }
        case "03":{
            array[1]="Março";
            break;
        }
        case "04":{
            array[1]="Abril";
            break;
        }
        case "05":{
            array[1]="Maio";
            break;
        }
        case "06":{
            array[1]="Junho";
            break;
        }
        case "07":{
            array[1]="Julho";
            break;
        }
        case "08":{
            array[1]="Agosto";
            break;
        }
        case "09":{
            array[1]="Setembro";
            break;
        }
        case "10":{
            array[1]="Outubro";
            break;
        }
        case "11":{
            array[1]="Novembro";
            break;
        }
        case "12":{
            array[1]="Dezembro";
            break;
        }
        default:{
            array[1]="Desconhecido";
        }
    }

    resultado = array[2]+ " de " +array[1] + " de " + array[0];
    document.getElementById('resultado').value = resultado;
}

function validar() {
    var inpObj = document.getElementById("input1");
    if (!inpObj.checkValidity()) {
        document.getElementById("resultado").innerHTML = inpObj.validationMessage;
        return process.exit(1);
    } 
}