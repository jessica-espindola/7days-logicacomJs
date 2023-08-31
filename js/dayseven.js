const secao = document.querySelector('.container__calculadora');

secao.innerHTML = `<button type="submit" class="btnIniciar">Iniciar Calculadora</button>`;
const btnIniciar = document.querySelector('.btnIniciar');
var operacao;
var sinal;


function soma () {
    operacao = 'Soma';
    sinal = '+';
    const secaoExibicao = document.querySelector('.container__calculadora__exibicao');
    secaoExibicao.innerHTML = `<p class="container__calculadora__exibicao-p">Você escolheu a operação de: ${operacao}.<br>Digite abaixo os valores que deseja somar</p>
    <section class="container__calculadora__exibicao__input">
    <input type="text" class="input-primeiroNumero">
    <p class="container__calculadora__exibicao__input-p"> ${sinal} </p>
    <input type="text" class="input-segundoNumero">
    </section>
    <button type="submit" class="btnFazerCalculo">Somar Valores</button>`;

    const btnFazerCalculo = document.querySelector('.btnFazerCalculo');
    btnFazerCalculo.addEventListener("click", fazerSoma);
    
}
function fazerSoma () {
    var primeiroNumero = document.querySelector('.input-primeiroNumero');
    var segundoNumero = document.querySelector('.input-segundoNumero');
        
    var primeiroNumeroInt = parseInt(primeiroNumero.value);
    var segundoNumeroInt = parseInt(segundoNumero.value);
        
    var calculo = primeiroNumeroInt + segundoNumeroInt;
    console.log(soma);
    var Resposta = `<section class="container__calculadora__exibicao__resposta">
    <p class="container__calculadora__exibicao__resposta-p">O resultado da soma dos valores acima é: ${calculo}</p>
    </section>
    </section>`;
    const secaoExibicao = document.querySelector('.container__calculadora__exibicao');
    secaoExibicao.insertAdjacentHTML('beforeend', Resposta);
}
function subtracao () {
    operacao = 'Subtração';
    sinal = '-';
    const secaoExibicao = document.querySelector('.container__calculadora__exibicao');
    secaoExibicao.innerHTML = `<p class="container__calculadora__exibicao-p">Você escolheu a operação de: ${operacao}.<br>Digite abaixo os valores que deseja subtrair</p>
    <section class="container__calculadora__exibicao__input">
    <input type="text" class="input-primeiroNumero">
    <p class="container__calculadora__exibicao__input-p"> ${sinal} </p>
    <input type="text" class="input-segundoNumero">
    </section>
    <button type="submit" class="btnFazerCalculo">Subtrair Valores</button>`;

    const btnFazerCalculo = document.querySelector('.btnFazerCalculo');
    btnFazerCalculo.addEventListener("click", fazerSubtracao);
}
function fazerSubtracao () {
    var primeiroNumero = document.querySelector('.input-primeiroNumero');
    var segundoNumero = document.querySelector('.input-segundoNumero');
        
    var primeiroNumeroInt = parseInt(primeiroNumero.value);
    var segundoNumeroInt = parseInt(segundoNumero.value);
        
    var calculo = primeiroNumeroInt - segundoNumeroInt;
    console.log(calculo);
    var Resposta = `<section class="container__calculadora__exibicao__resposta">
    <p class="container__calculadora__exibicao__resposta-p">O resultado da subtração dos valores acima é: ${calculo}</p>
    </section>
    </section>`;
    const secaoExibicao = document.querySelector('.container__calculadora__exibicao');
    secaoExibicao.insertAdjacentHTML('beforeend', Resposta);
}
function multiplicacao () {
    operacao = 'Multiplicação';
    sinal = '*';
    const secaoExibicao = document.querySelector('.container__calculadora__exibicao');
    secaoExibicao.innerHTML = `<p class="container__calculadora__exibicao-p">Você escolheu a operação de: ${operacao}.<br>Digite abaixo os valores que deseja multiplicar</p>
    <section class="container__calculadora__exibicao__input">
    <input type="text" class="input-primeiroNumero">
    <p class="container__calculadora__exibicao__input-p"> ${sinal} </p>
    <input type="text" class="input-segundoNumero">
    </section>
    <button type="submit" class="btnFazerCalculo">Multiplicar Valores</button>`;

    const btnFazerCalculo = document.querySelector('.btnFazerCalculo');
    btnFazerCalculo.addEventListener("click", fazerMultiplicacao);
}
function fazerMultiplicacao () {
    var primeiroNumero = document.querySelector('.input-primeiroNumero');
    var segundoNumero = document.querySelector('.input-segundoNumero');
        
    var primeiroNumeroInt = parseInt(primeiroNumero.value);
    var segundoNumeroInt = parseInt(segundoNumero.value);
        
    var calculo = primeiroNumeroInt * segundoNumeroInt;
    console.log(calculo);
    var Resposta = `<section class="container__calculadora__exibicao__resposta">
    <p class="container__calculadora__exibicao__resposta-p">O resultado da multiplicação dos valores acima é: ${calculo}</p>
    </section>
    </section>`;
    const secaoExibicao = document.querySelector('.container__calculadora__exibicao');
    secaoExibicao.insertAdjacentHTML('beforeend', Resposta);
}
function divisao () {
    operacao = 'Divisão';
    sinal = '/';
    const secaoExibicao = document.querySelector('.container__calculadora__exibicao');
    secaoExibicao.innerHTML = `<p class="container__calculadora__exibicao-p">Você escolheu a operação de: ${operacao}.<br>Digite abaixo os valores que deseja dividir</p>
    <section class="container__calculadora__exibicao__input">
    <input type="text" class="input-primeiroNumero">
    <p class="container__calculadora__exibicao__input-p"> ${sinal} </p>
    <input type="text" class="input-segundoNumero">
    </section>
    <button type="submit" class="btnFazerCalculo">Dividir Valores</button>`;

    const btnFazerCalculo = document.querySelector('.btnFazerCalculo');
    btnFazerCalculo.addEventListener("click", fazerDivisao);
}
function fazerDivisao () {
    var primeiroNumero = document.querySelector('.input-primeiroNumero');
    var segundoNumero = document.querySelector('.input-segundoNumero');
        
    var primeiroNumeroInt = parseInt(primeiroNumero.value);
    var segundoNumeroInt = parseInt(segundoNumero.value);
        
    var calculo = primeiroNumeroInt / segundoNumeroInt;
    console.log(calculo);
    var Resposta = `<section class="container__calculadora__exibicao__resposta">
    <p class="container__calculadora__exibicao__resposta-p">O resultado da divisão dos valores acima é: ${calculo}</p>
    </section>
    </section>`;
    const secaoExibicao = document.querySelector('.container__calculadora__exibicao');
    secaoExibicao.insertAdjacentHTML('beforeend', Resposta);
}
function sair () {
    const secaoExibicao = document.querySelector('.container__calculadora__exibicao');
    secaoExibicao.innerHTML = `<p class="container__calculadora__exibicao-p">Até a próxima!</p>
    <button type="subtmit" class="btnVoltar">Voltar ao Início</button>`

    const btnVoltar = document.querySelector('.btnVoltar');
    
    btnVoltar.addEventListener("click", (voltar) => {
        const secao = document.querySelector('.container__calculadora');
        
        secao.innerHTML = `<button type="submit" class="btnIniciar">Iniciar Calculadora</button>`;
        const btnIniciar = document.querySelector('.btnIniciar');
        btnIniciar.addEventListener("click", IniciarCalculadora);
    })

}
function IniciarCalculadora () {
    secao.innerHTML = `<p class="container__calculadora-p">Escolha qual operação você deseja realizar:</p>
    <section class="container__calculadora__operacao">
    <section class="container__calculadora__operacao__btn">
    <button type="submit" class="btnSoma">Soma</button>
    <button type="submit" class="btnSubtracao">Subtração</button>
    <button type="submit" class="btnMultiplicacao">Multiplicação</button>
    <button type="submit" class="btnDivisao">Divisão</button>
    <button type="submit" class="btnSair">Sair</button>
    </section>
    <section class="container__calculadora__exibicao">
    <p class="container__calculadora__exibicao-p">Escolha uma das operações ao lado.</p>
    </section>`;

    const btnSoma = document.querySelector('.btnSoma');
    const btnSubtracao = document.querySelector('.btnSubtracao');
    const btnMultiplicacao = document.querySelector('.btnMultiplicacao');
    const btnDivisao = document.querySelector('.btnDivisao');
    const btnSair = document.querySelector('.btnSair');

    btnSoma.addEventListener("click", soma);
    btnSubtracao.addEventListener("click", subtracao);
    btnMultiplicacao.addEventListener("click", multiplicacao);
    btnDivisao.addEventListener("click", divisao);
    btnSair.addEventListener("click", sair);
}
btnIniciar.addEventListener("click", IniciarCalculadora);