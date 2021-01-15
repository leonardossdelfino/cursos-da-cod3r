let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/* Negando duas vezes com o !!, eu forço um número inteiro a ser
 * considerado booleano
 */
isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log('!!3')
console.log(!!-1)
// Espaço em branco ou preenchido
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
// Ele resolve se é falso ou verdadeiro se baseando no () interno
// Se for true resolve true
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
// String vazia, sem nada
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(undefined)
// Ele resolve se é falso ou verdadeiro se baseando no () interno
// Se for false e resolve false
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
// retorna true por tem o ' ' <- espaço em brando que é true
console.log(!!('' || null || 0 || ' '))

// Se nome for String vazia(false), ele imprime desconhecido
let nome = ''
console.log(nome || 'Desconhecido')

// Se nome tiver algum dado, ele imprime este dado, no caso, Leo
nome = 'Leo'
console.log(nome || 'Desconhecido')