function mostrarCaixaNotificacao(){
    if(document.getElementById('notificacaoClick').checked){
        document.getElementById('caixaNotificacao').style.display = 'block';
        document.getElementById('caixaUsuario').style.display = 'none';
        document.getElementById('usuarioClick').checked = false;
    }

    else{
        document.getElementById('caixaNotificacao').style.display = 'none';
    }
}

function mostrarCaixaUsuario(){
    if(document.getElementById('usuarioClick').checked){
        document.getElementById('caixaUsuario').style.display = 'block';
        document.getElementById('caixaNotificacao').style.display = 'none';
        document.getElementById('notificacaoClick').checked = false;
    }

    else{
        document.getElementById('caixaUsuario').style.display = 'none';
    }
}

function fechaToggles()
{
    document.getElementById('caixaNotificacao').style.display = 'none';
    document.getElementById('notificacaoClick').checked = false;

    document.getElementById('caixaUsuario').style.display = 'none';
    document.getElementById('usuarioClick').checked = false;
}

function fechaMenu()
{
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menuImg2').style.position = 'fixed';
    document.getElementById('tituloLista').style.top = '9.5%';
    document.getElementById('tituloLista').style.paddingLeft = '5%';
    document.getElementById('inputTarefa').style.left = '3%';
    document.getElementById('inputTarefa').style.width = '68%';
    document.getElementById('tarefas').style.marginLeft = '0%';
}

function abreMenu()
{
    document.getElementById('menu').style.display = 'block';
    document.getElementById('menuImg2').style.position = 'relative';
    document.getElementById('tituloLista').style.paddingLeft = '22%';
    document.getElementById('inputTarefa').style.left = '21%';
    document.getElementById('inputTarefa').style.width = '50%';
    document.getElementById('tarefas').style.marginLeft = '20%';
}


function mostraData()
{
    data = document.getElementById('calendario').value;

    let array = [];
    array = data.split("-");

    let dataFinal;

    if(data != '')
    {
        let organizado = [];
        for(i = 0, j = 2; j >= 0; j--, i++)
        {
            organizado[i] = array[j];
        }

        dataFinal = organizado.join('/');
    }
    else
    {
        dataFinal = '';
    }
    

    document.getElementById('aparecerData').innerText = dataFinal;

    if(data != '')
    {
        document.getElementById('calendario').style.left = '76%';
        document.getElementById('notificacaoTarefaImg').style.left = '80%';
        document.getElementById('notificacaoClicadaImg').style.left = '80%';
        document.getElementById('maisImgTarefa').style.marginLeft = '78%';
    }
    else
    {
        document.getElementById('calendario').style.left = '70%';
        document.getElementById('notificacaoTarefaImg').style.left = '74%';
        document.getElementById('notificacaoClicadaImg').style.left = '74%';
        document.getElementById('maisImgTarefa').style.marginLeft = '72%';
    }
}

function marcarNotificacao()
{ 
    var notificacao = document.getElementById('notificacaoTarefa');

    if(notificacao.checked)
    {
        document.getElementById('notificacaoTarefaImg').style.display = 'none';
    }
    else{
        document.getElementById('notificacaoTarefaImg').style.display = 'inline';
    }
}

function mostrarTarefas()
{
    fetch(`http://localhost:6700/getTarefas`).then((resposta) => {
        return resposta.json();
    }).then((retorno) => {
        var parcial = document.createElement('div');
        parcial.setAttribute('id', 'tarefas');
        
        for(i = 0; i < retorno.length; i++)
        {
            var tarefa = document.createElement('div');
            tarefa.setAttribute('class', 'tarefa');

            var label = document.createElement('label').setAttribute('for', 'concluida');

            var concluidaImg = document.createElement('img').setAttribute('src', '/Saturno/FrontEnd/imagens/concluida.png').setAttribute('id', 'concluidaImg');

            label.appendChild(concluidaImg);

            var concluida = document.createElement('input').setAttribute('type', 'checkbox').setAttribute('id', 'concluida');

            var tituloTarefa = document.createElement('h3').setAttribute('class', 'tituloTarefa');

            tituloTarefa.innerText = retorno[i].Titulo;

            var calendarioTarefa = document.createElement('img').setAttribute('src', '/Saturno/FrontEnd/imagens/calendario.png').setAttribute('id', 'calendarioTarefa');

            var dataTarefa = document.createElement('h6').setAttribute('class', 'atributosTarefa');

            dataTarefa.innerText = retorno[i].Data;

            tarefa.appendChild(label);
            tarefa.appendChild(concluida);
            tarefa.appendChild(tituloTarefa);
            tarefa.appendChild(calendarioTarefa);
            tarefa.appendChild(dataTarefa);

            parcial.appendChild(tarefa);
        }

        let divTarefas = document.getElementById('tarefas');

        divTarefas.innerHTML = parcial.innerHTML;
    })
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


function adicionarTarefa()
{
    let id = generateUUID();
    let nome = document.getElementById('inputTarefa').value;
    let dataLimite = document.getElementById('calendario').value;

    let array = [];
    array = dataLimite.split("-");
    let dataFinal;

    if(dataLimite != '')
    {
        let organizado = [];
        for(i = 0, j = 2; j >= 0; j--, i++)
        {
            organizado[i] = array[j];
        }

        dataFinal = organizado.join('-');
    }
    else
    {
        dataFinal = '';
    }

    fetch(`http://localhost:6700/inserirTarefa/${id}/${nome}/${dataFinal}`);
}
