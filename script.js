const input = document.getElementById("input");
let tarefas = [];

let tarefas = JSON.parse(localStorage.getItem("salvar")) || []

function addTarefa() {
    lista = document.createElement("li");
    var texto = document.createTextNode("vai po");
    lista.appendChild(texto);

    var lista0 = document.getElementsByTagName('ul')[0];

    var itens = document.getElementsByTagName('li');

    lista0.insertBefore(lista, itens[0]);
}

