function ParOuImpar(numero:number):string{
    return numero%2 == 0? 'par' : 'impar';
};

console.log(ParOuImpar(2));
console.log(ParOuImpar(7));
console.log(ParOuImpar(5));
console.log(ParOuImpar(21));