function MaiorDoArray(numero:number[]):number{
    let maior = numero[0];
    for(let i = 1; i<numero.length; i++){
        if(numero[i] > maior){
            maior = numero[i];
        };
    };
    return maior;
};
console.log(MaiorDoArray([5,2,11,10,6,4]));