function calculaSalario(plano, salarioAtual) {
    switch(plano) {
        case "A":
            return salarioAtual = salarioAtual + (salarioAtual * 0.1)
        case "B":
            return salarioAtual = salarioAtual + (salarioAtual * 0.15)
        case "C":
            return salarioAtual = salarioAtual + (salarioAtual * 0.2)
        default:
            return "Plano inválido, selecione A, B ou C."
    }
}

console.log(calculaSalario("A", 1000))
console.log(calculaSalario("B", 1000))
console.log(calculaSalario("C", 1000))
console.log(calculaSalario("D", 1000))