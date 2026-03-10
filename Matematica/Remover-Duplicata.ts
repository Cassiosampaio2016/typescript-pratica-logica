function RemoverDuplicata(numero:number[]):number[]{
    let resultado:number[] = [];
    for(let i = 0; i < numero.length; i++){
        if(!resultado.includes(numero[i])){
            resultado.push (numero[i]);
        };
    };
    return resultado;
};
console.log(RemoverDuplicata([1,1,2]))