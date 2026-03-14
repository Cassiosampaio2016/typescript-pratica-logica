class Aluno{
    private nome:string;
    private nota1:number;
    private nota2:number;

    constructor(nome:string, nota1:number, nota2:number){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    };
    nomeDoAluno(){
        return this.nome;
    };
    somarNotas(){
        return (this.nota1 + this.nota2) / 2;
    };
    situacao(){
        if(this.somarNotas() >= 7){
            return `Aprovado, a média obtida foi: ${(this.somarNotas())}`;
        }else{
            return `Reprovado, a média obtida foi: ${(this.somarNotas())}`;
        };
    };
};

let aluno:Aluno = new Aluno('Cássio',5,9);
console.log(aluno.situacao());