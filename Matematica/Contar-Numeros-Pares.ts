function ContarNumerosPares(numero:number):number{
    let contagem = 0;
    for(let i = 1; i <= numero; i++){
    if(i%2 == 0){
        contagem++;
        };
    };
    return contagem;
};
console.log(ContarNumerosPares(100));