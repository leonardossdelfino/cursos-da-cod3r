// Criando objeto literal
const cliente = {
    nome: 'Leonardo',
    idade: 31,
    curso: 'JavaScript',
    endereco: {
        rua: 'Marçal',
        numero: 11,
        bairro: 'Centro'
    }
}

console.log(cliente)


// Função que cria objetos
const criaObjeto = (nome, idade, curso) => {
    const cliente = {
        nome: nome,
        idade: idade,
        curso: curso
    }
    return cliente
}

console.log('Função que cria objetos')
console.log(criaObjeto('Leonardo', 31, 'JavaScript'))