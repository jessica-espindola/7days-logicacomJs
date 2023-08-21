let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

let secao = document.querySelector('.container__verifica-resposta-github');
let secaoRespostaUm = document.querySelector('.container__verifica-resposta__conteudo-textoUm');
let secaoRespostaDois = document.querySelector('.container__verifica-resposta__conteudo-textoDois');
let secaoRespostaTres = document.querySelector('.container__verifica-resposta__conteudo-textoTres');
const btnVerifica = document.querySelector('.botao-verificarEComparar');

const secaoCodigo = document.querySelector('.container__verifica-resposta-github');

btnVerifica.addEventListener("click", VerificaCompara);

function VerificaCompara () {
  if (typeof numeroUm == typeof stringUm) {
    secaoRespostaUm.innerHTML = 'As variáveis numeroUm e stringUm possuem os mesmos valores e são de tipos iguais.';
  } else {
    secaoRespostaUm.innerHTML = 'As variáveis numeroUm e stringUm possuem os mesmos valores, mas são de tipos diferentes.';
  }
  
  if (typeof numeroTrinta == typeof stringTrinta) {
    secaoRespostaDois.innerHTML = 'As variáveis numeroTrinta e stringTrinta possuem os mesmos valores e são de tipos iguais.';
  } else {
    secaoRespostaDois.innerHTML = 'As variáveis numeroTrinta e stringTrinta possuem os mesmos valores, mas são de tipos diferentes.'
  }
  
  if (typeof numeroDez == typeof stringDez) {
    secaoRespostaTres.innerHTML = 'As variáveis numeroDez e stringDez possuem os mesmos valores e são de tipos iguais.'
  
  } else {
    secaoRespostaTres.innerHTML = 'As variáveis numeroDez e stringDez possuem os mesmos valores, mas são de tipos diferentes.'
  }

  secaoCodigo.style.display = 'flex';
}

