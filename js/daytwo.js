const btnEnviar = document.querySelector('.botao-enviar');

btnEnviar.addEventListener ("click", enviarResposta);

function enviarResposta () {

    let nome = document.getElementById('input-nome');
    let idade = document.getElementById('input-idade');
    let linguagem = document.getElementById('input-linguagem');
    let respostaNome = document.querySelector('.container__resposta-nome');
    let respostaIdadeLinguagem = document.querySelector('.container__resposta-idade-linguagem');

    const valueNome = nome.value;
    const valueIdade = idade.value;
    const valueLinguagem = linguagem.value;
  
    if (valueNome != '' && valueIdade != '' && valueLinguagem != '') {
        respostaNome.innerHTML = 'Olá, ' + valueNome + '!';
        respostaIdadeLinguagem.innerHTML = 'Você tem ' + valueIdade + ' anos e está aprendendo ' + valueLinguagem + '.';
    } else {
        alert('Por favor, preencha os todos os campos');
    }
}
