//Criando a Promise
var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.gi33thub.com/users/wagomes');
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject("Erro na requisição");
                }
            }
        }
    });
}

//Tratando a resposta da Promisse
minhaPromise()
    .then(function (response) {
        //Executa se a requisição for executada corretamente
        console.log(response);
    })
    .catch(function (error) {
        //Executa se a requisição retornar erro
        console.warn(error);
    })

