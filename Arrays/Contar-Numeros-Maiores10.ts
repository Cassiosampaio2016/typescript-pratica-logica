function ContarNumerosMaiores10(numero:number[]):number{
    let contagem=0;
    for(let i = 0; i <= numero.length; i++){
        if(numero[i] > 10){
            contagem++;
        };
    };
    return contagem;
};
console.log(ContarNumerosMaiores10([1,10,11,15,17]));