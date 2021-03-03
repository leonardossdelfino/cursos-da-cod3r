// Tipos primitivos fazem atribuição por valor
// Objetos fazem atribuição por referência (apenas endereço de memória)
// Para zerar uma variável, melhor prática é atribuir null

let valor // Não inicializada
console.log(valor) // Retorna undefined, pois não tem nada associado a essa variável

valor = null // Ausência de valor
console.log(valor) // Retorna null

const produto = {} // Criado objeto vazio
console.log(produto.preco) // Retorna udefined, pois preço não foi criado

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar, use o Null ou zero se for número
// Undefined retorna false, então abaixo, negando duas vezes o resultado é false
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preço // Null retorna false
console.log(!!produto.preco) // Retorna false pois é Null
console.log(produto)