class Calculadora{
    private n1: number;
    private n2: number;
    constructor(n1:number, n2:number){
        this.n1 = n1;
        this.n2 = n2;
    };
    somar(){
        return this.n1 + this.n2;
    };
    dividir(){
        return this.n1 / this.n2;
    };
    multiplicar(){
        return this.n1 * this.n2;
    };
    subtrair(){
        return this.n1 - this.n2;
    };
};

let calcucar = new Calculadora(5,11);
console.log(calcucar.somar());
console.log(calcucar.subtrair());
console.log(calcucar.multiplicar());
console.log(Number(calcucar.dividir().toFixed(2)));