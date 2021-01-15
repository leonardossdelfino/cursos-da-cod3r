// par nome/valor ou chave/valor
const saudacao = 'Opa' // Contexto léxico 1 - Onde foi definido

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
// Podemos ter nome conflitantes, se o mesmo nome fizer parte de 
// obejetos distintos.
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)