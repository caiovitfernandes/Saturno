function getBotResponse(input) {
    input = input.toLowerCase().trim();

    //respostas complexas
    if (input.includes("tarefa")) {
        return "Logo acima você encontrará a área de tarefas, nela você poderá criar, editar ou apagar suas tarefas."
    }
    else if (input.includes("configurações") || input.includes("conta") || input.includes("email")
    || input.includes("configuracoes")) {
        return "As configurações podem ser acessadas clicando no botão encontrado no canto superior direito desta página. Lá você poderá alterar suas informações de conta, como seu email e senha."
    }
    else if (input.includes)

    //respostas simples
    if (input == "ola" || input == "oi" || input.includes("oi")) {
        return "Olá!";
    } else if (input == "tchau" || input == "xau") {
        return "Até mais!";
    } else if (input == "obrigado" || input == "valeu" || input == "obg" || input == "vlw") {
        return "Foi um prazer poder te ajudar :)"
    } else if (input.includes("chama")  || input.includes("nome")) {
        return "Eu não possuo um nome, fui criado com o único propósito de guiar os usuários do Saturno no caminho da organização pessoal e o fim da procastinação"
    } else if (input.includes("idade") || input.includes("anos")) {
        return "Fui criado em abril de 2022"
    }
    
    else {
        return "Não entendi.";
    }
}