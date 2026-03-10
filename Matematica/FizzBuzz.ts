function FizzBuzz(numero:number){
    for(let i = 1; i<= numero; i++){
        if(i%3 == 0 && i%5 == 0 ){
            console.log(`FizzBuzz ${i}`)
        }else if(i%3 == 0){
            console.log(`Fiz ${i}`)
        }else if(i%5 == 0){
            console.log(`Buz ${i}`)
        }else{
            console.log(i)
        }
    }
}
FizzBuzz(20);