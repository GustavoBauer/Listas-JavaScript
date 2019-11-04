//Biblioteca Axios está disponível em: https://github.com/axios/axios

//Criando e tratando a requisição
axios.get('https://api.github.com/users/wagomes')
    .then(function (response) {
        console.log(response);
    })
    .then(function(pending){
        console.log("Carregando...");
    })
    .catch(function (error) {
        console.warn(error);
    });