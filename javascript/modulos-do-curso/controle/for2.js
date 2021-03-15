const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// pego os indices do array e mostro no console, através do i
// como se pegasse os indices e armazenasse no let i
for (let i in notas) {
    console.log(i, notas[i])
}

// criado objeto pessoa
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// PERCORRENDO UM OBJETO COM -> IN <-
// pego os atributos de pessoa a armazeno na let atributo
// no console escrevo o atributo = valor do atributo
// ele percorre sozinho do inicio ao fim

// let INDICE/CHAVE in OBJETO/ARRAY
for (let atributo in pessoa) {
                   // chave         // valor
    console.log(`${atributo} = ${pessoa[atributo]}`)
}