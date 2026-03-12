function SegundomaiorNumero(numero:number[]):number{
    let maior = numero[0];
    let segundomaior = numero[1];

    if(segundomaior > maior){
        let ajuda = segundomaior;
        segundomaior = maior;
        maior = ajuda;
    };
    
    for(let i = 2; i < numero.length; i++){
        if(numero[i] > maior){
            segundomaior = maior;
            maior = numero[i];
        }else if(numero[i] > segundomaior && segundomaior < maior){
            segundomaior = numero[i];
        };
    };
    return segundomaior;
};

console.log(SegundomaiorNumero([5,4,7,0,0,7,4,6,8,9]));