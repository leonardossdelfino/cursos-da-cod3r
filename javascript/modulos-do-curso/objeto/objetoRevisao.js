// coleção DINÂMICA de pares chave/valor (posso adicionar ou deletar no cód)
const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 220
produto['marca do produto'] = 'Generica' // Foge dos padrões de nomenclatura, pouco usado

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

// criação literal do objeto
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        enderedo: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.enderedo.numero = 1000 // altera o número do proprietário do obj
carro['proprietario']['enderedo']['logradouro'] = 'Av. Gigante'
console.log(carro)

//delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
