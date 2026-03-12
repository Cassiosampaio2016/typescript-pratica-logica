function JuntarDoisArrays(a:number[],b:number[]):number[]{
    let resultado:number[] = [];
    for(let i = 0; i < a.length; i++){
        resultado.push(a[i]);
    }
    for(let i = 0; i < b.length; i++){
        resultado.push(b[i])
    };
    return resultado;
};

console.log(JuntarDoisArrays([1,4,8],[10,8,7]));