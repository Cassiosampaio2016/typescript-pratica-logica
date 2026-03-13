class Pessoa{
    private nome:string;
    private idade:number;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    };
    public apresetacao(){
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`;
    };
};

let apresentar = new Pessoa('Cássio', 25);
console.log(apresentar.apresetacao());