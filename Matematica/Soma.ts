function Soma(numero: number):number{
    let inicio = 0;
    for(let i = 1; i <= numero; i++){
        inicio += i;
    };
    return inicio;
};
console.log(Soma(5));