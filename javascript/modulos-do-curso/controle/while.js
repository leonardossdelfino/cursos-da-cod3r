function getInteiroAleatorioEntre(min, max) {
    // Cálculo para gerar intervalos diferentes
    const valor = Math.random() * (max - min) + min
    // Arrendondamento
    return Math.floor(valor)
}

let opcao = 0

// Enquanto opção for diferente de -1, faça!
// Se for vardadeiro, ou seja, diferente de -1, fica fazendo o láço
// até encontrar -1, quando encontrar sai do laço.
while (opcao != -1) { // se verdaeiro
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')