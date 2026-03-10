function NomeReverso(nome:string):string{
    let resultado='';
    for(let i = nome.length - 1; i >= 0; i--){
        resultado += nome[i]
    };
    return resultado;
};

console.log(NomeReverso('cassio'));