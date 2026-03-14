class Contador{
    private valor:number;

    constructor(valor:number){
        this.valor = valor;
    };
    mostrarvalor(){
        return this.valor
    };
    incrementar(){
        return this.valor++;
    };
    decrementar(){
        return this.valor--;
    };
};

let valores = new Contador(10);
console.log(valores.mostrarvalor());

valores.incrementar();
console.log(valores.mostrarvalor());

valores.incrementar();
valores.incrementar();
valores.incrementar();
valores.decrementar();
console.log(valores.mostrarvalor());