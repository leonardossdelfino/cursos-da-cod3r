// Object é uma função
console.log(typeof Object)
// Posso instanciar qualquer função, tornando ela um objeto
console.log(typeof new Object)

// Criei minha função cliente, vazia. Mesmo acima
const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

// Class - Muito parecido com Java, mas no fundo tbm é função
// Posso usar os parenteses ou não para instanciar
class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())

// OBJETO É COLEÇÃO -> CHAVE VALOR <-