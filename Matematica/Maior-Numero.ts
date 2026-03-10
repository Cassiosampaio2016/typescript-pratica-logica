function MaiorNumero (numero1:number,numero2:number) : string {
    if(numero1 > numero2){
        return `${numero1} é o maior`;
    }else if(numero1 < numero2){
        return `${numero2} é o maior`;
    }else{
        return `São iguais`;
    };
};

console.log(MaiorNumero(21,21));
console.log(MaiorNumero(10,21));
console.log(MaiorNumero(10,1));