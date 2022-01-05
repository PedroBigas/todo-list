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


        ulList.innerHTML = "";

            for(const tarefa of tarefas) {
                
                console.log(tarefa);
                const liList = document.createElement("li");
                const textTask = document.createTextNode(tarefa);
                const id = tarefas.indexOf(tarefa);

                const apagarTask = document.createElement("ion-icon");
                apagarTask.setAttribute("name","trash-outline");
                // <ion-icon name="trash-outline"></ion-icon>

                liList.appendChild(textTask);
                ulList.appendChild(liList);
                liList.appendChild(apagarTask);

                apagarTask.setAttribute("onclick",`FapagarTask(${id})`);

            }

}

listTask()

    function salvar() {

        localStorage.setItem("salvar", JSON.stringify(tarefas));

}

    function teste() {

        console.log(inputElement.value);

}

    function FapagarTask(id) {
        
            setTimeout(() => {
                
                tarefas.splice(id,1);
                listTask();
                salvar();

                }, 1000);

    }

    function limpar() {
        console.log("ta removendo ta?");
        tarefas = [];
        localStorage.clear();
        ulList.innerHTML = "";
    }

    addEventListener('keypress',e=>{

        if(e.key=="Enter") addTarefa()

})