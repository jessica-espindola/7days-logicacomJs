var btnJogar = document.querySelector('.btnJogar');

var numero_escondido;
var tentativa;
var chute;

btnJogar.addEventListener ("click", IniciarJogo);

function IniciarJogo () {

    var tentativa = 1;

    var numero_escondido = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    
    var chute = parseInt(prompt ('Digite abaixo o seu palpite: '), 10);
    
    if (chute == numero_escondido && tentativa < 3) {
        alert('Parabéns, você acertou! \nO número escondido era: '+ numero_escondido + ' e você digitou: ' + chute);

    } else {
        do {
            chute = prompt ('Você errou! \nDigite abaixo seu novo palpite:');
            if (chute == numero_escondido) {
                alert('Parabéns, você acertou! \nO número escondido era '+ numero_escondido + ' e você digitou: ' + chute);
                break;
            } else {
                tentativa++
            }
        } while(chute != numero_escondido && tentativa <= 3)
          
    } 
}



