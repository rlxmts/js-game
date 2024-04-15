let chute 
let tentativa = 1;
let numeroMaximo = 100;
numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

while(numeroSecreto != chute){

    chute = prompt(`Digite um numero entre 1 e ${numeroMaximo}`);

    if(chute == numeroSecreto){
        break;
    }else{        
        if( chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        }else{
            alert(`O numero secreto é maior que ${chute}`)
        }
    }

    tentativa++;
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o numero secreto com ${tentativa} ${palavraTentativa}`);

5