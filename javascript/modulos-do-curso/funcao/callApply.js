 function getPreco(imposto = 0, moeda = 'R$') {
     // usando o .this, stou dizendo que está no escopo global
     return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
 }

 // Objeto
const produto = {
    nome: 'Notbook',
    preco: 4589,
    desc: 0.15,
    getPreco // colocando o mesmo nome da função, ele já cria automático o nome
            // do atributo com o mesmo nome e atribiu a função a ele

}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

// outras formas

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Duas formas de chamar as funções
// primeiro ´o contexto, depois os parametros da própria função
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))