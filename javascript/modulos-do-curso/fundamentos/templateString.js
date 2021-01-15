const nome = 'Rebeca'

// Forma mais "padrão" de concatenação
const concatenacao = 'Olá ' + nome + '!'

// Usando template String, mais "elegante"
// Ele mantem a formatação da frase, como os espaços por exemplo.
const template = `Olá ${nome}`
console.log(concatenacao, template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)

// Função Arrow
// Cria uma função UP passando um TEXTO pra ela
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)