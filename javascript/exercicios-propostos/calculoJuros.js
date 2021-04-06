const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacaoMes) => {
    return capitalInicial + (capitalInicial * (taxaJuros / 100) * tempoAplicacaoMes)
}

const jurosCompostoss = (capitalInicial, taxaJuros, tempoAplicacaoMes) => {
    return capitalInicial * (1 + (taxaJuros / 100)) ** tempoAplicacaoMes
    
}

console.log(jurosSimples(100, 10, 2))
console.log(jurosCompostoss(100, 10, 2))