function MediaDoArray(numero:number[]){
    let soma = 0;
    for(let i = 0; i<numero.length; i++){
        soma += numero[i]
    };
    let media = soma/numero.length
    return Number(media.toFixed(2));
};
console.log(MediaDoArray([10,5,5]));
