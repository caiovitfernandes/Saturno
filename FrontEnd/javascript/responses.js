function getBotResponse(input) {
    input = input.toLowerCase().trim();

    //respostas complexas
    if (input.includes("tarefa")) {
        return "Logo acima você encontrará a área de tarefas, nela você poderá criar, editar ou apagar suas tarefas."
    }
    else if (input.includes("conquista")) {
        return "Ao criar e concluir tarefas você desbloqueia conquistas que podem ser vistas na aba de conquistas."
    }
    else if (input.includes("configurações") || input.includes("conta") || input.includes("email")
    || input.includes("configuracoes")) {
        return "As configurações podem ser acessadas clicando no botão encontrado no canto superior direito desta página. Lá você poderá alterar suas informações de conta, como seu email e senha."
    }

    //respostas simples
    if (input == "ola" || input == "oi") {
        return "Olá!";
    } else if (input == "tchau" || input == "xau") {
        return "Até mais!";
    } else if (input == "obrigado" || input == "valeu" || input == "obg" || input == "vlw") {
        return "Foi um prazer poder te ajudar :)"
    }

    
    
    else {
        return "Não entendi.";
    }
}