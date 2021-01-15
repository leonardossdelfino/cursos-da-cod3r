/* Usando o destructuring, para criar várias variáveis ao mesmo tempo
 * diferente do array const valores = [1, 2, 3]
 */
const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = d * a
const divisao = d / a
const modulo = a % 2

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)