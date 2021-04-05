// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

// Função factory retorna um objeto, podemos criar novas pessoas com base neste
// objeto, passando apenas os parametros solicitados, exe: nome, preço, tamanho.