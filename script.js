const tarefas = document.getElementById("tarefas");
const tarefaInp = document.getElementById("tarefaInp");

function addTarefa() {
    lista = document.createElement("li");
    var texto = document.createTextNode("vai po");
    lista.appendChild(texto);

    var lista0 = document.getElementsByTagName('ul')[0];

    var itens = document.getElementsByTagName('li');

    lista0.insertBefore(lista, itens[0]);
}

