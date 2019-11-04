var listElement = document.querySelector("#app ul");
var buttonElement = document.querySelector("#app button");
var inputElement = document.querySelector("#app input");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderizarTodos(){
    listElement.innerHTML = "";

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");
        linkElement.setAttribute("href","#");

        var pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick","removerTodo ( " + pos + ")");

        var linkText = document.createTextNode(" Excluir");
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderizarTodos();

function adicionarTodos(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    renderizarTodos();
    gravarStorage();
}

buttonElement.onclick = function(){ 
    if(inputElement.value == "")
        alert("Valor inválido");
    else 
        adicionarTodos();
} 

function removerTodo(pos){
    todos.splice(pos, 1);
    renderizarTodos();
    gravarStorage();
}

function gravarStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todos));
}