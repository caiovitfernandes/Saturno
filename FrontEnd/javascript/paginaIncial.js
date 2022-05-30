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

    var array = [];
    array = data.split("-");

    var dataFinal;

    if(data != '')
    {
        var organizado = [];
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
    
    console.log(dataFinal);

    document.getElementById('aparecerData').innerText = dataFinal;

    if(data != '')
    {
        document.getElementById('calendario').style.left = '76%';
        document.getElementById('notificacaoTarefaImg').style.left = '80%';
        document.getElementById('notificacaoClicadaImg').style.left = '80%';
    }
    else
    {
        document.getElementById('calendario').style.left = '70%';
        document.getElementById('notificacaoTarefaImg').style.left = '74%';
        document.getElementById('notificacaoClicadaImg').style.left = '74%';
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
