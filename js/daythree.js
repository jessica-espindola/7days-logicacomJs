const btnIniciar = document.querySelector('.container__formulario-btn');

btnIniciar.addEventListener("click", IniciarDesafio);

function IniciarDesafio () {

    var nome = prompt("Olá, pessoa!" + "\nGostaria de saber um pouco mais sobre você..." + "\nVou te fazer algumas perguntas e você pode responder na caixa de texto abaixo..." + "\nVamos lá... Qual o seu nome?");

    var front_ou_back = prompt ("Oi, " + nome + "!" + "\nVamos prosseguir!" + "\nDigite o número referente à área que você deseja seguir se desenvolvendo:" + "\n1. Front-End" + "\n 2. Back-End")

    var opcaoUm = 1;
    var opcaoDois = 2;
    var resposta_front_ou_back = parseInt(front_ou_back, 10);
    
    
    var converte_resposta_pergunta_novamente;
    var areaEscolhida_Front = "Front-End";
    var areaEscolhida_Back = "Back-End";

        
    while (resposta_front_ou_back != opcaoUm && resposta_front_ou_back != opcaoDois) {

        var pergunta_novamente_front_ou_back = prompt("Você digitou um número inválido! Por favor, Digite o número referente à área que você deseja seguir se desenvolvendo:" + "\n1. Front-End" + "\n2.Back-End");

        var converte_resposta_pergunta_novamente = parseInt(pergunta_novamente_front_ou_back, 10);

        resposta_front_ou_back = converte_resposta_pergunta_novamente;

    }
  
    if (resposta_front_ou_back == 1) {

        var react_ou_vue = prompt ("Que massa, " + nome + "\nVocê prefere aprender React ou Vue?" + "(Digite o número correspondente à sua escolha:)" + "\n1.React" + "\n2.Vue");

        var converte_resposta_react_ou_vue = parseInt(react_ou_vue, 10);      

        if (converte_resposta_react_ou_vue == opcaoUm) {

            alert("Escolhas de " + nome + "\nÁrea Escolhida: " + areaEscolhida_Front + "\nPrefe se desenvolver em React");  
            
        } else if (converte_resposta_react_ou_vue == opcaoDois) {

            alert("Escolhas de " + nome + "\nÁrea Escolhida: " + areaEscolhida_Back + "\nPrefe se desenvolver em Vue");

        } else {
            alert ("Número inválido!");
            while (converte_resposta_react_ou_vue != 1 && converte_resposta_react_ou_vue != 2) {
                var pergunta_novamente_react_ou_vue = prompt ("\nVocê prefere aprender React ou Vue?" + "(Digite o número correspondente à sua escolha:)" + "\n1. React" + "\n2. Vue");

                var converte_pergunta_novamente_react_ou_vue = parseInt(pergunta_novamente_react_ou_vue, 10);

                converte_resposta_react_ou_vue = converte_pergunta_novamente_react_ou_vue;
            }
        } {

        }

    } else {

        var cCharp_ou_java = prompt ("Que massa, " + nome + "\nVocê prefere aprender C# ou Java?" + "(Digite o número correspondente à sua escolha:)" + "\n1. C#" + "\n2. Java");

        converte_cCharp_ou_java = parseInt (cCharp_ou_java, 10);

        while (converte_cCharp_ou_java != opcaoUm && converte_cCharp_ou_java != opcaoDois) {

            alert ("Número inválido!");

            var pergunta_novamente_cCharp_ou_java = prompt ("Você prefere aprender C# ou Java?" + "(Digite o número correspondente à sua escolha:)" + "\n1. C#" + "\n2. Java");

            var converte_pergunta_novamente_cCharp_ou_Java = parseInt(pergunta_novamente_cCharp_ou_java,10);

            converte_cCharp_ou_java = converte_pergunta_novamente_cCharp_ou_Java;

        }

        if (converte_cCharp_ou_java == opcaoUm) {

            alert("Escolhas de " + nome + "\nÁrea Escolhida: " + areaEscolhida_Back + "\nPrefe se desenvolver em C#");  
        } else {

            alert("Escolhas de " + nome + "\nÁrea Escolhida: " + areaEscolhida_Back + "\nPrefe se desenvolver em Java");  
        }
    }
    
    var especializando_ou_fullstack = prompt ("Hmm.. legal," + nome +"\nVocê prefere seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar um Fullstack?" + "\nDigite o número referente à sua escolha:" + "\n1. Seguir se especializando na área escolhida" + "\n2. Seguir se desenvolvendo para se tornar um Fullstack");

    var converte_especializando_ou_fullstack = parseInt (especializando_ou_fullstack, 10);
    
    var tecnologias_especializar = [];
    var tecnologias_conhecer = [];
    var pEspecializar = 0;
    var pConhecer = 0;

    while (converte_especializando_ou_fullstack != opcaoUm && converte_especializando_ou_fullstack != opcaoDois) {

        var pergunta_novamente_especializando_ou_fullstack = prompt("Você digitou um número inválido! Por favor, Digite o número referente à área que você deseja seguir se desenvolvendo:" +  "\n1. Seguir se especializando na área escolhida" + "\n2. Seguir se desenvolvendo para se tornar um Fullstack");
        
        var converte_pergunta_novamente_especializando_ou_fullstack = parseInt(pergunta_novamente_especializando_ou_fullstack, 10);

        converte_especializando_ou_fullstack = converte_pergunta_novamente_especializando_ou_fullstack;

    }

    if (converte_especializando_ou_fullstack == opcaoUm) {
        alert("Muito bem!" + "\nSe especializar em algo é muito bom. Foque nas principais tecnologias da sua área escolhida e bons estudos!");
        do {
            var tecnologias_deseja_se_especializar = prompt("Escreva abaixo uma tecnologia que você deseja se especializar: ");

            tecnologias_especializar.push (tecnologias_deseja_se_especializar);

            var inserir_mais_tecnologias = prompt("Gostaria de inserir outra tecnologia?\nDigite o número correspondente à sua escolha: \n1. Sim \n2. Não");

            
        } while(inserir_mais_tecnologias == opcaoUm);
        
        alert("Veja aqui um resumo das suas escolhas: \n");
        for (pEspecializar = 0; pEspecializar < tecnologias_especializar.length; pEspecializar = (pEspecializar + 1)){
            console.log("entrou no for sim");
            alert(tecnologias_especializar[pEspecializar] + "\nÓtima escolha! \n Desejo um caminho de muito aprendizado e coisas novas com " + tecnologias_especializar[pEspecializar]);  
        } 
             
    } else {
        alert("Muito bem!" + "\nO caminho para se tornar um Fullstack pode ser um pouco mais longo, mas te trará conhecimentos riquíssimos! Bons estudos!");
        do {
            var tecnologias_para_conhecer = prompt("Escreva abaixo uma tecnologia que você deseja conhecer: ");

            tecnologias_conhecer.push (tecnologias_para_conhecer);

            var inserir_mais_tecnologias_conhecer = prompt ("Gostaria de inserir outra tecnologia?\nDigite o número correspondente à sua escolha: \n1. Sim \n2. Não");

        } while (inserir_mais_tecnologias_conhecer == 1);
        alert("Veja aqui um resumo das suas escolhas: \n");
        for (pConhecer = 0; pConhecer == tecnologias_conhecer.length; pConhecer = (pConhecer + 1)) {
            alert(tecnologias_conhecer[pConhecer] + "\nÓtima escolha! \n Desejo um caminho de muito aprendizado e coisas novas com " + tecnologias_conhecer[pConhecer]);
        }
    }

    


}