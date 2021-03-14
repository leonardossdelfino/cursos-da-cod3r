console.log('01)', '1' == 1) // Compara igualdade, valor
console.log('02)', '1' === 1) // Estritamente igual, tipo
console.log('03)', '3' != 3)  // Diferente, valor
console.log('04)', '3' !== 3) // Estritamente diferente, tipo

console.log('05)', 3 < 2) // Menor
console.log('06)', 3 > 2) // Maior
console.log('07)', 3 <= 2) // Menor ou igual
console.log('08)', 3 >= 2) // Maior ou igual

// Date(0) - é o marco zero do JavaScript, 1970
const d1 = new Date(0)
const d2 = new Date(0)

// Ambos são falsos pois estão comparando entre endeços de memória diferentes
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)

// True pois compara em milessegundos desde 1970, com o getTime
// Está comparando os valores do get Time
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)