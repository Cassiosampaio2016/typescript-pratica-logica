class Banco{
    private titular:string;
    private saldo:number;

    constructor(titular:string, saldo:number){
        this.titular = titular;
        this.saldo = saldo;  
    };

    depositar(valor:number){
        this.saldo += valor
        return `Depósito de: ${valor} reais realizada com suscesso, e o saldo em conta é de: ${this.saldo} reais.`;  
    };

    sacar(tirar:number){
        if(this.saldo < tirar){
            return `Saldo insuficiente para Saque.`

        }else{
            this.saldo -= tirar
            return `Saque de ${tirar} reais realizado com sucesso, e o saldo em conta é de: ${this.saldo} reais`
        };
    };

    verSaldo(){
        return `Titular da conta: ${this.titular} e o saldo é de: ${this.saldo} reais`;
    };
};

let conta = new Banco('Cássio',0);
console.log(conta.sacar(100))
console.log(conta.depositar(200))
console.log(conta.sacar(100))
console.log(conta.verSaldo())