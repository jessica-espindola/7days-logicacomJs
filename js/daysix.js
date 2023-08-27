/*------- INICIANDO VARIÁVEIS -------*/

var frutas = []; //array das frutas
var laticinios = []; //array dos laticinios
var congelados = []; //array dos congelados
var doces = []; //array dos doces;
var outros = []; //array de outros itens
var posicao = 0; //variável contadora para o loop for


/*------- CODE -------*/

const secao = document.querySelector('.container__lista'); //capturando elemento da  section
secao.innerHTML= '<button class="container__lista-botaoComeçar">Começar Desafio</button>'; //adicionado na section .container__lista
const btnComeçar = document.querySelector('.container__lista-botaoComeçar'); //capturando elemento do botão
btnComeçar.addEventListener("click", comecar); //criando o evento do click no botão que chamará a função comecar


function comecar () {

    secao.innerHTML='<p class="container__lista-p"> Você deseja adicionar algum item na sua lista de compras?</p><button class="container__lista-btnAdd">Adicionar</button><button class="container__lista-btnVoltar">Voltar</button>';

    
    const btnAdd = document.querySelector('.container__lista-btnAdd');
    const btnVoltar = document.querySelector('.container__lista-btnVoltar');
    

    btnAdd.addEventListener("click", inserirComida);
    btnVoltar.addEventListener ("click", voltar);

    function voltar () {
        secao.innerHTML= '<button class="container__lista-botaoComeçar">Começar Desafio</button>';
        const btnComeçar = document.querySelector('.container__lista-botaoComeçar');
        btnComeçar.addEventListener("click", comecar);
    }
}
function inserirComida () {
    secao.innerHTML='<form><br><label for="item" class="container__lista-label">Qual item você deseja adicionar na sua lista de compras?</label><br><input type="text" name="item" id="item" class="input-nome"><br><label for="categoria" class="container__lista-label">Qual categoria você classifica este item?</label><br><select name="categoria" id="categoria"><option value="invalid">Selecione uma categoria</option><option value="Frutas">Frutas</option><option value="Laticínios">Laticínios</option><option value="Congelados">Congelados</option><option value="Doces">Doces</option><option value="Outros">Outros</option></select><br><button type="submit" class="container__lista-btnSalvar">Salvar</button></form>';

    const btnSalvar = document.querySelector('.container__lista-btnSalvar');
    btnSalvar.addEventListener ("click",salvar);

    function salvar (event) {

        event.preventDefault();
        var nomeItem = document.querySelector('.input-nome');
        var select = document.querySelector('#categoria');
        var nome = nomeItem.value;     
        var categoria = select.options[select.selectedIndex].text;

        if (categoria == 'Frutas') {
            frutas.push(nome);
            
            secao.innerHTML = '<p class="container__lista-p">O que você deseja fazer agora?</p><button type="submit" class="container__lista-btnAdicionar">Adicionar Novo Item</button><button type="submit" class="container__lista-btnRemover">Remover Item</button><button type="submit" class="container__lista-btnEncerrar">Encerrar</button>'

            const btnAdicionar = document.querySelector('.container__lista-btnAdicionar');
            const btnRemover = document.querySelector('.container__lista-btnRemover');
            const btnEncerrar = document.querySelector('.container__lista-btnEncerrar');

            btnAdicionar.addEventListener("click", inserirComida);
            btnEncerrar.addEventListener("click", funcaoMostrar);
            btnRemover.addEventListener("click", removerComida);
            

        } else if (categoria == 'Laticínios') {
            laticinios.push(nome);
            
            secao.innerHTML = '<p class="container__lista-p">O que você deseja fazer agora?</p><button type="submit" class="container__lista-btnAdicionar">Adicionar Novo Item</button><button type="submit" class="container__lista-btnRemover">Remover Item</button><button type="submit" class="container__lista-btnEncerrar">Encerrar</button>'

            const btnAdicionar = document.querySelector('.container__lista-btnAdicionar');
            const btnRemover = document.querySelector('.container__lista-btnRemover');
            const btnEncerrar = document.querySelector('.container__lista-btnEncerrar');

            btnAdicionar.addEventListener("click", inserirComida);
            btnEncerrar.addEventListener("click", funcaoMostrar);
            btnRemover.addEventListener("click", removerComida);

        } else if (categoria == 'Congelados') {
            congelados.push(nome);
            
            secao.innerHTML = '<p class="container__lista-p">O que você deseja fazer agora?</p><button type="submit" class="container__lista-btnAdicionar">Adicionar Novo Item</button><button type="submit" class="container__lista-btnRemover">Remover Item</button><button type="submit" class="container__lista-btnEncerrar">Encerrar</button>'

            const btnAdicionar = document.querySelector('.container__lista-btnAdicionar');
            const btnRemover = document.querySelector('.container__lista-btnRemover');
            const btnEncerrar = document.querySelector('.container__lista-btnEncerrar');

            btnAdicionar.addEventListener("click", inserirComida);
            btnEncerrar.addEventListener("click", funcaoMostrar);
            btnRemover.addEventListener("click", removerComida);

        } else if (categoria == 'Doces') {
            doces.push(nome);

            secao.innerHTML = '<p class="container__lista-p">O que você deseja fazer agora?</p><button type="submit" class="container__lista-btnAdicionar">Adicionar Novo Item</button><button type="submit" class="container__lista-btnRemover">Remover Item</button><button type="submit" class="container__lista-btnEncerrar">Encerrar</button>'

            const btnAdicionar = document.querySelector('.container__lista-btnAdicionar');
            const btnRemover = document.querySelector('.container__lista-btnRemover');
            const btnEncerrar = document.querySelector('.container__lista-btnEncerrar');

            btnAdicionar.addEventListener("click", inserirComida);
            btnEncerrar.addEventListener("click", funcaoMostrar);
            btnRemover.addEventListener("click", removerComida);

        } else {
            outros.push(nome);

            secao.innerHTML = '<p class="container__lista-p">O que você deseja fazer agora?</p><button type="submit" class="container__lista-btnAdicionar">Adicionar Novo Item</button><button type="submit" class="container__lista-btnRemover">Remover Item</button><button type="submit" class="container__lista-btnEncerrar">Encerrar</button>'

            const btnAdicionar = document.querySelector('.container__lista-btnAdicionar');
            const btnRemover = document.querySelector('.container__lista-btnRemover');
            const btnEncerrar = document.querySelector('.container__lista-btnEncerrar');

            btnAdicionar.addEventListener("click", inserirComida);
            btnEncerrar.addEventListener("click", funcaoMostrar);
            btnRemover.addEventListener("click", removerComida);
        }

    }
    
}
function funcaoMostrar () {

    for (posicao == 0; posicao < frutas.length; posicao++) {
    secao.innerHTML =  `<p class="container__lista-p">Ok! Aqui está a sua lista de compras separado por categoria: </p><p class="container__lista-p"><strong>Frutas:</strong> ${frutas}</p>` + `<p class="container__lista-p"><strong>Laticínios:</strong> ${laticinios}</p>` + `<p class="container__lista-p"><strong>Congelados:</strong> ${congelados}</p>`+`<p class="container__lista-p"><strong>Doces:</strong> ${doces}</p>` + `<p class="container__lista-p"><strong>Outros:</strong> ${outros}</p>`;
    }    
}
function removerComida () {

    for (posicao == 0; posicao < frutas.length; posicao++) {
        secao.innerHTML =  `<p class="container__lista-p">Ok! Aqui está a sua lista de compras separado por categoria: </p><p class="container__lista-p"><strong>Frutas:</strong> ${frutas}</p>` + `<p class="container__lista-p"><strong>Laticínios:</strong> ${laticinios}</p>` + `<p class="container__lista-p"><strong>Congelados:</strong> ${congelados}</p>`+`<p class="container__lista-p"><strong>Doces:</strong> ${doces}</p>` + `<p class="container__lista-p"><strong>Outros:</strong> ${outros}</p>`;
    }
    var HTMLNovo = `<p class="container__lista-p">Digite o nome do item que você deseja remover: </p><input type="text" class="input-remover-nome"><button type="submit" class="btnRemoveItem">Remover</button>`;
    secao.insertAdjacentHTML('beforeend', HTMLNovo);
    var inputRemoverNome = document.querySelector('.input-remover-nome')
    const btnRemoveItem = document.querySelector('.btnRemoveItem');
    btnRemoveItem.addEventListener("click", (remove) => {
        if (frutas.includes(inputRemoverNome.value)) {
            
            var posicaoElemento = frutas.indexOf(inputRemoverNome.value);
            
            frutas.splice(posicaoElemento, 1);
            
            posicao = 0;

            for (posicao == 0; posicao < frutas.length; posicao++) {
                secao.innerHTML =  `<p class="container__lista-p">Item Removido! Aqui está a sua nova lista de compras separado por categoria: </p><p class="container__lista-p"><strong>Frutas:</strong> ${frutas}</p>` + `<p class="container__lista-p"><strong>Laticínios:</strong> ${laticinios}</p>` + `<p class="container__lista-p"><strong>Congelados:</strong> ${congelados}</p>`+`<p class="container__lista-p"><strong>Doces:</strong> ${doces}</p>` + `<p class="container__lista-p"><strong>Outros:</strong> ${outros}</p>`;
            }
            
            var HTMLMaisUm = `<button type="submit" class="btnVoltar">Voltar ao Início</button>`;
            secao.insertAdjacentHTML('beforeend', HTMLMaisUm);
            const btnVoltarInicio = document.querySelector('.btnVoltar');
            btnVoltarInicio.addEventListener("click", comecar);

            
        } else if (laticinios.includes(inputRemoverNome.value)) {
            var posicaoElemento = laticinios.indexOf(inputRemoverNome.value);
            laticinios.splice(posicaoElemento, 1);
            
            for (posicao == 0; posicao < frutas.length; posicao++) {
                secao.innerHTML =  `<p class="container__lista-p">Item Removido! Aqui está a sua nova lista de compras separado por categoria: </p><p class="container__lista-p"><strong>Frutas:</strong> ${frutas}</p>` + `<p class="container__lista-p"><strong>Laticínios:</strong> ${laticinios}</p>` + `<p class="container__lista-p"><strong>Congelados:</strong> ${congelados}</p>`+`<p class="container__lista-p"><strong>Doces:</strong> ${doces}</p>` + `<p class="container__lista-p"><strong>Outros:</strong> ${outros}</p>`;
            }
            
            var HTMLMaisUm = `<button type="submit" class="btnVoltar">Voltar ao Início</button>`;
            secao.insertAdjacentHTML('beforeend', HTMLMaisUm);
            const btnVoltarInicio = document.querySelector('.btnVoltar');
            btnVoltarInicio.addEventListener("click", comecar);
            
        } else if (congelados.includes(inputRemoverNome.value)) {
            var posicaoElemento = congelados.indexOf(inputRemoverNome.value);
            congelados.splice(posicaoElemento, 1);
            
            for (posicao == 0; posicao < frutas.length; posicao++) {
                secao.innerHTML =  `<p class="container__lista-p">Item Removido! Aqui está a sua nova lista de compras separado por categoria: </p><p class="container__lista-p"><strong>Frutas:</strong> ${frutas}</p>` + `<p class="container__lista-p"><strong>Laticínios:</strong> ${laticinios}</p>` + `<p class="container__lista-p"><strong>Congelados:</strong> ${congelados}</p>`+`<p class="container__lista-p"><strong>Doces:</strong> ${doces}</p>` + `<p class="container__lista-p"><strong>Outros:</strong> ${outros}</p>`;
            }
            
            var HTMLMaisUm = `<button type="submit" class="btnVoltar">Voltar ao Início</button>`;
            secao.insertAdjacentHTML('beforeend', HTMLMaisUm);
            const btnVoltarInicio = document.querySelector('.btnVoltar');
            btnVoltarInicio.addEventListener("click", comecar);
            
        } else if (doces.includes(inputRemoverNome.value)) {
            var posicaoElemento = doces.indexOf(inputRemoverNome.value);
            doces.splice(posicaoElemento, 1);
            
            for (posicao == 0; posicao < frutas.length; posicao++) {
                secao.innerHTML =  `<p class="container__lista-p">Item Removido! Aqui está a sua nova lista de compras separado por categoria: </p><p class="container__lista-p"><strong>Frutas:</strong> ${frutas}</p>` + `<p class="container__lista-p"><strong>Laticínios:</strong> ${laticinios}</p>` + `<p class="container__lista-p"><strong>Congelados:</strong> ${congelados}</p>`+`<p class="container__lista-p"><strong>Doces:</strong> ${doces}</p>` + `<p class="container__lista-p"><strong>Outros:</strong> ${outros}</p>`;
            }
            
            var HTMLMaisUm = `<button type="submit" class="btnVoltar">Voltar ao Início</button>`;
            secao.insertAdjacentHTML('beforeend', HTMLMaisUm);
            const btnVoltarInicio = document.querySelector('.btnVoltar');
            btnVoltarInicio.addEventListener("click", comecar);
            
        } else if (outros.includes(inputRemoverNome.value)) {
            var posicaoElemento = outros.indexOf(inputRemoverNome.value);
            outros.splice(posicaoElemento, 1);
            
            for (posicao == 0; posicao < frutas.length; posicao++) {
                secao.innerHTML =  `<p class="container__lista-p">Item Removido! Aqui está a sua nova lista de compras separado por categoria: </p><p class="container__lista-p"><strong>Frutas:</strong> ${frutas}</p>` + `<p class="container__lista-p"><strong>Laticínios:</strong> ${laticinios}</p>` + `<p class="container__lista-p"><strong>Congelados:</strong> ${congelados}</p>`+`<p class="container__lista-p"><strong>Doces:</strong> ${doces}</p>` + `<p class="container__lista-p"><strong>Outros:</strong> ${outros}</p>`;
            }
            
            var HTMLMaisUm = `<button type="submit" class="btnVoltar">Voltar ao Início</button>`;
            secao.insertAdjacentHTML('beforeend', HTMLMaisUm);
            const btnVoltarInicio = document.querySelector('.btnVoltar');
            btnVoltarInicio.addEventListener("click", comecar);
            
        } else {
            var HTMLMais = `<p class="container__lista-p">Não foi possível encontrar o item dentro da lista. Digite o nome exatamente <strong>igual</strong> ao nome do item que está na lista acima.</p>`;
            secao.insertAdjacentHTML('beforeend', HTMLMais);
        }
    });
}


