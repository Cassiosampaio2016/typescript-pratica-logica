function OrdenarArray(numero:number[]):number[]{
    for(let i = 0; i < numero.length; i++){
        for(let j = i + 1; j < numero.length; j++){

            if(numero[i] > numero[j]){
                let ordem = numero[i];
                numero[i] = numero[j];
                numero[j] = ordem;
            };
        };
    };
    return numero;
};

console.log(OrdenarArray([2,5,6,7,8,4,3,-1,-10]));