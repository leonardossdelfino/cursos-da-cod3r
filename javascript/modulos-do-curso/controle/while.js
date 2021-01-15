function getInteiroAleatorioEntre(min, max) {
    // Cáclculo para gera intervalos diferentes
    const valor = Math.random() * (max - min) + min
    // Arrendondamento
    return Math.floor(valor)
}

let opcao = 0

// Enquanto opção for diferente de -1, faça!
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')