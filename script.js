const input = document.getElementById("input");
const listaPai = document.getElementById("tarefas");

let tarefas = JSON.parse(localStorage.getItem("salvar")) || []

function addTarefa() {
    lista = document.createElement("li");

    const valor = input.value;

    var texto = document.createTextNode(valor);


    lista.appendChild(texto)
    listaPai.appendChild(lista)
    
}

