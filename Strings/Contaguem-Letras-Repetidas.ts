function ContaguemLetrasRepetidas(nome:string){
    let maior:number = 0;
    let letraIgual = '';

    for(let i = 0; i < nome.length; i++){
        let contagem = 0;
        for(let j = 0; j < nome.length; j++){
            if(nome[i] == nome[j]){
                contagem++;
            };
        }if(contagem > maior){
            maior = contagem;
            letraIgual = nome[i];
        };
    };

    console.log(nome);
    console.log(`A letra ${letraIgual} se repete ${maior} vezes`);
};

ContaguemLetrasRepetidas('cassio');