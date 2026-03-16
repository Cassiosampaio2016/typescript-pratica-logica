class Tabuadaa{
    private numero:number;
    
    constructor(numero:number){
        this.numero = numero;
    };

    mostrarTabuada(){
        for (let i = 1; i <= 10; i++){
            console.log(`${this.numero}x${i}=${this.numero*i}`);
        };
    };
};

let tabuada:Tabuadaa = new Tabuadaa(5);
tabuada.mostrarTabuada();