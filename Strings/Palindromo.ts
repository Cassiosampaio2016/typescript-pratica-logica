function Palindromo(nome:string):boolean{
   let identico = nome.split('').reverse().join('');
   if(identico == nome){
    return true;
   }else{
    return false;
   };
};
console.log(Palindromo('arara'));