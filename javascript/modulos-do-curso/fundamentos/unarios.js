let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

// primeiro incrementou o num1 pois está pré fixado
// comparou com o num2
// depois fez o decremento do num2 pois num2 está pós fixado
console.log(++num1 === num2--)
console.log(num1 === num2)