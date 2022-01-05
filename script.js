const ulList = document.getElementById("tarefas");
const inputElement = document.getElementById("input");
let tarefas = JSON.parse(localStorage.getItem("salvar")) || [];

    function addTarefa() {

        var inputValue = inputElement.value;

        if (inputElement.value == "") 

        {
            alert("Escreva uma tarefa primeiro! :D");
        } 
        else {

            tarefas.push(inputValue);

            inputElement.value = "";
            listTask();
            salvar();

        }

}

    function listTask() {



}

    function salvar() {

        localStorage.setItem("salvar", JSON.stringify(tarefas));


}

    function teste() {

    console.log(inputElement.value);

}

    function limpar() {
        console.log("ta removendo ta?");
        tarefas = [];
        localStorage.clear();
    }

    addEventListener('keypress',e=>{

        if(e.key=="Enter") addTarefa()

})