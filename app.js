alert ('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt (Math.random () *numeroMaximo + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;


//enquanto o chute não for igual ao número secreto
// a expressão != significa diferente
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo} `);
    //se o chute for igual ao número secreto: 
    if (chute == numeroSecreto) {
        break
    }  else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1; é a mesma coisa que tentativas++
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
    alert (`Isso aí você descobriu o número secreto, ${(numeroSecreto)} com ${tentativas} ${palavraTentativas}.`);