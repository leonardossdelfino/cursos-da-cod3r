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
// Se for array usamos [] ou invés de {}
const { nome, idade } = pessoa // pegando nome e idade de pessoa, onde é criado duas cosntantes "automáticamente"
console.log(nome, idade)

// Dessa forma consigo pegar os valores de dentro do objeto e nomealos para n e i, no exemplo
// pegando nome a atrinuindo a variável n
// pegando idade e atribuindo a variável i
const { nome: n, idade: i } = pessoa
console.log(n, i)

// se não houver os atributos solicitados ele  retorna - Undefined
// para bemHumorada, ele retorna true, pois coloquei um valor padrão, caso não tenha valor
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

// Abaixo consigo pegar logradouro, numero e cep de dentro de endereço que está dentro de pessoa
// Onde são criadas as varáveis logradouro, número e cep(nulo)
const { endereco: { logradouro, numero, cep = null} } = pessoa
console.log(logradouro, numero, cep)