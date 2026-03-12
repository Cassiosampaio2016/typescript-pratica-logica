function SomaArray(numeros:number[]):number{
    let total = 0;
    for(let i = 0; i < numeros.length; i++){
        total += numeros [i]
    }
    return total;
}

console.log(SomaArray( [1,2,3,4,5,6,7,8,9,10]))