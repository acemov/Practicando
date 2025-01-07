const sym1 = Symbol("Hola")
const sym2 = Symbol("Hola")
console.log(sym1 == sym2);

// - - - - - - - - - - - - - - - -
let numero1 = 10213912389138293n
let numero2 = BigInt(10213912389138293)

console.log(numero1 + numero2);

let numero = 1

console.log(numero1 + numero2 + BigInt(numero)); 
