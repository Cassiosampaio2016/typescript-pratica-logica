function InverterArray(numero:number[]):number[]{
    let inicio = 0;
    let fim = numero.length - 1;
    while(inicio < fim){
        let ajuda = numero[inicio];
        numero[inicio] = numero[fim];
        numero[fim] = ajuda;
        inicio++;
        fim--;
    };
    return numero;
};

console.log(InverterArray([1,2,3,4,5]));