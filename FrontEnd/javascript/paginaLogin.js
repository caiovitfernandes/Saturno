function entrar() {
    let email = document.getElementById("email_login").value;

    if(!email.includes("\'"))
    {
        let senha = document.getElementById("senha_login").value;
        if (email == "" || senha == "") {
            alert("Não deixe nenhum campo em branco!");
        }
        confereLogin(email, senha);
    } 
    else{
        alert("Vc é um viadão");
    } 
}

function confereLogin(email, senha) {
    fetch(`http://localhost:6700/login/${email}/${senha}`).then((resposta) => 
    {
        return resposta.text();
    }).then((algo) => { 
        console.log(algo);
        if(algo == "Sim"){
            window.location.href = "/Saturno/FrontEnd/html/paginaInicial.html";
        }
        else{
            alert("Usuario ou senha incorretos");
        }
    });
}