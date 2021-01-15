// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'João'
console.log(pessoa)

// pessoa -> 456 -> {...} Não atribui um novo objeto para pessoa
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // O bojeto em si se tornou "constante"
                      // Nada pode ser alterado nele

pessoa.nome = 'Maria' // Não muda o nome
pessoa.end = 'Rua ABC' // Não adiciona outro atributo
delete pessoa.nome // em deleta atributos

console.log(pessoa.nome)
console.log(pessoa)

// Cria um objeto já com freeze, é criado com tais informções e não pode ser alterado depois.
const pessoaConstante = Object.freeze({nome: 'João'})