var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var outros = [];
var posicao = 0;

/*------ CAPTURANDO SEÇÃO --------------------------------------------*/
const secao = document.querySelector('.container__lista');
/*------ INSERINDO ELEMENTOS NO HTML --------------------------------------------*/
secao.innerHTML= '<button class="container__lista-botaoComeçar">Começar Desafio</button>';
/*------ CAPTURANDO BOTÃO --------------------------------------------*/
const btnComeçar = document.querySelector('.container__lista-botaoComeçar');
/*------ CRIANDO FUNÇÃO DO BOTÃO COMEÇAR --------------------------------------------*/

btnComeçar.addEventListener("click", comecar); /*CRIANDO O EVENTO DE BOTÃO E ATRELANDO A FUNÇÃO comecar*/
function comecar () {
    secao.innerHTML='<p class="container__lista-p"> Você deseja adicionar algum item na sua lista de compras?</p>\n<button class="container__lista-btnAdd">Adicionar</button>\n<button class="container__lista-btnVoltar">Voltar</button>';

    /*CAPTURANDO OS BOTÕES DE ADICIONAR E VOLTAR ----------------------------*/
    const btnAdd = document.querySelector('.container__lista-btnAdd');
    const btnVoltar = document.querySelector('.container__lista-btnVoltar');
    /*CRIANDO AS FUNCÕES DOS BOTÕES-----------------------------------------*/

    btnAdd.addEventListener("click", inserirComida);
    btnVoltar.addEventListener ("click", voltar);

    function voltar () {
        secao.innerHTML= '<button class="container__lista-botaoComeçar">Começar Desafio</button>';
        const btnComeçar = document.querySelector('.container__lista-botaoComeçar');
        btnComeçar.addEventListener("click", comecar);
    }
} /*criando a funcao*/

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
            console.log(frutas);
            
            secao.innerHTML = '<p class="container__lista-p">Você deseja inserir mais algum item na sua lista de compras?</p><button type="submit" class="container__lista-btnSim">Sim</button><button type="submit" class="container__lista-btnNao">Nao</button>'

            const btnSim = document.querySelector('.container__lista-btnSim');
            const btnNao = document.querySelector('.container__lista-btnNao');

            btnSim.addEventListener("click", inserirComida);
            btnNao.addEventListener("click", mostrarlista);

        } else if (categoria == 'Laticínios') {
            laticinios.push(nome);
            console.log(frutas);
            
            secao.innerHTML = '<p class="container__lista-p">Você deseja inserir mais algum item na sua lista de compras?</p><button type="submit" class="container__lista-btnSim">Sim</button><button type="submit" class="container__lista-btnNao">Nao</button>'

            const btnSim = document.querySelector('.container__lista-btnSim');
            const btnNao = document.querySelector('.container__lista-btnNao');

            btnSim.addEventListener("click", inserirComida);
            btnNao.addEventListener("click", mostrarlista);
        } else if (categoria == 'Congelados') {
            congelados.push(nome);
            console.log(frutas);
            
            secao.innerHTML = '<p class="container__lista-p">Você deseja inserir mais algum item na sua lista de compras?</p><button type="submit" class="container__lista-btnSim">Sim</button><button type="submit" class="container__lista-btnNao">Nao</button>'

            const btnSim = document.querySelector('.container__lista-btnSim');
            const btnNao = document.querySelector('.container__lista-btnNao');

            btnSim.addEventListener("click", inserirComida);
            btnNao.addEventListener("click", mostrarlista);
        } else if (categoria == 'Doces') {
            doces.push(nome);
            secao.innerHTML = '<p class="container__lista-p">Você deseja inserir mais algum item na sua lista de compras?</p><button type="submit" class="container__lista-btnSim">Sim</button><button type="submit" class="container__lista-btnNao">Nao</button>'

            const btnSim = document.querySelector('.container__lista-btnSim');
            const btnNao = document.querySelector('.container__lista-btnNao');

            btnSim.addEventListener("click", inserirComida);
            btnNao.addEventListener("click", mostrarlista);
        } else {
            outros.push(nome);
            secao.innerHTML = '<p class="container__lista-p">Você deseja inserir mais algum item na sua lista de compras?</p><button type="submit" class="container__lista-btnSim">Sim</button><button type="submit" class="container__lista-btnNao">Nao</button>'

            const btnSim = document.querySelector('.container__lista-btnSim');
            const btnNao = document.querySelector('.container__lista-btnNao');

            btnSim.addEventListener("click", inserirComida);
            btnNao.addEventListener("click", mostrarlista);
        }

    }
    
}

function mostrarlista () {

    for (posicao == 0; posicao < frutas.length; posicao++) {
    secao.innerHTML =  `<p class="container__lista-p">Ok! Aqui está a sua lista de compras separado por categoria: </p><p class="container__lista-p"><strong>Frutas:</strong> ${frutas}</p>` + `<p class="container__lista-p"><strong>Laticínios:</strong> ${laticinios}</p>` + `<p class="container__lista-p"><strong>Congelados:</strong> ${congelados}</p>`+`<p class="container__lista-p"><strong>Doces:</strong> ${doces}</p>` + `<p class="container__lista-p"><strong>Outros:</strong> ${outros}</p>`;
    }
    
    
}


