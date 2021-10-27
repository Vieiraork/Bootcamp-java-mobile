let lista = document.getElementById('list');
let input = document.getElementById('tarefa');
let tarefas = [];

function mostraNomes() {
    stringLista = "";
    for(let i = 0; i <= tarefas.length; i++) {
        stringLista = stringLista + `<p>${tarefas[i]}</p>`;
    }
    document.getElementById('list').innerHTML = stringLista;
}

function tarefa() {
    tarefas.push = [{
        tarefa: input.value
    }];
    console.log(tarefas);
    mostraNomes();
}

function novaTarefa() {
    console.log(tarefas);
}