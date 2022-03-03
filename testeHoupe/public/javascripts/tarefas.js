let inputNovaTarefa = document.querySelector('#inputNovaTarefa')
let btnAddTarefa = document.querySelector('#btnAddTarefa')
let listaTarefas = document.querySelector('#listaTarefas')
let janelaEdicao = document.querySelector('#janelaEdicao')
let janelaEdicaoFundo = document.querySelector('#janelaEdicaoFundo')
let janelaEdicaoBtnFechar = document.querySelector('#janelaEdicaoBtnFechar')
let btnAtualizarTarefa = document.querySelector('#btnAtualizarTarefa')
let idTarefaEdicao = document.querySelector('#idTarefaEdicao')
let inputTarefaNomeEdicao = document.querySelector('#inputTarefaNomeEdicao')


inputNovaTarefa.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId()
    }
    adicionarTarefa(tarefa)
  }
})

janelaEdicaoBtnFechar.addEventListener('click', (e) => {
    alternarJanelaEdicao()
})

function gerarId() {
    return Math.floor(Math.random() * 3000)
}


btnAddTarefa.addEventListener('click', (e) => {
    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),
    }
    adicionarTarefa(tarefa)
})

btnAtualizarTarefa.addEventListener('click', (e) => {
    e.preventDefault()
    let idTarefa = idTarefaEdicao.innerHTML.replace('#','')
    let tarefa = {
        nome: inputTarefaNomeEdicao,
        id: idTarefa
    }

    let tarefaAtual = document.getElementById(''+idTarefa+'')

    if (tarefaAtual) {
        let li = criarTagLI(tarefa)
        listaTarefas.replaceChild(li, tarefaAtual)
        alternarJanelaEdicao()
    }else {
        alert('Elemento não encontrado')
    }
})

function adicionarTarefa(tarefa) {
    if (inputNovaTarefa.value == "") {
        alert('Adicione uma tarefa');
    } 
    else {
        let li = criarTagLI(tarefa);
        listaTarefas.appendChild(li)
        inputNovaTarefa.value = ''
    }
    
}



function criarTagLI(tarefa) {
    let li = document.createElement('li')
    li.id = tarefa.id
    
    let span = document.createElement('span')
    span.classList.add('textoTarefa')
    span.innerHTML = tarefa.nome

    let div = document.createElement('div')

    let btnEditar = document.createElement('button')
    btnEditar.classList.add('btnAcao')
    btnEditar.innerHTML = '<i class="fas fa-pencil-alt"></i>'
    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')')

    let btnExcluir = document.createElement('button')
    btnExcluir.classList.add('btnAcao')
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>'
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')')

    div.appendChild(btnEditar)
    div.appendChild(btnExcluir)

    li.appendChild(span)
    li.appendChild(div)

    return li
}

function editar(idTarefa) {

    let li = document.getElementById(''+ idTarefa + '')
        if (li) {
            idTarefaEdicao.innerHTML = '#' + JSON.parse(idTarefa)
            inputTarefaNomeEdicao.value = li.innerText
            alternarJanelaEdicao()
        }else {
            alert('Elemento não encontrado')
        }
}

function excluir(idTarefa) {
    let confirmacao = window.confirm('Tem certeza que deseja excluir?')
    if (confirmacao) {
        let li = document.getElementById('' + idTarefa + '')
        if (li) {
            listaTarefas.removeChild(li)
        }else {
            alert('Elemento não encontrado')
        }
    }
}

function alternarJanelaEdicao() {
    janelaEdicao.classList.toggle('abrir')
    janelaEdicaoFundo.classList.toggle('abrir')
}