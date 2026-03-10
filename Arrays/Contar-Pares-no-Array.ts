function ContarParesNoArray(numero:number[]):number{
    let contagem = 0;
    for(let i = 0; i < numero.length; i++){
        if(numero[i]%2 == 0){
            contagem++;
        };
    };
    return contagem;
};
console.log(ContarParesNoArray([1,2,3,7,8]));