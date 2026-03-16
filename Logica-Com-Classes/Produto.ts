class Produto{
    private nome:string;
    private preco:number;

    constructor(nome:string, preco:number){
        this.nome = nome;
        this. preco = preco;
    };
    mostrarProduto(){
        return `O produto: ${this.nome} esta ${this.preco.toFixed(2)} R$.`;
    };
    alterarPreco(novoPreco:number){
        this.preco = novoPreco;
    };
};

let produto = new Produto('carne', 4.56);
console.log(produto.mostrarProduto());
produto.alterarPreco(10);
console.log(produto.mostrarProduto());