 function getPreco(imposto = 0, moeda = 'R$') {
     // usando o .this, stou dizendo que está no escopo global
     return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
 }

 // Objeto
const produto = {
    nome: 'Notbook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}

// Duas formas de chamar as funções
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))