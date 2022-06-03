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

function formataData(data) {
    let dataCompleta;
    let dia;
    let mes;
    let ano;

    dia = data.substring(8);
    mes = data.substring(5, 7);
    ano = data.substring(0, 4);

    dataCompleta = dia + "-" + mes + "-" + ano;
    return dataCompleta;
}

function formataGenero(genero) {
    let generoNovo = genero.charAt(0);
    return generoNovo;
}


function salvaLogin() {
    let id = generateUUID();
    let login = document.getElementById("login_cadastro").value;
    let email = document.getElementById("email_cadastro").value;
    let senha = document.getElementById("senha_cadastro").value;
    let data = document.getElementById("data_cadastro").value;
    data = formataData(data);
    let genero = document.getElementById("genero_cadastro").value;
    genero = formataGenero(genero);

    if (login == "" || email == "" || senha == "" || data == "" || genero == "") {
        alert("Não deixei nenhum campo em branco!");
    }
    else {
        addUser(id, login, email, senha, data, genero);
    }
}

function addUser(id, login, email, senha, data, genero) {
    fetch(`http://localhost:6700/inserirUsuario/${id}/${login}/${email}/${senha}/${genero}/${data}`);
    alert("Usuário criado com sucesso");
    window.location.href = "/Saturno/FrontEnd/html/paginaLogin.html";
}