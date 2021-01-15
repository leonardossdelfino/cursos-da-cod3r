// Declaro diretamente como número
const peso1 = 1.0

// Declaro como String porém converte para Number(função)
const peso2 = Number('2.0')

console.log(peso1, peso2)

// isInteger, verifica se é inteiro.
// 1.0  é considerado inteiro pelo JavaScript
// 1.1 é considerado ponto flutuante
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Mostra o valor completo
console.log(media)
// Mostra apenas 2 casas decimais depois do ponto
console.log(media.toFixed(2))
// Converte em String
console.log(media.toString())
// Media é do tipo number
console.log(typeof media)
// Number é uma função -- E number é um tipo
console.log(typeof Number)