// Melhor usar o WHILE
// Do While é pouco usado

function getInteiroAleatorioEntre(min, max) {
    // Cáclculo para gera intervalos diferentes
    const valor = Math.random() * (max - min) + min
    // Arrendondamento
    return Math.floor(valor)
}

let opcao = 0

// Faz a primeira linha e sempre executa um vez, se achar a condição e sai do laço
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')