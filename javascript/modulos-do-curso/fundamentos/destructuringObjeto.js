// novo recurso do ESC2015
// Destructuring é uma forma de retirar elementos de um objeto ou array

// crio o objeto pessoa
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// destructuring - remove do objeto de uma forma mais simplificada
// crio a variável const passando entre{} o que quero "pegar", depois indico o objeto, no caso pessoa
// Se for array usamos [] ou invpes de {}
const { nome, idade } = pessoa
console.log(nome, idade)

// Dessa forma consigo pegar os valores de dentro do objeto e nomealos para n e i, no exemplo
const { nome: n, idade: i } = pessoa
console.log(n, i)

// se não houver as chaves solicitadas ele vai retornar para sobrenome - Undefined
// para bemHumorada, ele retorna true, pois coloquei um valor padrão, caso não tenha valor
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep = null} } = pessoa
console.log(logradouro, numero, cep)