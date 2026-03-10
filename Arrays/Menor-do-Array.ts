function MenorDoArray(numero:number[]):number{
    let menor = numero[0];
    for(let i = 1; i<numero.length; i++){
        if(numero[i] < menor){
            menor = numero[i];
        };
    };
    return menor;
};
console.log(MenorDoArray([5,2,11,10,6,4,1,-1,-10]));
console.log(MenorDoArray([5,2,11,10,6,4]));