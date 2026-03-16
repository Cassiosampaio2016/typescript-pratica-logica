class ListaNumeros {
    private numeros: number[];

    constructor() {
        this.numeros = [];
    };

    addNumeros(num: number) {
        this.numeros.push(num);
    };

    maiorNumero() {
        if (this.numeros.length == 0) {
            return 'Esta vazio';
        };

        let maior = this.numeros[0];

        for (let i = 1; i < this.numeros.length; i++) {
            if (this.numeros[i] > maior) {
                maior = this.numeros[i];
            };
        };

        return `O maior número é: ${maior}`;
    };

    menorNumero() {
        if (this.numeros.length == 0) {
            return 'Esta vazio';
        };

        let menor = this.numeros[0];

        for (let i = 1; i < this.numeros.length; i++) {
            if (this.numeros[i] < menor) {
                menor = this.numeros[i];
            };
        };

        return `O menor número é: ${menor}`;
    };

    media() {
        if (this.numeros.length == 0) {
            return 'Esta vazio';
        };

        let soma = 0;

        for (let i = 1; i < this.numeros.length; i++) {
            soma += this.numeros[i];
        };

        return `A média é: ${soma / this.numeros.length}`;
    };
};

let numero = new ListaNumeros();

numero.addNumeros(3);
numero.addNumeros(10);
numero.addNumeros(5);
numero.addNumeros(6);
numero.addNumeros(7);

console.log(numero.maiorNumero());
console.log(numero.menorNumero());
console.log(numero.media());